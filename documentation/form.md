### Submit Your Own Recipe: The Path to Gourmet Glory

Follow these simple steps to submit your own glorious recipe to Sleepy Chef...

1. **Fill out the recipe form**: Provide the necessary information for your recipe:
   - Recipe name: Enter the name of your recipe.
   - Recipe type: Select one or more categories that best describe your recipe, such as breakfast, lunch, or dinner.
   - Recipe time: Specify the duration needed to prepare the recipe.
   - Vegetarian and vegan options: Check the boxes if the recipe is suitable for vegetarians or vegans.
   - Ingredients: List the necessary ingredients for your recipe. Use the "+" and "-" buttons to add or remove ingredients.
   - Nutrition information: Enter details about the nutritional content of the recipe, such as calories, fat, protein, etc.
   - Directions: Describe the step-by-step process for preparing the recipe. Add or remove steps using the "+" and "-" buttons, remove all directions and start over with "clear all" button.

2. **Automatic data saving**: Your progress will be automatically saved in your browser's local storage, ensuring you don't lose your work.

3. **Verify your humanity**: Complete the hCaptcha challenge to confirm you're not a robot. Follow the instructions provided.

4. **Submit your recipe**: After successfully verifying the hCaptcha challenge, click the "Submit" button to send your recipe for submission.

5. **Client-side validation**: The form will be validated to ensure all required fields are filled. Make any necessary corrections before resubmitting.

6. **Server-side processing**: The form data is sent to the server-side API route located at /api/submit-recipe.

7. **API route checks**: The API route performs several checks, including:
   - Verifying the hCaptcha token to confirm successful completion of the challenge.
   - Implementing rate limiting to prevent excessive submissions from the same user and IP address within the last hour.

8. **Database transaction**: If the submission passes the rate limiting checks, the API route connects to the database and initiates a transaction to ensure data consistency.

9. **Insertion and validation**: Within the transaction, the recipe data is inserted into the database collection, and the recipe object is validated.

10. **Email notification**: If the recipe insertion is successful, an email notification is sent to the Sleepy Chef team (hi it's me) to inform them of the new recipe submission.

11. **User tracking**: The API route sets a userId cookie with a unique identifier for the user, allowing the server to track submissions and enforce rate limiting. We also have a security valve in place to prevent excessive submissions from a single IP address.

12. **Success response**: A success response with the inserted recipe's ID is sent back to the client, confirming the successful submission. Keep the data flowing!

13. **Reset and clear**: On the client-side, the local storage data is cleared, resetting the form for the next generation of sleepy chef submissions.

14. **Success message**: The form component updates, displaying a success message to the user, ensuring a smooth user experience. This step is important because it gives the user the option to either go back to the recipe form, or return to the Home page. We also reset the recipe form data behind the scenes. Sneaky!


By following these steps, you can help pave the way for the future of culinary arts. Okay, probably not. But I'll definitely try out your recipe and be immensely grateful you took the time out of your day to contribute, so there's that. Thanks for reading!
