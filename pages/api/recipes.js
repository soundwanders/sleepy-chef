import { recipes } from '@data/recipeDb';

// search functions
const searchFunctions = {
  id: (id) => recipes.filter(recipe => recipe.id === Number(id)),
  type: (type) => recipes.filter(recipe => recipe.type.toLowerCase() === type.toLowerCase()),
  ingredient: (ingredient) => recipes.filter(recipe => recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase()))),
  name: (name) => recipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase())),
};

const priorityMap = {
  id: 1,
  type: 2,
  name: 3,
  ingredient: 4,
};

export default function handler(req, res) {
  // destructure query object from the router
  const { query } = req;

  // destructure the type, ingredient and id query parameters
  const { type, ingredient, name, id } = query;

  // create an empty array to hold filtered search results
  let filteredRecipes = [];

  // prioritize the search based on the query parameters
  const queryParams = { id, type, name, ingredient };
  const queryKeys = Object.keys(queryParams);
  const sortedQueryKeys = queryKeys.sort((a, b) => priorityMap[b] - priorityMap[a]);

  //filter the recipes array based on the specific query parameters
  sortedQueryKeys.forEach((key) => {
    if (key === "id" && id) {
      filteredRecipes = searchFunctions[key](id);
    } else if (key === "type" && type) {
      filteredRecipes = searchFunctions[key](type);
    } else if (key === "name" && name) {
      filteredRecipes = searchFunctions[key](name);
    } else if (key === "ingredient" && ingredient) {
      filteredRecipes = searchFunctions[key](ingredient);
    }
  });

  console.log(filteredRecipes);
  
  // check if any recipes were found
  if (!filteredRecipes.length) {
    res.status(400).json({ error: 'No matching recipes found.' });
    return;
  }
  res.status(200).json(filteredRecipes);
};
