# 👩‍🍳 Sleepy Chef

##### Time-Saving Treats: 30 Minute Recipes for Busy Cooks

### https://sleepychef.vercel.app/

- Sleepy Chef lets users search for recipes based on type, name, or ingredients.
- Built with Next.js + Tailwind CSS, deployed with Vercel.
- useSWR provides a convenient way to handle caching, revalidation, and focus tracking in addition to some spicy syntax for data fetching.
- Next's useRouter hook sends and receives the user's query & query parameters, which we use to filter and sort the recipe API data.
- API responds to user-submitted queries, filtering appropriate response by using key-value pairs to return all matching recipes as Objects.
- getStaticPaths and getStaticProps generate our static Recipe pages at build time, which eliminates the need for on-demand server-side rendering and greatly reduces the load placed on the servers.
- Recipe cards double as Next.js Link components, navigating to individual recipe pages using Next.js' dynamic routing method.
- React Context used to avoid prop drilling and improve scalability by creating a context to share unaltered recipe data between components.
- [Glyphhanger](https://github.com/soundwanders/sleepy-chef/blob/main/glyphhanger-experiment.md) optimizes webfont loading by subsetting font files to only include characters used on sleepy chef site.

<br/>

## Issues

If you encounter any bugs, crashes, or other unexpected behavior, feel free to open an issue describing the error and what you were doing when it occurred. If you have any improvements or suggestions, I would encourage you to contribute. Either open a new issue, or if you have created a solution or feature and would like it implemented, please follow a few simple steps:
-    Fork the Project from branch 'main'
-    Create your Update Branch (git checkout -b update/BugSquash
-    Commit your Changes (git commit -m 'Hey change this!')
-    Push to the Branch (git push origin update/BugSquash)
-    Open a Pull Request

<br/>

## All icons made by Freepik from [www.flaticon.com](www.flaticon.com)

<br/>

#### __*This project is currently in development__
