# 👩‍🍳 Sleepy Chef
##### Got an empty belly and running short on time? We've got your back, _all recipes take 30 minutes or less to prepare_.

### https://sleepychef.vercel.app/

- Sleepy Chef lets users search for recipes based on type, name, or ingredients.
- Built with Next.js + Tailwind CSS, deployed with Vercel.
- Next's useRouter hook helps send and receive the user's query + query parameters, necessary to filter/sort the recipe API data.
- API responds to user-submitted queries, filtering appropriate response by using key-value pairs to returning matching recipes as Objects.
- Dynamically generate individual recipe pages using Next.js' dynamic routing method and getServerSideProps for server-side data fetching.
- Built-from-scratch Levenshtein Distance function for fuzzy-searching to widen the net of potential search results.
- React Context allows us to share the recipe data between components, avoids need for prop drilling and improves scalability.

#### * This project is currently in development
