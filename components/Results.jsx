import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlighter } from "./Highlighter";

// Recipes fetches and displays a list of recipes based on the query parameters in the URL
// The useRouter hook gets the current URL query parameters, and useState hook manages the state of the recipes data.
// The compareRouter function is used as a dependency array in the useEffect hook to prevent unnecessary re-renders. 
// The useEffect hook uses Promise.race to test two URLs, then updates the state of the recipes data with response.

export default function Results() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const highlightColor = "#f75850";

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
      <div className="container max-w-6xl mx-auto h-36 md:h-40 px-8 py-4 bg-white dark:bg-gray-800">
        <div className="w-fit float-left">
          <RoughNotationGroup show={true}>
            <Highlighter color={highlightColor}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-800 dark:text-gray-200 text-center md:text-left py-2 px-4 -mx-1">
                Order Up!
              </h1>
            </Highlighter>
          </RoughNotationGroup>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0 md:py-10 px-8">
        {recipes.map(recipe => (
          <Link 
            href="/recipes/[id]" 
            as={`/recipes/${recipe.id}?name=${recipe.name}`}
            key={recipe.id}
            query={{ id: recipe.id}}
          >
            <a>
              <div className="rounded-lg shadow-md hover:shadow-lg bg-white">
                <div className="bg-blue-200 h-20 rounded-t-lg">
                  <h2 className="text-2xl font-bold text-gray-800 p-4">
                    {recipe.name}
                  </h2>
                </div>

                <div className="p-4">
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    Type: {recipe.type}
                  </p>
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
                  </p>
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    Vegan: {recipe.vegan ? 'Yes' : 'No'}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">
                    Ingredients:
                  </h3>
                  
                  <ul className="grid grid-cols-2 gap-2 md:gap-3">
                    {recipe.ingredients.map(ingredient => (
                      <li key={ingredient} className="text-gray-700 text-sm col-span-1">{ingredient}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">
                    Nutrition:
                  </h3>
                  
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    Calories: {recipe.nutrition.calories}
                  </p>
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    Fat: {recipe.nutrition.fat}
                  </p>
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    Carbs: {recipe.nutrition.carbs}
                  </p>
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                    Protein: {recipe.nutrition.protein}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">
                    Directions:
                  </h3>

                  <div className="h-40 overflow-y-auto">
                    <p className="text-gray-700 text-sm">
                      {recipe.directions}
                    </p>
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
