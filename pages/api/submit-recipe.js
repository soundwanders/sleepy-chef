import { MongoClient } from 'mongodb';
import { sendNotificationEmail } from '@utils/notification-email';

let client;
const MAX_SUBMISSIONS_PER_HOUR = 30;
const submissionsTracker = {};

async function connectToDatabase() {
  try {
    if (!client || (client && typeof client.isConnected === 'function' && !client.isConnected())) {
      client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: {
          version: '1',
          strict: true,
          deprecationErrors: true,
        }
      });
      await client.connect();
    }
    return client;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      if (!req.body) {
        return res.status(400).json({ error: 'Request body is empty' });
      }

      const { userId } = req.body;

      if (!userId || typeof userId !== 'string' || userId.trim() === '') {
        return res.status(400).json({ error: 'Invalid userId string' });
      }

      const userSubmissionCount = submissionsTracker[userId] || 0;

      if (userSubmissionCount >= MAX_SUBMISSIONS_PER_HOUR) {
        return res.status(429).json({
          error: 'Sorry, too many submissions within the last hour. Please try again later.',
        });
      }

      const db = (await connectToDatabase()).db('SleepyChefRecipes');
      const recipesCollection = db.collection('recipes');
      
      const session = (await connectToDatabase()).startSession();

      try {
        await session.withTransaction(async () => {
          const recipe = req.body;

          // Validate recipe object
          if (!recipe || typeof recipe !== 'object') {
            return res.status(400).json({ error: 'Invalid recipe object' });
          }
          
          const result = await recipesCollection.insertOne(recipe, { session });

          if (!result.insertedId) {
            throw new Error('Failed to insert recipe');
          }

          // Increment the user submission count
          submissionsTracker[userId] = userSubmissionCount + 1;

          // Send email notification
          await sendNotificationEmail(recipe);

          return res.status(201).json({ id: result.insertedId });
        });
      } catch (error) {
        console.error('Transaction error:', error);
        console.error('Transaction Error stack:', error.stack);

        // only abort the transaction if session is active
        if (session.inTransaction()) {
          await session.abortTransaction();
        }

        return res.status(500).json({ error: 'Failed to submit recipe' });
      } finally {
        session.endSession();
      }

    } catch (err) {
      console.error('Database connection error:', err);
      console.error('Error stack:', err.stack);
      console.error('Error name:', err.name);
      console.error('Error message:', err.message);
      return res.status(503).json({ error: 'Failed to connect to the database' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};
