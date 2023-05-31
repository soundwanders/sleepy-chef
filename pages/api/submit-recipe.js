import { MongoClient } from 'mongodb';
import { sendNotificationEmail } from '@utils/notification-email';
import { rateLimitMiddleware } from '@utils/middleware/rate-limit';

let client;

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

      // Create a new session
      client.startSession();
    }
    return client;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      if (!req.body) {
        return res.status(400).json({ error: 'Request body is empty' });
      }

      const db = (await connectToDatabase()).db();
      const recipesCollection = db.collection('recipes');
      const submissionsCollection = db.collection('submissions');

      // Rate limiting middleware
      await rateLimitMiddleware(req, res, submissionsCollection, async () => {
        const recipe = req.body;

        // Validate recipe object
        if (!recipe || typeof recipe !== 'object') {
          return res.status(400).json({ error: 'Invalid recipe object' });
        }

        const { userId } = recipe;

        if (!userId || typeof userId !== 'string' || userId.trim() === '') {
          return res.status(400).json({ error: 'Invalid userId string' });
        }

        // Check if user has exceeded submission limit in the past hour
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        const submissions = await submissionsCollection.find({
          userId,
          timestamp: { $gte: oneHourAgo },
        }).toArray();

        if (submissions.length >= 20) {
          return res.status(429).json({
            error: 'Sorry, too many submissions within the last hour. Please try again later.',
          });
        }

        await client.withSession(async (session) => {
          try {
            await session.withTransaction(async () => {
              const result = await recipesCollection.insertOne(recipe, { session });
              if (result.insertedCount !== 1) {
                throw new Error('Failed to insert recipe');
              }

              // Log submission
              await submissionsCollection.insertOne({ userId, timestamp: new Date() }, { session });

              // Send email notification
              await sendNotificationEmail(recipe);

              return res.status(201).json({ id: result.insertedId });
            });
          } catch (error) {
            console.error('Transaction error:', error);
            await session.abortTransaction();
            return res.status(500).json({ error: 'Failed to submit recipe' });
          } finally {
            // End the session
            session.endSession();
          }
        });
      });

      // Close the client connection after the session completes
      await client.close();
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
