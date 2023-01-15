import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RoughNotationGroup } from "react-rough-notation";
import { Highlighter } from "./Highlighter";

// SearchResults component fetches and displays a list of recipes based on the query parameters in the URL
// The useRouter hook gets the current URL query parameters, and useState hook manages the state of the recipes data.
// The compareRouter function is used as a dependency array in the useEffect hook to prevent unnecessary re-renders. 
// useEffect hook receives the query parameters from router, then uses those parameters to fetch the appropriate recipe data

export default function SearchResults() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);

  const highlightColor = "#60a5fa";

  function compareRouter(prevRouter, nextRouter) {
    return prevRouter.query.name === nextRouter.query.name &&
      prevRouter.query.type === nextRouter.query.type &&
      prevRouter.query.ingredient === nextRouter.query.ingredient;
  };

  function handleError(error) {
    console.error(error);
    router.push('/');
  };
  
  useEffect(() => {
    async function fetchRecipes() {
      const { query } = router;
      const { type, ingredient, name } = query;
  
      let queryParams = [];
      let data;
  
      if (type) {
        queryParams.push(`type=${type}`);
      }
      if (ingredient) {
        queryParams.push(`ingredient=${encodeURIComponent(ingredient)}`);
      }
      if (name) {
        queryParams.push(`name=${encodeURIComponent(name)}`);
      }

      const queryString = queryParams.length > 0 ? queryParams.join('&') : '';
  
      const endpoint = `/api/recipes?${queryString}`;
    
      try {
        const response = await fetch(endpoint).catch(() => {});
      
        // Check if the fetch request returned a successful response
        data = response && response.ok ? await response.json() : [];
      
        setRecipes(data || []);
      } catch (error) {
        handleError(error)
      }
    }
    fetchRecipes();
  }, [router.query], compareRouter);

  return (
    <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
      <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 bg-white dark:bg-gray-800">
        <div className="w-fit float-left">
          <RoughNotationGroup show={true}>
            <Highlighter color={highlightColor}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-800 dark:text-gray-200 text-center md:text-left py-2 px-4">
                Order Up!
              </h1>
            </Highlighter>
          </RoughNotationGroup>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0 md:py-4 md:mb-10 px-8">
        {recipes.map(recipe => (
          <Link 
            href="/recipes/[id]" 
            as={`/recipes/${recipe.id}?name=${recipe.name}`}
            key={recipe.id}
          > 
            <a>
              <div className="rounded-lg shadow-md hover:shadow-lg bg-slate-50 dark:bg-gray-900">
                <div className="bg-orange-400 dark:bg-orange-700 h-20 rounded-t-lg">
                  <h2 className="text-xl md:text-2xl uppercase font-bold text-gray-800 dark:text-gray-100 p-4 md:pt-5">
                    {recipe.name}
                  </h2>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider py-1">
                    Type: {recipe.type}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider py-1">
                    Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wider py-1">
                    Vegan: {recipe.vegan ? 'Yes' : 'No'}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4 mb-3">
                    Ingredients:
                  </h3>
                  
                  <ul className="grid grid-cols-2 gap-2 md:gap-3">
                    {recipe.ingredients.map(ingredient => (
                      <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{ingredient}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">
                    Nutrition:
                  </h3>
                  {/* 
                    Object.entries(recipe.nutrition) converts the nutrition object into an array of key-value pairs, 
                    where each element in the array is an array containing the key and value of a property. 
                    Then, the map() method iterates over the array, and creates a list item for each key-value pair, 
                  */}
                  <ul className="grid grid-cols-2 gap-1 md:gap-3">
                    {Object.entries(recipe.nutrition).map(([name, value]) => (
                      <li key={name} className="text-gray-600 dark:text-gray-400 font-medium text-xs uppercase tracking-wider col-span-1">
                        {name}: {value}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">
                    Directions:
                  </h3>
                  <div className="overflow-y-auto h-48">
                    <ul className="grid grid-cols-1 gap-2 md:gap-3">
                      {recipe.directions.map(direction => (
                        <li key={direction} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{direction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section> 
  )
};
