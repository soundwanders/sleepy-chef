const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ELASTIC_EMAIL,
      pass: process.env.ELASTIC_PASSWORD,
    },
  });
};

const createEmailTemplate = (recipe) => {
  return `
    <h1>New Recipe Submission</h1>
    <p>A new recipe has been submitted:</p>
    <p>Recipe ID: ${recipe._id}</p>
    <p>Recipe Name: ${recipe.name}</p>
    <p>Submitted By: ${recipe.userId}</p>

    <a href="${process.env.NEXT_PUBLIC_VERCEL_URL}/api/approve-recipe?recipeId=${recipe._id}&approvalStatus=true">Approve</a>
    <br>
    <a href="${process.env.NEXT_PUBLIC_VERCEL_URL}/api/approve-recipe?recipeId=${recipe._id}&approvalStatus=false">Reject</a>
  `;
};

export const sendNotificationEmail = async (recipe) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.PROTONMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: 'New Sleepy Chef Submission',
    html: createEmailTemplate(recipe),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email successfully sent!');
  } catch (error) {
    console.error('Error sending notification email:', error);
    console.error('Nodemailer Email error stack:', error.stack);
  }
};
