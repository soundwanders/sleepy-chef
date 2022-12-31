import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlighter } from "./Highlighter";

// Recipes fetches and displays a list of recipes based on the query parameters in the URL
// The useRouter hook gets the current URL query parameters, and useState hook manages the state of the recipes data.
// The compareRouter function is used as a dependency array in the useEffect hook to prevent unnecessary re-renders. 
// Finally, the useEffect hook updates the state of the recipes data with the data it fetches from the server. 
// If the data is invalid or missing, throw an error and redirect the user back to the home page.

export default function Recipes() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);

  function compareRouter(prevRouter, nextRouter) {
    return prevRouter.query.name === nextRouter.query.name &&
      prevRouter.query.type === nextRouter.query.type &&
      prevRouter.query.ingredient === nextRouter.query.ingredient;
  };
  
  useEffect(() => {
    async function fetchRecipes() {
      const { query } = router;
      const { type, ingredient, name } = query;
      let data;

      try {
        let queryParams = [];
      
        if (type) {
          queryParams.push(`type=${type}`);
        }
        if (ingredient) {
          queryParams.push(`ingredient=${ingredient}`);
        }
        if (name) {
          queryParams.push(`name=${name}`);
        }
        const queryString = queryParams.length > 0 ? queryParams.join('&') : '';
        const response = await fetch(`http://localhost:3000/api/recipes?${queryString}`);

        data = await response.json();
  
      } catch (error) {
        // if there's an error fetching from the first URL, try the second one
        try {
          // redefine queryParams and queryString before the second fetch call
          const queryParams = [];
  
          if (type) {
            queryParams.push(`type=${type}`);
          }
          if (ingredient) {
            queryParams.push(`ingredient=${ingredient}`);
          }

          const queryString = queryParams.join('&');
          const response = await fetch(`https://sleepychef.vercel.app/api/recipes?${queryString}`);

          data = await response.json();
        } catch (error) {
          // if both URLS throw an error, return to Home
          console.error(error);
          router.push('/');
        }
      }

    if (data.length === undefined) {
      // data.length being undefined indicates a bad server response or missing recipe data
      router.push('/');
      console.log("Bad request");
    } else {
      setRecipes(data);
    }
  }
    fetchRecipes();
  }, [router], compareRouter);


  const highlightColor = "#f75850";

  return (
    <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
      <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 py-4 bg-white dark:bg-gray-800">
        <div className="w-fit float-left">
          <RoughNotationGroup show={true}>
            <Highlighter color={highlightColor}>
              <h1 className="text-5xl md:text-8xl font-bold text-gray-800 dark:text-gray-200 text-center md:text-left py-2 px-4 -mx-1">
                Order Up!
              </h1>
            </Highlighter>
          </RoughNotationGroup>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0 md:py-10 px-8">
        {recipes.map(recipe => (
          <div key={recipe.id} className="rounded-lg shadow-md hover:shadow-lg bg-white">
            <div className="bg-blue-100 h-20 rounded-t-lg">
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
        ))}
      </div>
    </section> 
  )
};
