import { createContext } from "react";
import fuzzySearch from 'fuzzy-search';

const recipes = [
  { 
    "id": 0,
    "name": "Fish Tacos",
    "type": "fish",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 pound fish, cut into strips",
      "1 ¼ cups flour",
      "2 tbsp cornstarch",
      "1 tsp baking powder",
      "1 tsp salt",
      "1 cup beer",
      "1 cup egg",
      "1 quart oil",
      "flour or corn tortillas",
      "2 to 3 cups shredded lettuce"
    ],
    "nutrition": {
      "calories": "410",
      "fat": "19g",
      "carbs": "43g",
      "protein": "17g"
    },
    "directions": "Beer batter: Combine one cup flour, cornstarch, baking powder, and salt in large bowl. Blend beer and egg in a separate bowl, then quickly stir into flour mixture until thoroughly combined. Fish fry: Heat oil in a deep-fryer or a deep skillet to 375F. Dust fish pieces lightly with remaining flour. Dip fish into beer batter, then fry in oil until crisp and golden brown. Drain with paper towels. Fill tortillas with fish and desired toppings, sauces and enjoy!" 
  },
  { 
    "id": 1,
    "name": "Crockpot Beef Stew",
    "type": "beef",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "2 lbs beef, cut into 1-inch pieces",
      "4 medium carrots, sliced",
      "3 medium potatoes, diced",
      "1 medium onion, chopped",
      "1 stalk celery, chopped",
      "1 ½ cups beef broth",
      "1 tsp Worcestershire sauce",
      "¼ cup flour",
      "½ tsp salt",
      "½ tsp black pepper",
      "1 tsp ground paprika",
      "1 clove garlic, minced"
    ],
    "nutrition": {
      "calories": "410",
      "fat": "19g",
      "carbs": "43g",
      "protein": "17g"
    },
    "directions": "Place meat in slow cooker. Mix flour, salt, and pepper together in a small bowl. Pour over meat and stir. Add beef broth, carrots, potatoes, onion, celery, Worcestershire sauce, paprika, garlic, and stir to combine. Cover and cook on Low for 8 to 12 hours, or High for 4 to 6 hours, until beef is tender and easily shredded." 
  }
];

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

// create a context for the recipes data
export const RecipesContext = createContext(recipes);