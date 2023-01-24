# 👩‍🍳 Sleepy Chef
##### Got an empty belly and running short on time? We've got your back, _all recipes take 30 minutes or less to prepare_.

### https://sleepychef.vercel.app/

- Sleepy Chef lets users search for recipes based on type, name, or ingredients.
- Built with Next.js + Tailwind CSS, deployed with Vercel.
- useSWR provides a convenient way to handle caching, revalidation, and focus tracking in addition to some spicy syntax for data fetching.
- Next's useRouter hook sends and receives the user's query & query parameters, which are necessary to filter and sort our recipe API data.
- API responds to user-submitted queries, filtering appropriate response by using key-value pairs to return all matching recipes as Objects.
- getStaticPaths and getStaticProps generate our static Recipe pages at build time, which eliminates the need for on-demand server-side rendering and greatly reduces the load placed on the servers.
- Recipe cards double as Next.js Link components, navigating to individual recipe pages using Next.js' dynamic routing method.
- React Context used to avoid prop drilling and improve scalability by creating a context to share unaltered recipe data between components.
- [Glyphhanger](https://github.com/soundwanders/sleepy-chef/blob/main/glyphhanger-experiment.md) optimizes webfont loading by subsetting font files to only include characters used on sleepy chef site.
- Custom Levenshtein Distance algorithm function for fuzzy-searching, which helps widen the net for potential search results.

#### * This project is currently in development
