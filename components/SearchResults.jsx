import Link from 'next/link';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { RoughNotationGroup } from "react-rough-notation";
import { Highlighter } from "./Highlighter";

export const SearchResults = () => {
  const router = useRouter();
  const { query } = router;
  const { type, ingredient, name } = query;

  let queryParams = [];
  let endpoint;

  if (type) {
    queryParams.push(`type=${encodeURIComponent(type)}`);
  }
  if (ingredient) {
    queryParams.push(`ingredient=${encodeURIComponent(ingredient)}`);
  }
  if (name) {
    queryParams.push(`name=${encodeURIComponent(name)}`);
  }

  const queryString = queryParams.length > 0 ? queryParams.join('&') : '';

  endpoint = `/api/recipes?${queryString}`;

  const { data, error } = useSWR(endpoint, async (url) => {
    const response = await fetch(url);

    if(response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      throw new Error("No recipes found");
    } else if (response.status === 500) {
      throw new Error("Server error, please try again later");
    } else {
      throw new Error("We're uhh...out of town? Please try again later");
    }
  });

  if (data === undefined) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  const highlightColor = "#60a5fa";

  return (
    <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
      <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 py-4 bg-white dark:bg-gray-800">
        <div className="w-fit">
          <RoughNotationGroup show={true}>
            <Highlighter color={highlightColor}>
              <h1 className={`results-title text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 py-2 px-4`}>
                Order Up!
              </h1>
            </Highlighter>
          </RoughNotationGroup>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-0 -mt-6 md:-mt-0 md:py-4 mb-10 px-8">
          {data.map(recipe => (
            <Link 
              href="/recipes/[id]" 
              as={`/recipes/${recipe.id}`}
              key={recipe.id}
            >
              <div className="bg-neutral-100 dark:bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-md rounded-lg overflow-hidden transform hover:scale-101">  
                <div className="bg-[#ff926a] min-h-0 w-full py-4 rounded-t-lg">
                  <div className="flex items-center justify-center h-full w-full">
                    <div className="title-container flex items-center justify-center shrink-0">
                      <img src={recipe.denotion} alt="" className="h-6 w-7" />
                      <h2 className="recipe-name max-w-2/3 text-xl md:text-[1.4rem] text-center uppercase text-gray-900 py-4 px-2">
                        {recipe.name}
                      </h2>
                    </div> 
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-center text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider py-1 -mt-4">
                    Type: {recipe.type}
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider py-1">
                    Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider py-1 pb-4 border-b border-slate-500">
                    Vegan: {recipe.vegan ? 'Yes' : 'No'}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4 mb-4">
                    Ingredients:
                  </h3>
                  
                  <ul className="grid grid-cols-2 gap-2 md:gap-3">
                    {recipe.ingredients.map(ingredient => (
                      <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{ingredient}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-4 pt-4 border-t border-slate-500">
                    Nutrition:
                  </h3>
                  {/* 
                    Object.entries(recipe.nutrition) converts the nutrition object into an array of key-value pairs.
                    Then, the map() method iterates over the array and creates a list item for each key-value pair. 
                  */}
                  <ul className="grid grid-cols-2 w-full gap-2 md:gap-3">
                    {Object.entries(recipe.nutrition).map(([name, value]) => (
                      <li key={name} className="text-gray-800 dark:text-gray-300 font-medium text-xs uppercase tracking-wider col-span-1">
                        {name}: {value}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3 pt-4 border-t border-slate-500">
                    Directions:
                  </h3>
                  <div className="overflow-x-hidden overflow-y-auto h-48">
                    <ul className="grid grid-cols-1 gap-2 md:gap-3">
                      {recipe.directions.map(direction => (
                        <li key={direction} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{direction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </section> 
  )
};
