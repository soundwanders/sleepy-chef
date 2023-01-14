import { createContext } from "react";
import fuzzySearch from 'fuzzy-search';

const recipes = [
  { 
    "id": 0,
    "name": "One Pot Creamy Pasta",
    "type": "pasta",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "4 garlic cloves, peeled and sliced",
      "7 oz (1 jar) sun dried tomatoes, drained",
      "5 ¼ cups (1.25L) vegetable broth",
      "1 lb penne pasta",
      "2 cups broccoli",
      "2 carrots, peeled",
      "4 oz cream cheese",
      "½ tsp ground black pepper",
      "¼ tsp salt",
      "½ tbsp vegetable oil",
      "Grated Parmesan cheese"
    ],
    "nutrition": {
      "calories": "410",
      "fat": "10g",
      "cholesterol": "15mg",
      "carbs": "66g",
      "protein": "17g",
      "sodium": "1090mg"
    },
    "directions": [
      "Place sliced garlic and 1 tbsp oil from sun dried tomatoes into a large pot.",
      "Cook over medium heat 2 to 3 minutes or until garlic is golden brown, stirring occasionally.",
      "Remove from heat, then add broth. Return pot to burner and increase heat to high. Cover pot and bring to a boil.",
      "Once boiling, add pasta, then cover and simmer 8 to 10 minutes or until pasta is almost cooked but still firm.",
      "Meanwhile, chop broccoli and place into medium to large sized bowl. Cut carrots in half and thinly slice.",
      "Drain tomatoes and slice them into thin strips. Cut cream cheese into cubes.",
      "Add vegetables, cream cheese, black pepper and salt to pasta. Stir until cream cheese is melted, then reduce heat to medium and cover.",
      "Cook an additional 2 to 3 minutes, or until vegetables are tender. Top with grated parmesan and enjoy!"
    ]
   },
  { 
    "id": 1,
    "name": "Chili Mac and Cheese",
    "type": "pasta",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 onion, diced",
      "8 oz ground beef",
      "16 oz (1 box) elbow macaroni",
      "4 cups chicken broth",
      "14 oz (1 can) diced tomatoes",
      "¾ cup canned white kidney beans, drained",
      "¾ cup canned kidney beans, drained",
      "1 ½ tsp chili powder",
      "1 ½ tsp paprika powder",
      "1 tsp onion powder",
      "1 ½ tsp cumin",
      "1 tsp salt",
      "½ tsp ground black pepper",
      "¾ cup shredded cheddar cheese"
    ],
    "nutrition": {
      "calories": "750",
      "fat": "35g",
      "cholesterol": "90mg",
      "carbs": "70g",
      "protein": "44g",
      "sodium": "1600mg"
    },
    "directions": [
      "Heat olive oil in a large skillet or Dutch oven over medium high heat.",
      "Add garlic, onion and ground beef together. Cook 3 to 5 minutes until browned, crumbling the beef as it cooks. Drain excess fat from pan.",
      "Stir in chicken broth, tomatoes, beans, chili powder, cumin, salt and pepper.",
      "Bring to a simmer and stir in pasta. Bring to a boil, then cover, reduce heat and simmer until pasta is cooked through, about 13 minutes.",
      "Remove from heat. Top with cheese and cover until melted, about 2 minutes, then serve."
    ],
  },
  { 
    "id": 2,
    "name": "Thai Pasta",
    "type": "pasta",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "12 oz. dry fettuccine",
      "4 ½ cups of vegetable broth",
      "1 large carrot, julienned",
      "1 red bell pepper, julienned",
      "4 green onions, sliced thinly",
      "4 garlic cloves, minced",
      "2 tbsp. peanut butter",
      "2 tbsp. fresh minced ginger",
      "2 tbsp. tomato paste",
      "1 tbsp. brown sugar",
      "1 tbsp. hoisin sauce",
      "1 tbsp. soy sauce",
      "1 tbsp. vegan worcestershire sauce",
      "1 tbsp. apple cider vinegar",
      "2 tsp. rice vinegar",
      "2 tsp. fresh lemongrass paste or minced",
      "½ tsp. fresh chili paste",
      "½ tsp. turmeric",
      "½ lime, juiced",
      "crushed peanuts (for garnish)",
      "chopped cilantro (for garnish)",
    ],
    "nutrition": {
      "calories": "750",
      "fat": "35g",
      "cholesterol": "90mg",
      "carbs": "60g",
      "protein": "10g",
      "sodium": "1600mg"
    },
    "directions": [
      "In a large soup pot, add all the ingredients except for the lime juice, peanuts and cilantro. Don't worry if the noodles are not fully submerged! Cover the pot and bring to a boil.",
      "Stir to combine thoroughly and reduce to a simmer. Coonitnue cooking over medium low heat for about 10 to 13 minutes, stirring occasionally.",
      "Next, uncover the pot cook for another 2 to 3 minutes, until about 1/2 inch of sauce is remaining. Remove from heat, then stir in the lime juice.",
      "Before serving, garnish with desired amount of crushed peanuts and chopped cilantro. Dig in!"
    ],
  },
  { 
    "id": 3,
    "name": "Buffalo Chicken Enchiladas",
    "type": "pasta",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "3 tbsp butter, melted",
      "4 cups shredded rotisserie chicken",
      "8 oz cream cheese, room temperature",
      "2 cups shredded Cheddar",
      "1 cup Buffalo sauce, plus more for serving",
      "1 bunch scallions, thinly sliced",
      "¼ teaspoon ground cumin",
      "16 corn tortillas",
      "2 tbsp crumbled blue cheese",
      "2 tbsp blue cheese dressing (can substitute with ranch)",
    ],
    "nutrition": {
      "calories": "726",
      "fat": "52g",
      "cholesterol": "170mg",
      "carbs": "34g",
      "protein": "34g",
      "sodium": "1530mg"
    },
    "directions": [
      "Preheat the oven to 400 degrees F. Butter a 9-by-13-inch baking dish.",
      "Mix the chicken, cream cheese, 1 cup of the Cheddar, 1/3 cup of the hot sauce, white parts of the scallions and cumin in a large bowl until well combined.",
      "Stir together the butter, remaining 2/3 cup hot sauce and 3 tablespoons water in a medium bowl.",
      "Microwave the tortillas in batches until warm, softened and foldable, about 30 seconds. Keep warm between damp paper towels.",
      "Spoon a portion of the chicken mixture down the middle of each tortilla and roll up. Place them side by side in the pan, seam-side facing down. Pour the hot sauce mixture over the tortillas.",
      "Sprinkle with the remaining 1 cup Cheddar and the blue cheese and bake 15 to 17 minutes, until the cheese is fully melted.",
      "Drizzle the blue cheese dressing over the enchiladas and sprinkle with the scallion greens. Serve with side of hot sauce if desired, enjoy!"
    ],
  },
]

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
