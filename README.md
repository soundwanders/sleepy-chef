# 👩‍🍳 Sleepy Chef
##### Got a mixed bag of ingredients, or looking to get rid of some leftovers? We got your back.

### https://sleepychef.vercel.app/

- Sleepy Chef is a Next.js app which allows users to search for recipes based on an ingredient or the type of food (fish, beef, etc).
- Next's useRouter hook helps send and receive the user's query + query parameters, necessary to filter/sort the recipe API data.
- React Context allows app to share recipe data between components, preventing repeated calls to our API.
- [Fuzzy-search](https://www.npmjs.com/package/fuzzy-search) allows us to flexibly match a string with partial input to 'widen the net' while fetching search results.
- Styled with Tailwind CSS, plus [react-rough-notation](https://www.npmjs.com/package/react-rough-notation) experience.
