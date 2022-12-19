import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ContainerBlock from "@components/ContainerBlock";

// The results page uses the useRouter hook to get the router object, which you can use to access the query parameters.
// The useEffect hook fetches the filtered data from the API route and passes the type or ingredient
// query parameters as URL parameters, depending on the the search input
// Then updates the state variable recipes with fetched data. 
// Finally, the component renders the list of recipes using the recipes state variable.

const Results = () => {
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

        if (!data) {
          // return to home if no recipes are found
          // data.length === 0 would indicate bad server response or missing recipe data
          router.push('/');
        } else {
          setRecipes(data);
        }
      } catch (error) {
        // if fetch error occurs return to home
        router.push('/');
      }
    };
    fetchRecipes();
  }, []);
    
  return (    
    <ContainerBlock>
      <h1>Ravioli Ravioli, Give me the Formuoli</h1>

      <div className="h-screen lg:h-screen px-8 lg:p-x-0 flex flex-column justify-center items-start overflow-hidden">

        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
              <p>Type: {recipe.type}</p>
              <p>Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}</p>
              <p>Vegan: {recipe.vegan ? 'Yes' : 'No'}</p>
            <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            <h3>Nutrition:</h3>
              <p>Calories: {recipe.nutrition.calories}</p>
              <p>Fat: {recipe.nutrition.fat}</p>
              <p>Carbs: {recipe.nutrition.carbs}</p>
              <p>Protein: {recipe.nutrition.protein}</p>

            <h3>Directions:</h3>
              <p>{recipe.directions}</p>
          </div>
        ))}
      </div>
    </ContainerBlock>
  );
};

export default Results;