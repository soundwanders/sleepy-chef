# 👩‍🍳 Sleepy Chef

##### Time-Saving Treats: 30 Minute Recipes for Busy Chefs

### https://sleepychef.vercel.app/

- Sleepy Chef lets you search for recipes  based on type, name, or ingredients.
- Built with Next.js, Tailwind CSS, MongoDB + deployed with Vercel.
- useSWR provides a convenient way to handle caching and revalidation. Plus some extra spicy syntax for data fetching.
- Next's useRouter hook sends and receives user's query & query parameters, which we use to filter and sort our recipes with our Next.js API Handler function.
- Our API responds to user queries by using key-value pairs to return all matching recipes as Objects, delivering recipe results.
- getStaticPaths and getStaticProps generate our static pages at build time, which eliminates the need for on-demand server-side rendering and greatly reduces the load placed on the servers.
- Recipe cards double as Next.js Link components, navigating to individual recipe pages built with SSR methods.
- React Context used to avoid prop drilling and improve scalability by creating a context to share unaltered recipe data between components if needed.
- Experimenting with the use of [Glyphhanger](https://github.com/soundwanders/sleepy-chef/blob/main/glyphhanger-experiment.md) to optimize webfont loading by subsetting font files to only include the characters used in Sleepy Chef.

<br/>

### All icons made by Freepik from [www.flaticon.com](www.flaticon.com)

<br/>

## Issues

If you encounter any buggy things, broken things, or have a great idea for a shiny new thing, please feel free to open an issue or send me a message. If you have crafted your own code such as a bug fix or new feature, please follow a few simple steps:
-    Fork the Project from branch 'main'
-    Create your Update Branch (git checkout -b update/BugSquash), 
     the name is arbitrary but it'd be nice if it's descriptive.
-    Commit your Changes (git commit -m 'Hey change this thing')
-    Push to the Branch (git push origin update/BugSquash)
-    Open a Pull Request and I'll take a look!

<br/>

#### __*This project is currently in development__
