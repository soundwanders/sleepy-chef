import { MongoClient, ObjectId } from 'mongodb';
import updateRecipeDb from '@utils/updateRecipeDb';

let client;

async function connectToDatabase() {
  if (!client || !client.isConnected()) {
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    });
  }
  return client;
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { recipeId, approvalStatus } = req.body;

      // Validate request parameters
      if (!recipeId || !approvalStatus) {
        return res.status(400).json({ error: 'Recipe ID and approval status are required' });
      }

      const db = (await connectToDatabase()).db();
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
        // updateRecipeDb(recipe);
        return;
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
