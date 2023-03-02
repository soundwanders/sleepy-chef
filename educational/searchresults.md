SearchResults is a functional component that displays a list of recipes based on a user's search query.

The component starts by importing several modules, a few of which are worth noting if you have not worked with Next.js before. The Link and useRouter modules are imported from `next/link` and `next/router` respectively, and they are used to handle client-side navigation and passing the search query to the component. The `react-rough-notation` library is imported to enable our Highlighter component to add the highlighter effect to the title text. And last but not least, the useSWR hook is imported from the `swr` library and is used to handle the data fetching and caching of the recipe data.

SWR (stale-while-revalidate) is an awesome library for data-fetching in React that makes it easy to handle caching, revalidation, and focus tracking. It is built on top of the Fetch API and provides a way to handle data-fetching in a highly efficient and user-friendly way.

When using SWR, the data is first fetched from the cache, if it's not there it will be fetched from the network. This provides a faster response time for the user, since the data is retrieved from the cache if it's available, and it also reduces the load on the server by minimizing the amount API calls.

Additionally, SWR also provides a way to handle revalidation, which means that it will automatically check if the data in the cache is still valid and if it's not, it will fetch fresh data from the network. This ensures that the data displayed to the user is always up-to-date.

In comparison, if you were to use a typical useEffect and Fetch/await to handle data-fetching, it would not provide these caching and revalidation features. The data would have to be fetched from the network every time the component re-renders. This can result in slower response time for the user and increased load on the server.

So, we continue on down the path, finding ourselves destructuring the `query` object from the `router` object, which contains the search query, and assigning it to variables `type`, `ingredient`, and `name`.

The component then defines an empty array called `queryParams` and a variable `endpoint` which is used to store our conditional statement that decides which API endpoint to use. The code then checks if the `type`, `ingredient`, and 'name' variables are truthy, and if so, pushes the corresponding key-value pairs to the 'queryParams' array using template literals.

Then, we declare the `queryString` variable to become the result of joining the `queryParams` array using the '&' separator. The `endpoint` variable is then set to the concatenation of the base endpoint `/api/recipes` and the `queryString` variable.

The component then uses the useSWR hook to fetch the data from the API. The hook takes in two arguments, the first being the endpoint, and the second being an async function that makes the fetch request. The function takes in the 'url' as a parameter, which is the endpoint defined earlier. The function makes the fetch request and checks if the status is ok, if so it returns the json response, otherwise, it throws a custom error based on the status code.

Next, the component checks if there is an error or if the data is still loading, and handles each case appropriately. If there are no errors and the data has loaded, we allow our component to move on and render the search results. 

Our search results are displayed as a grid of recipe cards. Each recipe card is rendered as a 'Link' component, which when clicked, navigates the user to a recipe's details page while also passing along the recipe's name and id as query parameters. 

The cards also include various information about the recipe such as its name, type, and basic nutrition facts. The recipe card's title containers have a conditional background color that depends on the recipe's `type`. The recipeColors object, which contains the background colors as object properties, is compared against the recipe type from the `params`, and then applies the appropriate background color to each card's title container.

And that's the way the cookie crumbles.
