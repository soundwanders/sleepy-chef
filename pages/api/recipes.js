import { recipes } from '@data/recipeDb';

// search function
const searchFunction = (paramType, paramValue) => {
  if (!recipes) {
    return [];
  }
  
  return recipes.filter(recipe => {
    switch (paramType) {
      case 'id':
        return recipe.id === Number(paramValue);
      case 'type':
        const searchTerms = paramValue.toLowerCase().split(',').map(term => term.trim());
        return recipe.types.some(type => searchTerms.includes(type.toLowerCase()));
      case 'ingredient':
        return recipe.ingredients.some(ing => ing.toLowerCase().includes(paramValue.toLowerCase()));
      case 'name':
        return recipe.name.toLowerCase().includes(paramValue.toLowerCase());
      default:
        return false;
    }
  })
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

  // destructure the type, ingredient, name and id query parameters
  const { type, ingredient, name, id } = query;

  // create an array of query parameters with their corresponding priority values
  const queryParams = [
    { param: id, type: 'id', priority: priorityMap.id }, 
    { param: type, type: 'type', priority: priorityMap.type }, 
    { param: name, type: 'name', priority: priorityMap.name }, 
    { param: ingredient, type: 'ingredient', priority: priorityMap.ingredient }
  ];

  // sort the query parameters by priority
  const sortedQueryParams = queryParams.sort((a, b) => b.priority - a.priority);

  // reduce the array of query parameters to an array of filtered recipes
  const filteredRecipes = sortedQueryParams.reduce((recipes, param) => {
    if (!param.param) {
      return recipes;
    }
    return recipes.concat(searchFunction(param.type, param.param));
  }, []);

  if (!filteredRecipes.length) {
    res.status(400).json({ error: 'No matching recipes found.' });
    return;
  }

  res.status(200).json(filteredRecipes);
};