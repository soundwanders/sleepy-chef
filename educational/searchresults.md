SearchResults is a functional component that displays a list of recipes based on a user's search query.

SWR (stale-while-revalidate) is an awesome library for data-fetching in React that makes it easy to handle caching, revalidation, and focus tracking.

When using SWR, the data is first fetched from the cache, if it's not there it will be fetched from the network. This provides a faster response time for the user, since the data is retrieved from the cache if it's available, and it also reduces the load on the server by minimizing the amount API calls.

Additionally, SWR also provides a way to handle revalidation, which means that it will automatically check if the data in the cache is still valid and if it's not, it will fetch fresh data from the network. This ensures that the data displayed to the user is always up-to-date.

In comparison, if you were to use a typical useEffect and Fetch/await to handle data-fetching, it would not provide these caching and revalidation features. The data would have to be fetched from the network every time the component re-renders. This can result in slower response time for the user and increased load on the server.

So, we continue on down the path, finding ourselves destructuring the `query` object from the `router` object, which contains the search query, and assigning it to variables `type`, `ingredient`, and `name`.

The component then defines an empty array called `queryParams` and a variable `endpoint` which is used to store our conditional statement that decides which API endpoint to use. The code then checks if the `type`, `ingredient`, and 'name' variables are truthy, and if so, pushes the corresponding key-value pairs to the 'queryParams' array using template literals.

Then, we declare the `queryString` variable to become the result of joining the `queryParams` array using the '&' separator. The `endpoint` variable is then set to the concatenation of the base endpoint `/api/recipes` and the `queryString` variable.

The next step is to use the useSWR hook to fetch the data from our API. The hook takes in two arguments, the first being the endpoint, and the second being an async function that makes the fetch request. The function takes in the 'url' as a parameter, which is our API endpoint. The function makes the fetch request and checks if the status is ok, if so it returns the JSON response, otherwise, it throws an error based on the status code.

Before displaying the data, it has to pass checks to see if there is an error or if the data has fully loaded, and handles each case appropriately. If we're good to go, then we allow our component to move on and render our search results. 

We also define a short function named `handleSortChange` that helps sort our recipe cards alphabetically. Breaking it down, let's take a closer look at the sort function:

```
if (sortBy === "name-asc") {
  sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
} else if (sortBy === "name-desc") {
  sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
};
```

sortBy is a state, which is used to hold the current state of our data. In other words, it tracks what sort order the recipe cards are currently in and allows us to freely switch that order without refreshing the page. Our `sortedData` variable is an empty variable that is filled with our fetched recipe data. This allows us to work with the recipe data, in this case sort it, without altering the original data. Less potential for data drama, which is always a good thing. 
<br/>
The `Array.prototype.sort()` method sorts the recipe cards based on the recipe's __name__ property. The localeCompare(), which we use to compare the names, returns a number that indicates the sort order. This particular method considers the "locale-specific" sort order, which means that it takes into account language-specific rules for sorting characters.

When comparing two strings, localeCompare() returns one of three possible values:
  1. A negative number if the first string is sorted before the second string
  2. A positive number if the first string is sorted after the second string
  3. Zero if the two strings are equal

So, we are compares the recipe names character-by-character, taking into account uppercase and lowercase letters, and returning a sort order based on the comparison's results.

Moving on to the actual display of our recipe data, our search results are displayed as a grid of recipe cards with a different card UI for both light and dark modes. Each recipe card is rendered as a 'Link' component, which when clicked, navigates the user to a recipe's details page while also passing along the recipe's name and id as query parameters. 

The cards also include various information about the recipe such as its name, type, and basic nutrition facts. The recipe card's title containers have a conditional background color that depends on the recipe's `type`. The recipeColors object, which contains the background colors as object properties, is compared against the recipe type from the `params`, and then applies the appropriate background color to each card's title container.

And that's the way the cookie crumbles.
