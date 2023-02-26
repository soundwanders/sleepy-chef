import { createContext } from "react";

export const recipes = [
  { 
    "id": 0,
    "name": "One Pot Creamy Pasta",
    "images": ["/pasta.png"],
    "types": ["pasta"],
    "vegetarian": true,
    "vegan": false,
    "time": "25 minutes",
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
      "Top with grated parmesan and you're done!"
    ]
   },
  { 
    "id": 1,
    "name": "Buffalo Chicken Enchiladas",
    "images": ["/chicken.png", "/texmex.png"],
    "types": ["chicken", "texMex"],
    "vegetarian": false,
    "vegan": false,
    "time": "30 minutes",
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
    "images": ["/pasta.png", "/beef.png"],
    "types": ["pasta", "beef"],
    "vegetarian": false,
    "vegan": false,
    "time": "",
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
    "images": ["/vegetarian.png", "/texmex.png"],
    "types": ["vegetarian, texMex"],
    "vegetarian": true,
    "vegan": false,
    "time": "25 minutes",
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
    "name": "Sunset Thai Pasta",
    "images": ["/pasta.png"],
    "types": ["pasta"],
    "vegetarian": true,
    "vegan": false,
    "time": "30 minutes",
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
    "images": ["/beef.png"],
    "types": ["beef"],
    "vegetarian": false,
    "vegan": false,
    "time": "30 minutes",
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
    "images": ["/pork.png"],
    "types": ["pork"],
    "vegetarian": false,
    "vegan": false,
    "time": "30 minutes",
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
      "Stir-fry until pork is no longer pink in the center and juices run clear, 4-5 minutes. Transfer pork to soy sauce mixture; toss to coat.",
      "Pour egg into the pan; cook, without stirring, until set, about 45 seconds. Cut egg into bite-sized pieces.",
      "Add remaining 1 tbsp oil to pan; swirl to coat. Add bell pepper, edamame, and 1/2 cup green onions; stir-fry 1 minute.",
      "Add cooked rice; stir-fry 2 minutes, then add pork and soy sauce mixture. Cook, stirring constantly, until heated through, about 1 minute.",
      "Top rice with egg and remaining green onions, then fly into flavor town."
    ]
  },
  { 
    "id": 7,
    "name": "Broccoli Cheddar Soup", 
    "images": ["/soup.png"],
    "types": ["soup"],
    "vegetarian": false,
    "vegan": false,
    "time": "30 minutes",
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
      "This recipe serves two. To serve more deliciosuness, double the ingredients.",
      "In a small saucepan, saute onion in butter until tender. Stir in the flour, salt and pepper until blended; gradually add milk and broth.",
      "Bring to a boil; cook and stir until thickened, about 2 minutes.",
      "Chef's Tip: Curdling in a cream soup usually occurs when the milk or cream is added at too high of a heat. As you gradually pour milk and broth into the onion and flour mixture, keep heat at medium and stir continuously with a whisk. Once it is all mixed in, then proceed to heat to a boil.",
      "Add broccoli. Cook and stir until heated through and steaming. Remove from the heat; stir in cheese until melted, then serve.",
    ]
  },
  { 
    "id": 8,
    "name": "Pasta Fagioli Soup", 
    "images": ["/soup.png", "/pasta.png"],
    "types": ["soup", "pasta"],
    "vegetarian": false,
    "vegan": false,
    "time": "30 minutes",
    "ingredients": [
      "1 lb ground Italian sausage",
      "1 small onion, chopped",
      "2 tsp canola oil",
      "1 garlic clove, minced",
      "3 1/2 cups water",
      "2 cups uncooked elbow macaroni",
      "2 cans (14 1/2 oz) reduced-sodium chicken broth",
      "2 cans (15 1/2 oz) cannelini beans, drained and rinsed",
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
    "images": ["/salad.png", "/chicken.png"],
    "types": ["salad", "chicken"],
    "vegetarian": false,
    "vegan": false,
    "time": "",
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
  { 
    "id": 10,
    "name": "Creamy Chicken Skillet", 
    "images": ["/chicken.png"],
    "types": ["chicken"],
    "vegetarian": false,
    "vegan": false,
    "time": "20 minutes",
    "ingredients": [
      "1 lb chicken cutlets",
      "¼ tsp salt, divided",
      "¼ tsp ground pepper",
      "2 tbsp olive oil, divided",
      "1 zucchini, thinly sliced",
      "½ cup chopped onion",
      "⅓ cup dry white wine",
      "1 can (15 oz) diced tomatoes",
      "2 oz cream cheese, cut into cubes",
      "1 tsp Italian seasoning",
      "½ tsp garlic powder",
      "¼ cup chopped fresh basil",
    ],
    "nutrition": {
      "calories": "301",
      "fat": "14g",
      "cholesterol": "97mg",
      "carbs": "11g",
      "protein": "27g",
      "sodium": "250mg"
    },
    "directions": [
      "Sprinkle chicken with 1/8 tsp each salt and pepper. Heat 1 tbsp oil in a large skillet over medium heat.",
      "Add the chicken and cook, turning once, until browned on each side and fully cooked to atleast 165F. Transfer to a plate.",
      "Slowly pour in the remaining 1 tbsp oil as well as the zucchini and onion to the pan. Cook, stirring, until starting to soften, about 2 minutes.",
      "Increase heat to medium-high and add wine. Cook, scraping up any browned bits, until the liquid has mostly evaporated, about 2 minutes.",
      "Next, add the tomatoes, cream cheese, Italian seasoning, garlic powder and the remaining 1/8 tsp each salt and pepper. Bring to a simmer and cook, stirring to melt the cream cheese, for 5 minutes.",
      "Return the chicken to the pan and turn to coat with the sauce. Serve topped with basil and enjoy."
    ]
  },
  { 
    "id": 11,
    "name": "Coconut Chickpea Curry", 
    "images": ["/vegetarian.png", "/vegan.png"],
    "types": ["vegetarian"],
    "vegetarian": true,
    "vegan": true,
    "time": "20 minutes",
    "ingredients": [
      "2 tsp avocado oil or canola oil",
      "1 cup chopped onion",
      "1 cup diced bell pepper",
      "1 medium zucchini, halved and sliced",
      "1 can (15 oz) chickpeas, drained and rinsed",
      "1½ cups coconut curry simmer sauce",
      "½ cup vegetable broth",
      "4 cups baby spinach",
      "2 cups precooked brown rice"
    ],
    "nutrition": {
      "calories": "470",
      "fat": "18g",
      "cholesterol": "4mg",
      "carbs": "66g",
      "protein": "11g",
      "sodium": "575mg"
    },
    "directions": [
      "Heat oil in a large skillet over medium-high heat. Add onion, pepper and zucchini; cook, stirring often, until veggies begin to brown, 5 to 6 minutes.",
      "Preparing the brown rice should take 10 to 15 minutes, so plan accordingly and make sure it is not cold when your veggies are done.",
      "Add your chickpeas, simmer sauce and broth and then bring to a simmer, stirring to combine ingredients thoroughly.",
      "Reduce heat to medium-low and simmer until the veggies are tender, which should only take about 4 to 5 minutes.",
      "Stir in spinach just before serving to prevent heavy wilting. Serve  over rice, and let the feast begin."
    ]
  },
  { 
    "id": 12,
    "name": "Tomato Salmon Skillet", 
    "images": ["/seafood.png"],
    "types": ["seafood"],
    "vegetarian": false,
    "vegan": false,
    "time": "20 minutes",
    "ingredients": [
      "1¼ lb salmon, skinned and cut into 4 portions",
      "¼ tsp salt",
      "¼ tsp ground pepper",
      "2 tbsp olive oil, split into two portions",
      "1 zucchini, halved and thinly sliced",
      "½ cup chopped onion",
      "⅓ cup dry white wine",
      "1 (15 oz) can diced tomatoes",
      "2 oz cream cheese, cut into cubes",
      "1 tsp Italian seasoning",
      "½ tsp garlic powder",
      "¼ cup chopped fresh basil",
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
      "Pat salmon dry and sprinkle with 1/8 tsp each salt and pepper. Heat 1 tbsp oil in a large skillet over medium-high heat.",
      "Add the salmon and cook until the underside is browned and releases easily from the pan, 3 to 4 minutes.",
      "Once underside is nicely browned, gently flip salmon and continue to cook until opaque in the center, another 2 to 3 minutes.",
      "Transfer to a plate and cover with foil or something similar to keep warm",
      "Meanwhile, add the remaining 1 tbsp oil, zucchini and onion to the pan. Cook, stirring, until starting to soften, about 3 minutes.",
      "Increase heat to medium-high and add wine. Cook, stirring, until the liquid has mostly evaporated, about 2 minutes.",
      "Add tomatoes, cream cheese, Italian seasoning, garlic powder and the remaining 1/8 tsp each salt and pepper. Bring to a simmer and cook, stirring, until the cream cheese is melted, 4 to 5 minutes.",
      "Return salmon to the pan and turn pan to coat salmon with the sauce. Top the whole thing off with a generous pinch of basil, then serve!"
    ]
  },
  { 
    "id": 13,
    "name": "Super Shrimp Scampi", 
    "images": ["/seafood.png"],
    "types": ["seafood"],
    "vegetarian": false,
    "vegan": false,
    "time": "20 minutes",
    "ingredients": [
      "1½ lb fresh or frozen shrimp in shells",
      "6 oz whole-wheat or plain linguine",
      "1 tbsp olive oil",
      "3 cloves garlic, minced",
      "2 tbsp dry white wine or chicken broth",
      "1 tbsp butter",
      "⅛ tsp salt",
      "1 tbsp chopped fresh chives or parsley"
    ],
    "nutrition": {
      "calories": "341",
      "fat": "9g",
      "cholesterol": "22mg",
      "carbs": "35g",
      "protein": "29g",
      "sodium": "1040mg"
    },
    "directions": [
      "Thaw shrimp, if frozen. Peel and devein shrimp, leaving tails intact, if desired. Rinse shrimp; pat dry with paper towels.",
      "Cook linguine according to package directions. Drain and keep warm.",
      "Meanwhile, heat oil in a 12-inch skillet over medium-high heat. Add garlic; cook and stir for 15 seconds. Add shrimp and cook for 2 to 4 minutes, or until shrimp turn opaque, stirring often",
      "Transfer shrimp to a serving platter using a slotted spoon or similar object to gently handle the shrimp",
      "Add wine, butter, and salt to the skillet. Cook and stir over medium heat to loosen any browned bits and to melt butter. Pour butter mixture over shrimp.",
      "Transfer to plate on top of the Linguine, sprinkle with chives before feasting."
    ]
  },
  { 
    "id": 14,
    "name": "Skillet Ravioli Lasagna", 
    "images": ["/pasta.png", "/beef.png"],
    "types": ["pasta"],
    "vegetarian": false,
    "vegan": false,
    "time": "20 minutes",
    "ingredients": [
      "1 (24 oz) package frozen ravioli",
      "1 lb lean ground beef",
      "1½ tsp dried oregano",
      "½ tsp garlic powder",
      "½ tsp salt",
      "¼ tsp ground pepper",
      "1 (28 oz) can crushed tomatoes",
      "¼ cup chopped fresh basil",
      "8 oz small fresh mozzarella balls, divided"
    ],
    "nutrition": {
      "calories": "485",
      "fat": "5g",
      "cholesterol": "125mg",
      "carbs": "33g",
      "protein": "38g",
      "sodium": "1040mg"
    },
    "directions": [
      "Preheat broiler. Bring a large pot of water to a boil. Cook ravioli according to package directions; drain and set aside.",
      "Meanwhile, cook ground beef in a large cast-iron or oven-safe skillet over medium-high heat until cooked through, about 5 minutes, crumbling the beef shortly after it begins to brown",
      "Season with oregano, garlic powder, salt and pepper, then add tomatoes and basil; bring pot to a simmer.",
      "Gently add the cooked ravioli and half of the mozzarella balls, making sure to submerge both the ravioli and mozzarella.",
      "Scatter the remaining mozzarella balls over the top of the pasta. Carefully transfer the pan to the oven.",
      "Broil until the cheese is melted, 2 to 3 minutes, allow to cool momentarily before serving in your favorite bowl."
    ]
  },
  { 
    "id": 15,
    "name": "Korean Beef and Rice", 
    "images": ["/beef.png"],
    "types": ["beef"],
    "vegetarian": false,
    "vegan": false,
    "time": "20 minutes",
    "ingredients": [
      "1 lb lean ground beef",
      "3 garlic cloves, minced",
      "¼ cup packed brown sugar",
      "⅓ cup reduced-sodium soy sauce",
      "3 tsp sesame oil",
      "½ tsp ground ginger",
      "½ tsp crushed red pepper flakes",
      "½ tsp pepper",
      "2 2/3 cups hot cooked brown rice",
      "3 green onions, thinly sliced",
    ],
    "nutrition": {
      "calories": "415",
      "fat": "13g",
      "cholesterol": "70mg",
      "carbs": "45g",
      "protein": "27g",
      "sodium": "650mg"
    },
    "directions": [
      "In a large skillet, cook garlic and beef over medium heat for about 8 minutes, until no longer pink, breaking beef into crumbles as you cook",
      "Meanwhile, in a small bowl, mix brown sugar, soy sauce, oil and seasonings and whisk to combine thoroughly.",
      "Stir sauce into beef, heating until sauce begins to lightly simmer.",
      "Remove skillet from heat and allow beef to absorb sauce for an additional 1 minute.",
      "Serve with rice. Sprinkle with green onions and get ready for some flavor.",
    ]
  },
];

recipes.forEach(recipe => {
  recipe.denotions = [];
  recipe.types.forEach(type => {
    switch(type) {
      case 'beef':
        recipe.denotions.push("/beef.png");
        break;
      case 'chicken':
        recipe.denotions.push("/chicken.png");
        break;
      case 'pasta':
        recipe.denotions.push("/pasta.png");
        break;
      case 'pork':
        recipe.denotions.push("/pork.png");
        break;
      case 'seafood':
        recipe.denotions.push("/seafood.png");
        break;
      case 'salad':
        recipe.denotions.push("/salad.png");
        break;
      case 'soup':
        recipe.denotions.push("/soup.png");
        break;
      case 'texMex':
        recipe.denotions.push("/texmex.png");
        break;  
      case 'vegetarian':
        recipe.denotions.push("/vegetarian.png");
        break;
      default:
        recipe.denotions.push("/chef.png");
        break;
    }
  })
});

// create a context for the recipes data
export const RecipesContext = createContext(recipes);
