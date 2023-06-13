import { MongoClient, ObjectId } from 'mongodb';
import updateRecipeDb from '@utils/updateRecipeDb';

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
      const { recipeId, approvalStatus } = req.body;

      // Validate request parameters
      if (!recipeId || !approvalStatus) {
        return res.status(400).json({ error: 'Recipe ID and approval status are required' });
      }

      const db = (await connectToDatabase()).db('SleepyChefRecipes');
      const recipesCollection = db.collection('recipes');

      // Validate recipe ID
      let recipe;
      try {
        recipe = await recipesCollection.findOne({ _id: ObjectId(recipeId) });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to query the database' });
      }

      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }

      // Validate approval status
      const validApprovalStatuses = ['approved', 'rejected'];
      if (!validApprovalStatuses.includes(approvalStatus)) {
        return res.status(400).json({ error: 'Invalid approval status' });
      }

      // Update the recipe approval status
      const result = await recipesCollection.updateOne(
        { _id: ObjectId(recipeId) },
        { $set: { approved: approvalStatus } }
      );

      if (result.modifiedCount !== 1) {
        return res.status(500).json({ error: 'Failed to update recipe approval status' });
      }

      // If the recipe is approved, update the recipeDb.js file
      if (approvalStatus === 'approved') {
        const recipeDB = await recipesCollection.find().toArray();
        const recipeToAdd = recipeDB.find((r) => r._id.toString() === recipeId);
        if (recipeToAdd) {
          const recipesArray = [...recipeDB];
          recipesArray.push(recipeToAdd);
          // updateRecipeDb(recipesArray);
          return res.status(200).json({ message: 'Recipe approval status updated!' });
        } else {
          return res.status(404).json({ error: 'Recipe not found in the recipeDB' });
        }
      }

      return res.status(200).json({ message: 'Recipe approval status updated!' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};
