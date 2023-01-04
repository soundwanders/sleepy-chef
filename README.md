# 👩‍🍳 Sleepy Chef
##### Got a mixed bag of leftover ingredients and an empty belly? We got you.

### https://sleepychef.vercel.app/

- Sleepy Chef allows users to search for recipes based on an ingredient or a type of food (fish, beef, etc).
- Built with Next.js + Tailwind CSS, deployed with Vercel.
- Next's useRouter hook helps send and receive the user's query + query parameters, necessary to filter/sort the recipe API data.
- React Context allows us to share the recipe data between components, preventing repeated calls to the API.
- [Fuzzy-search](https://www.npmjs.com/package/fuzzy-search) used to flexibly match a string with partial input to 'widen the net' while fetching search results.


#### This project is currently in development
