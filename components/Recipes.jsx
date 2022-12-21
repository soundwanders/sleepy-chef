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
        const response = await fetch(`http://localhost:3000/api/recipes?${queryString}`);
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
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-4xl md:text-8xl font-bold py-10 text-center md:text-left">
          Yum!
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0">
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h2 className="relative text-gray-50 font-bold text-xl bg-transparent rounded-md">
              {recipe.name}
            </h2>
              <p>Type: {recipe.type}</p>
              <p>Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}</p>
              <p>Vegan: {recipe.vegan ? 'Yes' : 'No'}</p>
            
            <h3 className="relative text-gray-50 font-bold text-xl bg-transparent rounded-md">
              Ingredients:
            </h3>
              <ul>
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              
            <h3 className="relative text-gray-50 font-bold text-xl bg-transparent rounded-md">
              Nutrition:
            </h3>
              <p>Calories: {recipe.nutrition.calories}</p>
              <p>Fat: {recipe.nutrition.fat}</p>
              <p>Carbs: {recipe.nutrition.carbs}</p>
              <p>Protein: {recipe.nutrition.protein}</p>

            <h3 className="relative text-gray-50 font-bold text-xl bg-transparent rounded-md">
              Directions:
            </h3>
              <p>{recipe.directions}</p>
          </div>
        ))}
      </div>
    </section> 
  )
};
  