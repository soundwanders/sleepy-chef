import { MongoClient } from 'mongodb';
import { sendNotificationEmail } from '@utils/notification-email';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

let client;
const MAX_SUBMISSIONS_PER_HOUR = 30;
const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;
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

      const { userId, recipeData, token } = req.body;

      if (!userId || typeof userId !== 'string' || userId.trim() === '') {
        return res.status(400).json({ error: 'Invalid userId string' });
      }
      
      if (!recipeData || typeof recipeData !== 'string') {
        return res.status(400).json({ error: 'Invalid recipeData' });
      }
      
      if (!token || typeof token !== 'string' || token.trim() === '') {
        return res.status(400).json({ error: 'Invalid token string' });
      }

      let parsedRecipeData;
      try {
        parsedRecipeData = JSON.parse(recipeData);
      } catch (error) {
        console.error('Error parsing recipeData:', error);
        return res.status(400).json({ error: 'Invalid recipeData JSON' });
      }
      
      // Verify hCaptcha token
      const verificationEndpoint = 'https://hcaptcha.com/siteverify';
      const verificationUrl = `${verificationEndpoint}?secret=${RECAPTCHA_SECRET}&response=${encodeURIComponent(
        token
      )}`;
      
      const verificationResponse = await fetch(verificationUrl, { method: 'POST' });
      const verificationResult = await verificationResponse.json();
      console.log('Verification Result:', verificationResult);

      if (!verificationResult.success) {
        let errorMessage = 'Failed to verify hCaptcha token';

        if (verificationResult['error-codes'] && verificationResult['error-codes'].length > 0) {
          errorMessage += ` (${verificationResult['error-codes'].join(', ')})`;
        }
        return res.status(400).json({ error: errorMessage });
      }

      // Rate limiting
      const userSubmissionKey = `${userId}:${req.socket.remoteAddress}`;
      const submissionTimestamp = Date.now();

      const userSubmissions = submissionsTracker[userSubmissionKey] || [];

      // Remove older submissions that fall outside the 1-hour window
      const recentSubmissions = userSubmissions.filter(
        (timestamp) => timestamp > submissionTimestamp - HOUR_IN_MILLISECONDS
      );

      if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
        return res.status(429).json({
          error: 'Sorry, too many submissions from this user within the last hour. Please try again later.',
        });
      }

      // Add the current submission timestamp
      userSubmissions.push(submissionTimestamp);
      submissionsTracker[userSubmissionKey] = userSubmissions;

      const ipSubmissionKey = `IP:${req.socket.remoteAddress}`;
      const ipSubmissions = submissionsTracker[ipSubmissionKey] || [];

      // Remove older submissions that fall outside the 1-hour window
      const recentIpSubmissions = ipSubmissions.filter(
        (timestamp) => timestamp > submissionTimestamp - HOUR_IN_MILLISECONDS
      );

      if (recentIpSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
        return res.status(429).json({
          error: 'Sorry, too many submissions from this IP address within the last hour. Please try again later.',
        });
      }

      // Add the current submission timestamp
      ipSubmissions.push(submissionTimestamp);
      submissionsTracker[ipSubmissionKey] = ipSubmissions;

      const db = (await connectToDatabase()).db('SleepyChefRecipes');
      const recipesCollection = db.collection('recipes');
      
      const session = (await connectToDatabase()).startSession();

      try {
        await session.withTransaction(async () => {
          const recipe = {
            ...parsedRecipeData,
            token,
          };
          
          // Validate recipe object
          if (!recipe || typeof recipe !== 'object') {
            return res.status(400).json({ error: 'Invalid recipe object' });
          }
          
          const result = await recipesCollection.insertOne(recipe, { session });

          if (!result.insertedId) {
            throw new Error('Failed to insert recipe');
          }

          // Increment the user submission count
          submissionsTracker[userId] = (submissionsTracker[userId] || 0) + 1;

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
      return res.status(503).json({ error: 'Failed to connect to the database' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};
