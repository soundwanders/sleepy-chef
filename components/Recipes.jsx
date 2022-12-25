import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// The results page uses the useRouter hook to get the router object, which you can use to access the query parameters.
// The useEffect hook fetches the filtered data from the API route and passes the type or ingredient
// query parameters as URL parameters, depending on the the search input
// Then updates the state variable recipes with fetched data. 
// Finally, the component renders the list of recipes using the recipes state variable.

export default function Recipes() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the filtered recipes data from the API route
    const fetchRecipes = async () => {
      // destructure the query object from the router object
      const { query } = router;
  
      // destructure type and ingredient query parameters
      const { type, ingredient } = query;
  
      try {
        const queryParams = [];
        if (type) {
          queryParams.push(`type=${type}`);
        }
        if (ingredient) {
          queryParams.push(`ingredient=${ingredient}`);
        }
        const queryString = queryParams.join('&');
        const response = await fetch(`https://sleepychef.vercel.app/api/recipes?${queryString}`);
        const data = await response.json();

        if (data.length === undefined) {
          // return to home if no recipes are found
          // if data.length is undefined, that indicates bad server response or missing recipe data
          router.push('/');
        } else {
          setRecipes(data);
        }       
      } catch (error) {
        // if fetch error occurs, return to home
        router.push('/');
      }
    };
    fetchRecipes();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-44 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-8xl font-bold py-6 text-center md:text-left">
          Let's Eat!
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0 pb-20 px-8 md:px-0">
        {recipes.map(recipe => (
          <div key={recipe.id} className="rounded-lg shadow-md hover:shadow-lg bg-white">
            <div className="bg-gray-300 h-20 rounded-t-lg">
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
              
              <ul className="grid grid-cols-2 gap-2 md:gap-4">
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
  