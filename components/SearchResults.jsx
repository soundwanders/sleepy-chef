import Link from 'next/link';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from './Highlighter';
import appData from '@constants/appData';
import { HappyEgg } from '@components/Animations';

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
  }, { revalidateOnMount: true });

  if (data === undefined || !data) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
          <HappyEgg />
        </div>
      </section>
    )
  };

  if (error) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
          <div>{error.message}</div>
        </div>
      </section>
    )
  };

  const highlightColor = "#60a5fa";
  const defaultColor = 'bg-green-300';

  const recipeColors = {
    beef: "bg-orange-200",
    chicken: "bg-violet-250",
    mexican: "bg-red-200",
    pasta: "bg-amber-250",
    pork: "bg-rose-100",
    salad: "bg-green-200",
    seafood: "bg-blue-200",
    soup: "bg-zinc-300",
    vegetarian: "bg-emerald-100"
  };
  
  return (
    <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
      <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 md:py-0 md:pb-4 bg-white dark:bg-gray-800 md:mb-4">
        <div className="flex justify-center">
          <div className="w-fit">
            <RoughNotationGroup show={true}>
              <Highlighter color={highlightColor} className="md:text-center">
                <h1 className={`results-title text-center mx-auto text-[2.675rem] md:text-8xl font-bold text-gray-800 dark:text-gray-100 py-1 px-4 whitespace-nowrap`}>
                {appData.resultsTitle}
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense justify-self-center gap-12 mb-10 -mt-4 md:-mt-0 py-0 md:py-2 px-8 md:px-0 md:pl-4">
        {data.map(recipe => (
          <Link 
            className="h-min"
            href="/recipes/[id]" 
            as={`/recipes/${encodeURIComponent(recipe.id)}`}
            key={recipe.id}
          >
            <div className="min-h-0 bg-zinc-100 dark:bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-md rounded-lg overflow-hidden transform hover:scale-101">  
              <div className={`w-full py-4 rounded-t-lg ${recipeColors[recipe.types[0]] || defaultColor}`}>
                <div className="flex items-center justify-center h-full w-full">
                  <div className="title-container flex flex-col">
                    <h2 className="recipe-name mx-auto text-[1.7rem] md:text-3xl leading-8 md:leading-10 text-center text-gray-900 py-4 px-4">
                      {recipe.name}
                    </h2>
                    <div className="images-container flex justify-center">
                      {recipe.denotations.map((denotation, index) => (
                        <img key={index} src={denotation} alt="" className="h-auto w-8 m-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-center text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider py-1 -mt-4">
                  Type: {recipe.types.join(", ")}
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
