import { createContext } from "react";

export const recipes = [
  { 
    "id": 0,
    "name": "One Pot Creamy Pasta",
    "image": "/pasta.png",
    "type": "pasta",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "4 garlic cloves, peeled & sliced",
      "7 oz (1 jar) sun dried tomatoes, drained",
      "5 1/4 cups (1.25L) vegetable broth",
      "1 lb penne pasta",
      "2 cups broccoli",
      "2 carrots, peeled",
      "1/2 tsp ground black pepper",
      "4 oz cream cheese",
      "1/4 tsp salt",
      "1/2 tbsp vegetable oil",
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
      "Cook over medium heat 2-3 minutes or until garlic is golden brown, stirring occasionally.",
      "Remove from heat, then add broth. Return pot to burner and increase heat to high. Cover pot and bring to a boil.",
      "Once boiling, add pasta, then cover and simmer 8-10 minutes or until pasta is almost cooked but still firm.",
      "Meanwhile, chop broccoli and place into medium to large sized bowl. Cut carrots in half and thinly slice.",
      "Drain tomatoes and slice them into thin strips. Cut cream cheese into cubes.",
      "Add vegetables, cream cheese, black pepper and salt to pasta. Stir until cream cheese is melted, then reduce heat to medium and cover.",
      "Cook an additional 2-3 minutes, until vegetables are tender.",
      "Top with grated parmesan and let the games begin!"
    ]
   },
  { 
    "id": 1,
    "name": "Buffalo Chicken Enchiladas",
    "image": "/chicken.png",
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
      "1/4 tsp ground cumin",
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
      "Mix the chicken, cream cheese, 1 cup of Cheddar, ⅓ cup of hot sauce, white part of the scallions, and the cumin in a large bowl until well combined.",
      "Stir together the butter, remaining 2/3 cup hot sauce and 3 tbsp water in a medium bowl.",
      "Microwave the tortillas in batches, 20-30 seconds each, until warm and foldable. Keep warm between damp paper towels or on a baking sheet inside a very low-heat oven.",
      "Spoon a portion of the chicken mixture into each tortilla and roll up. Place them side by side in the pan, with the seam facing down.",
      "Pour the hot sauce mixture over the tortillas, then sprinkle with the remaining 1 cup cheddar and the blue cheese.",
      "Bake 15-17 minutes, until the cheese is fully melted.",
      "Drizzle the blue cheese dressing over the enchiladas and sprinkle with the scallion greens. Enjoy!"
    ],
  },
  { 
    "id": 2,
    "name": "Chili Mac and Cheese",
    "image": "/pasta.png",
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
      "3/4 cup canned white kidney beans, drained",
      "3/4 cup canned kidney beans, drained",
      "1 1/2 tsp chili powder",
      "1 1/2 tsp paprika powder",
      "1 tsp onion powder",
      "1 1/2 tsp cumin",
      "1 tsp salt",
      "1/2 tsp ground black pepper",
      "3/4 cup shredded cheddar cheese"
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
      "Heat olive oil in a large skillet or Dutch oven over medium-high heat.",
      "Add garlic, onion and ground beef together. Cook 3-5 minutes until browned, crumbling the beef as it cooks. Drain excess fat from pan.",
      "Stir in chicken broth, tomatoes, beans, chili powder, cumin, salt and pepper.",
      "Bring to a simmer and stir in pasta. Bring to a boil, then cover, reduce heat and simmer until pasta is cooked through, about 13 minutes.",
      "Remove from heat. Top with cheese and cover until melted, about 2 minutes, then serve."
    ],
  },
  { 
    "id": 3,
    "name": "Bean and Cheese Burritos",
    "image": "/texmex.png",
    "type": "vegetarian",
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
      "Place about ⅓ cup of mixture on each tortilla. Fold the sides and ends over to cover filling, then roll up.",
      "Place burritos in a greased or nonstick baking dish, leaving some room between each burrito.",
      "Sprinkle burritos with remaining 1 cup of cheese. Cover and bake for 20-22 minutes.",
      "Allow to cool for 2-3 minutes before cutting and removing from pan, then it's go time!"
    ],
  },
  { 
    "id": 4,
    "name": "Thai Pasta",
    "image": "/pasta.png",
    "type": "pasta",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "12 oz dry fettuccine",
      "4 1/2 cups of vegetable broth",
      "1 large carrot, julienned",
      "1 red bell pepper, julienned",
      "4 green onions, thinly sliced",
      "4 garlic cloves, minced",
      "2 tbsp peanut butter",
      "2 tbsp fresh minced ginger",
      "2 tbsp tomato paste",
      "1 tbsp brown sugar",
      "1 tbsp hoisin sauce",
      "1 tbsp soy sauce",
      "1 tbsp vegan worcestershire sauce",
      "1 tbsp apple cider vinegar",
      "2 tsp rice vinegar",
      "2 tsp fresh lemongrass, minced",
      "1/2 tsp fresh chili paste",
      "1/2 tsp turmeric",
      "1/2 lime, juiced (or 1 tbsp lime juice)",
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
      "Stir to combine thoroughly and reduce to a simmer. Continue cooking over medium-low heat for about 10-12 minutes, stirring occasionally.",
      "Next, uncover the pot cook for another 2-3 minutes, until about 1/2 inch of sauce is remaining. Remove from heat, then stir in the lime juice.",
      "Allow to cool for 2 minutes, then dig in!"
    ],
  },
  { 
    "id": 5,
    "name": "Spicy Shepherd's Pie",
    "image": "/beef.png",
    "type": "beef",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "3 cups mashed potato flakes",
      "1 lb ground beef",
      "1 can (14 1/2 oz) diced tomatoes, undrained",
      "1 can (2 1/4 oz) sliced olives, drained",
      "1 medium onion, chopped",
      "1 can (11 oz) Mexicorn, drained",
      "1 packet of taco seasoning",
      "1 1/2 tsp chili powder",
      "1/2 tsp salt",
      "1/4 tsp garlic powder",
      "1 cup shredded cheddar cheese",
    ],
    "nutrition": {
      "calories": "516",
      "fat": "10g",
      "cholesterol": "40mg",
      "carbs": "45g",
      "protein": "18",
      "sodium": "683mg"
    },
    "directions": [
      "Prepare mashed potatoes according to package directions.",
      "Meanwhile, in a large skillet, cook beef and onion over medium heat until meat is no longer pink, breaking beef into crumbles. Drain excess fat from pan.",
      "Add the tomatoes, corn, olives, taco seasoning, chili powder, salt and garlic powder. Bring to a boil; cook and stir for 1-2 minutes",
      "Transfer to a greased 2 1/2 qt. baking dish. Top with 3/4 cup cheddar cheese. Spread mashed potatoes over the top and sprinkle with remaining cheese.",
      "Bake, uncovered, at 350° for 12-15 minutes or until cheese is melted. Dinner's ready!"
    ]
  },
  { 
    "id": 6,
    "name": "Pork Fried Rice", 
    "image": "/pork.png",
    "type": "pork",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "4 cups basmati rice",
      "8 cups water",
      "1/4 cup soy sauce",
      "1 tbsp chili garlic sauce",
      "1 1/2 tsp hoisin sauce",
      "2 tbsp peanut oil",
      "1 lb pork shoulder, cut into 1/4 inch cubes",
      "1 large egg, lightly beaten",
      "1 1/2 cups chopped red bell pepper",
      "1 cup frozen shelled edamame",
      "2/3 cups thinly sliced green onions"
    ],
    "nutrition": {
      "calories": "516",
      "fat": "13g",
      "cholesterol": "90mg",
      "carbs": "49g",
      "protein": "23g",
      "sodium": "534mg"
    },
    "directions": [
      "Bring water and rice to a boil in a large pot. Reduce heat to medium-low, cover, and simmer until rice is tender and water has been absorbed, 20-25 minutes.",
      "Meanwhile, combine soy sauce, chili garlic sauce, and hoisin in a bowl.",
      "Heat a wok or large skillet over high heat. Pour 1 tbsp peanut oil into wok; swirling pan to coat. Add pork in a single layer; cook without stirring for 2 minutes.",
      "Stir-fry until pork is no longer pink in the center and juices run clear, about 4 minutes. Transfer pork to soy sauce mixture; toss to coat.",
      "Pour egg into the pan; cook, without stirring, until set, about 45 seconds. Cut egg into bite-sized pieces.",
      "Add remaining 1 tbsp oil to pan; swirl to coat. Add bell pepper, edamame, and 1/2 cup green onions; stir-fry 1 minute.",
      "Add cooked rice; stir-fry 2 minutes, then add pork and soy sauce mixture. Cook, stirring constantly, until heated through, about 1 minute.",
      "Top rice with egg and remaining green onions, then fly into flavor town."
    ]
  },
  { 
    "id": 7,
    "name": "Broccoli Cheddar Soup", 
    "image": "/soup.png",
    "type": "soup",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1/4 cup chopped onion",
      "1/4 cup butter, cubed",
      "1/4 cup all-purpose flour",
      "1/4 tsp salt",
      "1/4 tsp pepper",
      "1 1/2 cups 2% milk",
      "3/4 cup chicken broth",
      "1 cup cooked and chopped fresh or frozen broccoli",
      "1/2 cup shredded cheddar cheese"
    ],
    "nutrition": {
      "calories": "495",
      "fat": "37",
      "cholesterol": "116mg",
      "carbs": "26",
      "protein": "16",
      "sodium": "1150mg"
    },
    "directions": [
      "This recipe serves two. To serve more, double the ingredients.",
      "In a small saucepan, saute onion in butter until tender. Stir in the flour, salt and pepper until blended; gradually add milk and broth.",
      "Bring to a boil; cook and stir until thickened, about 2 minutes.",
      "Chef's Tip: Curdling in a cream soup usually occurs when the milk or cream is added at too high of a heat. As you gradually pour milk and broth into the onion and flour mixture, keep heat at medium and stir continuously with a whisk. Once all is mixed in, then proceed to heat to a boil.",
      "Add broccoli. Cook and stir until heated through and steaming. Remove from the heat; stir in cheese until melted.",
      "This recipe serves two. To serve more, double or even triple the ingredients. Enjoy!"
    ]
  },
  { 
    "id": 8,
    "name": "Pasta Fagioli Soup", 
    "image": "/soup.png",
    "type": "soup",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 lb pound Italian sausage links, casings removed, crumbled",
      "1 small onion, chopped",
      "2 tsp canola oil",
      "1 garlic clove, minced",
      "3 1/2 cups water",
      "2 cups uncooked elbow macaroni",
      "2 cans (14 1/2 oz) reduced-sodium chicken broth",
      "2 cans (15 1/2 oz) your choice of beans, rinsed and drained",
      "1 can (14 1/2 oz) diced tomatoes, undrained",
      "1 tsp salt",
      "1/4 tsp pepper",
      "1 tsp italian seasoning",
      "1/2 tsp oregano",
      "1 tbsp tomato paste",
      "1 cup fresh spinach leaves, chopped",
      "2 tbsp shredded Parmesan cheese"
    ],
    "nutrition": {
      "calories": "450",
      "fat": "14g",
      "cholesterol": "58mg",
      "carbs": "54g",
      "protein": "32g",
      "sodium": "1550mg"
    },
    "directions": [
      "In a large saucepan, cook sausage over medium heat until no longer pink; drain, remove from pan and set aside.",
      "In the same pan, saute onion in oil until tender. Add garlic; saute 1 minute longer.",
      "Add the water, beans, tomatoes, broth, macaroni and pepper and bring to a boil. Cook, uncovered, until macaroni is tender, 8-10 minutes.",
      "Reduce heat to low; stir in sausage and spinach. Cook until spinach is wilted, 2-3 minutes. Garnish with cheese before feasting.",
    ]
  },
  { 
    "id": 9,
    "name": "Southwestern Chicken Salad", 
    "image": "/salad.png",
    "type": "salad",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 lb chicken breast",
      "1 tbsp",
      "1/2 tsp",
      "1/2 tsp salt",
      "1 lime, juiced",
      "1 tbsp olive oil",
      "2 cups romaine lettuce chopped",
      "1 ripe avocado, sliced",
      "1 medium tomato, diced",
      "1/2 cup black beans rinsed",
      "1/2 cup corn rinsed",
      "1/4 cup cilantro for topping",
      "1/2 cup sour cream or Greek yogurt",
      "1/4 cup packed cilantro with stems",
    ],
    "nutrition": {
      "calories": "516",
      "fat": "38g",
      "cholesterol": "111mg",
      "carbs": "51g",
      "protein": "50g",
      "sodium": "730mg"
    },
    "directions": [
      "In a medium ziplock bag, place the chicken breasts, taco seasoning, cumin, salt, 1/2 of the total lime juice and olive oil. Shake until fully combine and chicken is coated.",
      "If you are able to, marinating the chicken for 24 hours is beneficial, but 10 minutes will suffice if you're on the go!",
      "To cook chicken: heat a heavy skillet to medium/high heat (Be sure the skillet is very hot before adding chicken).",
      "Add 1 tsp oil of choice to skillet. Place the chicken on a skillet and cook for 4-5 minutes on each side. Allow chicken to rest in pan for 3 minutes before cutting, then set aside.",
      "To make the creamy cilantro dressing: Place the sour cream (or greek yogurt), cilantro, remaining 1/2 of the lime juice, and salt in a blender or food processor. Pulse for a few seconds until the cilantro is fully chopped.",
      "Place chopped lettuce on the serving plate, then top with avocado, chopped tomatoes, black beans, corn, cilantro, and sliced chicken.",
      "Top with your creamy cilantro dressing just before serving. Bravo!"
    ]
  },
]

recipes.forEach(recipe => {
  switch(recipe.type) {
    case 'beef':
      recipe.denotion = "/beef.png";
      break;
    case 'chicken':
      recipe.denotion = "/chicken.png";
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
    case 'vegetarian':
      recipe.denotion = "/vegetarian.png";
      break;
    default:
      recipe.denotion = "/chef.png";
      break;
  }
});

// create a context for the recipes data
export const RecipesContext = createContext(recipes);
