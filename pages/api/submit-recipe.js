import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function runWithConnection(callback) {
  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db(process.env.MONGODB_DB);
  return callback(db);
};

export default async function handler(req, res) {
  const { name, types, time, vegetarian, vegan, ingredients, nutrition, directions } = req.body;

  try {
    await runWithConnection(async (db) => {
      const collection = db.collection('recipes');
      await collection.insertOne({
        name,
        types,
        time,
        vegetarian,
        vegan,
        ingredients,
        nutrition,
        directions,
        createdAt: new Date(),
      });

      res.status(200).json({ message: 'Recipe saved successfully' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error saving recipe' });
  }
};
