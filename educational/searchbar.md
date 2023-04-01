## __Sleepy Searchbar__

The Searchbar component allows a user to search for recipes by **type, ingredient, or name**. The component is using the useRouter hook from the `next/router` library to navigate to the results page with the appropriate query parameters in the URL.

The `handleSubmit` function is called when the user submits the form, and it first prevents the default form submission behavior using ```e.preventDefault()```. After that's out of the way, we create arrays of all the recipe types, ingredients, and names from the recipes context data. Next, we check if the search input matches any of these types, ingredients, or names (all of which are reformatted to be case-insensitive), and assigns the input value to the appropriate variable if it does.

If the search input is empty or it doesn't match any types names, or ingredients, then our `setError` function is called with an error message, and the function returns to prevent further execution. If the input is valid, setError is called with an empty string to clear any error messages, and the `router.push` function navigates the user to the results page. Lastly, the page URL will be reset based on the query parameters that are present, and off we go to view the search results.

The Searchbar leverages the power of React hooks and Next.js to handle routing and search functionality, with the added benefit of using context feature to share the recipe data with other components throughout the app, without having to pass it down through props. Using context is a great way to avoid prop drilling. As an added bonus, using context is an easy way to improve scalability throughout our application. 

Hope that's 