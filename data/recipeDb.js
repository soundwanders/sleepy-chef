import { createContext } from "react";

export const recipes = [
  { 
    "id": 0,
    "name": "One Pot Creamy Pasta",
    "image": "/chef.png",
    "type": "pasta",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "4 garlic cloves, peeled & sliced",
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
    "image": "/chef.png",
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

    "image": "/chef.png",
    "type": "pasta",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "12 oz. dry fettuccine",
      "4 ½ cups of vegetable broth",
      "1 large carrot, julienned",
      "1 red bell pepper, julienned",
      "4 green onions, thinly sliced",
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
      "½ lime, juiced or 1 tbsp lime juice",
    ],
    "nutrition": {
      "calories": "750",
      "fat": "35g",
      "cholesterol": "90mg",
      "carbs": "60g",
      "protein": "11g",
      "sodium": "1600mg"
    },
    "directions": [
      "In a large soup pot, add all the ingredients except for the lime juice, peanuts and cilantro. Don't worry if the noodles are not fully submerged! Cover the pot and bring to a boil.",
      "Stir to combine thoroughly and reduce to a simmer. Continue cooking over medium low heat for about 10 to 12 minutes, stirring occasionally.",
      "Next, uncover the pot cook for another 2 to 3 minutes, until about 1/2 inch of sauce is remaining. Remove from heat, then stir in the lime juice.",
      "If sauce is still too watery for your taste, remove pot from heat wait about 2 minutes. Otherwise, dig in!"
    ],
  },
  { 
    "id": 3,
    "name": "Buffalo Chicken Enchiladas",
    "image": "/chef.png",
    "type": "chicken",
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
      "Preheat the oven to 400 degrees F. Grease baking dish with butter if it is not nonstick.",
      "Mix the chicken, cream cheese, 1 cup of the Cheddar, 1/3 cup of the hot sauce, white parts of the scallions, and the cumin in a large bowl until well combined.",
      "Stir together the butter, remaining 2/3 cup hot sauce and 3 tablespoons water in a medium bowl.",
      "Microwave the tortillas in batches until warm, softened and foldable, about 30 seconds. Keep warm between damp paper towels.",
      "Spoon a portion of the chicken mixture into each tortilla and roll up. Place them side by side in the pan, with the seam facing down.",
      "Pour the hot sauce mixture over the tortillas, then sprinkle with the remaining 1 cup cheddar and the blue cheese.",
      "Bake 15 to 17 minutes, until the cheese is fully melted.",
      "Drizzle the blue cheese dressing over the enchiladas and sprinkle with the scallion greens. Enjoy!"
    ],
  },
  { 
    "id": 4,
    "name": "Bean and Cheese Burritos",
    "image": "/chef.png",
    "type": "mexican",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "1 can (16 oz) vegetarian refried beans",
      "1 cup salsa",
      "1 cup cooked long grain rice",
      "2 cups shredded cheddar cheese",
      "10 flour tortillas",
      "Shredded lettuce (optional)"
    ],
    "nutrition": {
      "calories": "216",
      "fat": "9g",
      "cholesterol": "23mg",
      "carbs": "24g",
      "protein": "9g",
      "sodium": "540mg"
    },
    "directions": [
      "Preheat oven to 375°. In a large bowl, combine beans, salsa, rice and 1 cup cheese.",
      "Place about 1/3 cup of mixture on each tortilla. Fold the sides and ends over to cover filling, then roll up.",
      "Place burritos in a greased or nonstick baking dish, leaving some room between each burrito.",
      "Sprinkle burritos with remaining 1 cup of cheese. Cover and bake 20 to 25 minutes.",
    ],
  },
  { 
    "id": 5,
    "name": "Spicy Shepherd's Pie",
    "image": "/chef.png",
    "type": "beef",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "3 cups mashed potato flakes",
      "1 pound ground beef",
      "1 medium onion, chopped",
      "1 can (11 oz) Mexicorn, drained",
      "1 can (2 ¼ oz) sliced ripe olives, drained",
      "1 can (14 ½ oz) diced tomatoes, undrained",
      "1 packet of taco seasoning",
      "1 ½ teaspoons chili powder",
      "½ teaspoon salt",
      "¼ teaspoon garlic powder",
      "1 cup shredded cheddar cheese",
    ],
    "nutrition": {
      "calories": "516",
      "fat": "25g",
      "cholesterol": "90mg",
      "carbs": "49g",
      "protein": "24g",
      "sodium": "1335mg"
    },
    "directions": [
      "Prepare mashed potatoes according to package directions.",
      "Meanwhile, in a large skillet, cook beef and onion over medium heat until meat is no longer pink, breaking beef into crumbles. Drain excess fat from pan.",
      "Add the tomatoes, corn, olives, taco seasoning, chili powder, salt and garlic powder. Bring to a boil; cook and stir for 1 to 2 minutes",
      "Transfer to a greased 2 ½ qt. baking dish. Top with 3/4 cup cheddar cheese. Spread mashed potatoes over the top and sprinkle with remaining cheese.",
      "Bake, uncovered, at 350° for 12 to 15 minutes or until cheese is melted. Dinner's ready!"
    ]
  }
]

recipes.forEach(recipe => {
  switch(recipe.type) {
    case 'beef':
      recipe.denotion = "/beef.png";
      break;
    case 'chicken':
      recipe.denotion = "/chicken.png";
      break;
    case 'chinese':
      recipe.denotion = "/chinese.png";
      break;
    case 'mexican':
      recipe.denotion = "/mexican.png";
      break;
    case 'pasta':
      recipe.denotion = "/pasta.png";
      break;
    case 'pork':
      recipe.denotion = "/pork.png";
      break;
    case 'seafood':
      recipe.denotion = "/seafood.png";
      break;
    case 'salad':
      recipe.denotion = "/salad.png";
      break;
    case 'soup':
      recipe.denotion = "/soup.png";
      break;
    default:
      recipe.denotion = "/chef.png";
      break;
  }
});

// create a context for the recipes data
export const RecipesContext = createContext(recipes);
