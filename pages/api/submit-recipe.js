import { MongoClient } from 'mongodb';
import { sendNotificationEmail } from '@utils/notification-email';

let client;

async function connectToDatabase() {
  if (!client) {
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
};

export default async function handler(req, res) {
  if (req.method === 'POST') {

    console.log(req.body);

    try {
      if (!req.body) {
        return res.status(400).json({ error: 'Request body is empty' });
      }

      const db = (await connectToDatabase()).db();
      const recipesCollection = db.collection('recipes');
      const submissionsCollection = db.collection('submissions');

      await client.withSession(async (session) => {
        try {
          await session.withTransaction(async () => {
            const recipe = req.body; 
  
            // Validate recipe object
            if (!recipe || typeof recipe !== 'object') {
              return res.status(400).json({ error: 'Invalid recipe object' });
            }
  
            const { user } = recipe;
            if (!user || typeof user !== 'string') {
              return res.status(400).json({ error: 'Invalid user string' });
            }
  
            // Check if user has exceeded submission limit in the past hour
            const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
            const submissions = await submissionsCollection.find({
              user,
              timestamp: { $gte: oneHourAgo },
            }).toArray();
  
            if (submissions.length >= 20) {
              return res.status(429).json({
                error: 'Sorry, too many submissions within the last hour. Please try again later.',
              });
            }
  
            // Insert recipe into database
            const result = await recipesCollection.insertOne(recipe, { session });
            if (result.insertedCount !== 1) {
              throw new Error('Failed to insert recipe');
            }
  
            // Log submission
            await submissionsCollection.insertOne({ user, timestamp: new Date() }, { session });
  
            // Send email notification
            await sendNotificationEmail(recipe);
  
            return res.status(201).json({ id: result.insertedId });
          });
        } catch (error) {
          console.error('Transaction error:', error);
          await session.abortTransaction();
          return res.status(500).json({ error: 'Failed to submit recipe' });
        }
      });

      // After the session completes, you can end the client connection
      await client.close();

    } catch (err) {
      console.error('Database connection error:', err);
      return res.status(503).json({ error: 'Failed to connect to the database' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};
