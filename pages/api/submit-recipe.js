import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      if (!req.body) {
        res.status(400).json({ error: 'Request body is empty' });
        return;
      }

      const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
      });      

      const recipesCollection = client.db().collection('recipes');
      const submissionsCollection = client.db().collection('submissions');

      // start transaction
      const session = client.startSession();
      try {
        await session.withTransaction(async () => {
          const recipe = JSON.parse(req.body);

          // check if recipe is valid
          if (!recipe || typeof recipe !== 'object') {
            res.status(400).json({ error: 'Invalid recipe object' });
            return;
          }

          const { user } = recipe;
          if (!user || typeof user !== 'string') {
            res.status(400).json({ error: 'Invalid user string' });
            return;
          }

          // check if user has exceeded submission limit
          const moment = new Date();
          const hourAgo = new Date(moment - 60 * 60 * 1000);
          const submissions = await submissionsCollection.find({
            user,
            timestamp: { $gte: hourAgo },
          }).toArray();

          if (submissions.length >= 20) {
            res.status(429).json({
              error: 'Sorry, too many submissions within the last hour. Please try again later.',
            });
            return;
          }

          // insert recipe into database
          const result = await recipesCollection.insertOne(recipe, { session });
          if (result.insertedCount !== 1) {
            throw new Error('Failed to insert recipe');
          }

          // log submission
          await submissionsCollection.insertOne({ user, timestamp: moment }, { session });

          // return response with recipe ID
          res.status(201).json({ id: result.insertedId });
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit recipe' });
        await session.abortTransaction();
      } finally {
        session.endSession();
        client.close();
      }
    } catch (err) {
      console.error(err);
      res.status(503).json({ error: 'Failed to connect to database' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
