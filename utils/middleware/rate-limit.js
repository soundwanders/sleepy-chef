const MAX_SUBMISSIONS_PER_HOUR = 20;

export async function rateLimitMiddleware(req, res, submissionsCollection, next) {
  const { userId } = req.body;

  if (!userId || typeof userId !== 'string' || userId.trim() === '') {
    return res.status(400).json({ error: 'Invalid userId string' });
  }

  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const submissions = await submissionsCollection.find({
    userId,
    timestamp: { $gte: oneHourAgo },
  }).toArray();

  if (submissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    return res.status(429).json({
      error: 'Sorry, too many submissions within the last hour. Please try again later.',
    });
  }

  next();
};
