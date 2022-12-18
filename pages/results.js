import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ContainerBlock from "@components/ContainerBlock";

// This code uses the useRouter hook to get the router object, which you can use to access the query parameters.
// The useEffect hook fetches the filtered data from the API route and passes the type query parameter as a URL param, 
// and then updates the state variable recipes with the fetched data. 
// Finally, the component renders the list of recipes using the recipes state variable.

const Results = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the filtered recipes data from the API route
    const fetchRecipes = async () => {
      // destructure the query object from the router object
      const { query } = router;

      // destructure type query parameter
      const { type } = query;

      const response = await fetch(`http://localhost:3000/api/recipes?type=${type}`);
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);  // pass an empty array as the second argument to only run the effect once

  return (    
    <ContainerBlock>
      <h1>Ravioli Ravioli, Give me the Formuoli</h1>
        <div>
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