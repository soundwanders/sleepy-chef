# 👩‍🍳 Sleepy Chef
##### Got an empty belly and running short on time? We've got your back, _all recipes take 30 minutes or less to prepare_.

### https://sleepychef.vercel.app/

- Sleepy Chef lets users search for recipes based on type, name, or ingredients.
- Built with Next.js + Tailwind CSS, deployed with Vercel.
- Next's useRouter hook helps send and receive the user's query + query parameters, necessary to filter/sort the recipe API data.
- API responds to user-submitted queries, filtering appropriate response by using key-value pairs to returning matching recipes as Objects.
- Dynamically generate individual recipe pages using Next.js' dynamic routing method and getServerSideProps for server-side data fetching.
- [Glyphhanger](https://www.npmjs.com/package/glyphhanger/v/3.2.0) optimizes webfont loading by subsetting font files to only include characters used on sleepy chef site.
- Custom Levenshtein Distance algorithm function for fuzzy-searching, which helps widen the net for potential search results.
- React Context used to improve scalability by creating a context that holds original recipe data, which can be shared between components.

#### * This project is currently in development
