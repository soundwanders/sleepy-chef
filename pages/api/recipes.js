import fuzzySearch from 'fuzzy-search';
import { recipes } from 'data/recipeDb';

export default function handler(req, res) {
  // destructure query object from the router
  const { query } = req;

  // destructure the type, ingredient and id query parameters
  const { type, ingredient, name, id } = query;

  // create a fuzzy searcher for each query parameter
  const typeSearcher = new fuzzySearch(recipes.slice(), ['type'], {
    caseSensitive: false
  });

  const nameSearcher = new fuzzySearch(recipes.slice(), ['name'], {
    caseSensitive: false
  });

  const ingredientSearcher = new fuzzySearch(recipes.slice(), ['ingredients'], {
    caseSensitive: false
  });

  // create an empty array to hold fuzzy search results
  let filteredRecipes;
  filteredRecipes = Array.isArray(filteredRecipes) ? filteredRecipes : [];
  
  const queryHandlers = {
    id: () => recipes.find(recipe => recipe.id === Number(id)),
    type: () => typeSearcher.search(type),
    ingredient: () => ingredientSearcher.search(ingredient),
    name: () => nameSearcher.search(name),
    typeIngredient: () => typeSearcher.search(type).filter(recipe => ingredientSearcher.search(ingredient).includes(recipe)),
    typeName: () => typeSearcher.search(type).filter(recipe => nameSearcher.search(name).includes(recipe)),
    ingredientName: () => ingredientSearcher.search(ingredient).filter(recipe => nameSearcher.search(name).includes(recipe)),
    typeIngredientName: () => typeSearcher.search(type).filter(recipe => 
      ingredientSearcher.search(ingredient).includes(recipe)).filter(recipe => nameSearcher.search(name).includes(recipe)),
  };
  
  const queryParams = { type, ingredient, name, id };
  const queryParamKeys = Object.keys(queryParams).filter(key => queryParams[key]);
  
  if (queryParamKeys.length === 0) {
    res.status(400).json({ error: 'Name, type, or ingredient parameters must be provided to fetch a recipe.' });
    return;
  }
  
  if (queryParamKeys.length === 1) {
    const key = queryParamKeys[0];
    filteredRecipes = queryHandlers[key]();
  } else {
    const key = queryParamKeys.join('');
    filteredRecipes = queryHandlers[key]();
  }
  
  console.log(filteredRecipes);
  res.status(200).json(filteredRecipes);
};