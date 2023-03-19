import { createContext } from "react";

export const recipes = [
  { 
    "id": 0,
    "name": "One Pot Creamy Pasta",
    "images": ["/pasta.png", "/vegetarian.png"],
    "types": ["pasta", "vegetarian"],
    "time": "25 minutes",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "4 garlic cloves, peeled & sliced",
      "7 oz (1 jar) sun dried tomatoes, drained",
      "5¼ cups (1.25L) vegetable broth",
      "1 lb penne pasta",
      "2 cups broccoli",
      "2 carrots, peeled",
      "4 oz cream cheese",
      "grated Parmesan cheese",
      "1/2 tbsp vegetable oil",
      "1/2 tsp ground black pepper",
      "1/4 tsp salt"
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
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "16 corn tortillas",
      "3 tbsp butter, melted",
      "4 cups shredded rotisserie chicken",
      "8 oz cream cheese",
      "2 cups shredded Cheddar",
      "1 cup Buffalo sauce",
      "1 bunch scallions, thinly sliced",
      "1/4 tsp ground cumin",
      "2 tbsp crumbled blue cheese",
      "2 tbsp blue cheese dressing (or ranch)"
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
    ]
  },
  { 
    "id": 2,
    "name": "Chili Mac and Cheese",
    "images": ["/pasta.png", "/beef.png"],
    "types": ["pasta", "beef"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "8 oz ground beef",
      "1 onion, diced",
      "16 oz (1 box) elbow macaroni",
      "4 cups chicken broth",
      "3/4 cup canned white kidney beans, drained",
      "3/4 cup canned kidney beans, drained",
      "14 oz (1 can) diced tomatoes",
      "1½ tsp chili powder",
      "1½ tsp paprika powder",
      "1 tsp onion powder",
      "1½ tsp cumin",
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
    ]
  },
  { 
    "id": 3,
    "name": "Bean and Cheese Burritos",
    "images": ["/vegetarian.png", "/texmex.png"],
    "types": ["vegetarian", "texMex"],
    "time": "25 minutes",
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
    ]
  },
  { 
    "id": 4,
    "name": "Sunset Thai Pasta",
    "images": ["/pasta.png", "/vegetarian.png"],
    "types": ["pasta", "vegetarian"],
    "time": "30 minutes",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "12 oz dry fettuccine",
      "4½ cups of vegetable broth",
      "1 large carrot, julienned",
      "1 red bell pepper, julienned",
      "4 green onions, thinly sliced",
      "4 garlic cloves, minced",
      "2 tbsp peanut butter",
      "2 tbsp fresh ginger, minced",
      "2 tbsp tomato paste",
      "1 tbsp brown sugar",
      "1 tbsp soy sauce",
      "2 tsp rice vinegar",
      "1 tbsp hoisin sauce",
      "1 tbsp vegan worcestershire sauce",
      "1 tbsp apple cider vinegar",
      "2 tsp fresh lemongrass, minced",
      "1/2 tsp fresh chili paste",
      "1/2 tsp turmeric",
      "1/2 lime, juiced (or 1 tbsp lime juice)"
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
    ]
  },
  { 
    "id": 5,
    "name": "Spicy Shepherd's Pie",
    "images": ["/beef.png"],
    "types": ["beef"],
    "time": "30 minutes",
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
      "1 cup shredded cheddar cheese",
      "1½ tsp chili powder",
      "1/4 tsp garlic powder",
      "1/2 tsp salt"
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
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "4 cups basmati rice",
      "8 cups water",
      "1/4 cup soy sauce",
      "1 tbsp chili garlic sauce",
      "1½ tsp hoisin sauce",
      "2 tbsp peanut oil",
      "2/3 cups green onions, thinly sliced",
      "1 lb pork shoulder, cut into 1/4 inch cubes",
      "1 large egg, lightly beaten",
      "1½ cups chopped red bell pepper",
      "1 cup frozen shelled edamame"
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
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1/4 cup chopped onion",
      "1/4 cup butter, cubed",
      "1/4 cup all-purpose flour",
      "1/2 cup shredded cheddar cheese",
      "1 cup cooked fresh or frozen broccoli",
      "1½ cups 2% milk",
      "3/4 cup chicken broth",
      "1/4 tsp ground pepper",
      "1/4 tsp salt"
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
      "This recipe serves two. To serve more deliciousness, double the ingredients.",
      "In a small saucepan, saute onion in butter until tender. Stir in the flour, salt and pepper until blended; gradually add milk and broth.",
      "Bring to a boil; cook and stir until thickened, about 2 minutes.",
      "Chef's Tip: Curdling in a cream soup usually occurs when the milk or cream is added at too high of a heat. As you gradually pour milk and broth into the onion and flour mixture, keep heat at medium and stir continuously with a whisk. Once it is all mixed in, then proceed to heat to a boil.",
      "Add broccoli. Cook and stir until heated through and steaming. Remove from the heat; stir in cheese until melted, then serve."
    ]
  },
  { 
    "id": 8,
    "name": "Pasta Fagioli Soup", 
    "images": ["/soup.png", "/pasta.png"],
    "types": ["soup", "pasta"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 lb ground Italian sausage",
      "1 small onion, chopped",
      "2 tsp canola oil",
      "1 garlic clove, minced",
      "3½ cups water",
      "2 cups uncooked elbow macaroni",
      "2 cans (14 1/2 oz) reduced-sodium chicken broth",
      "2 cans (15 1/2 oz) cannelini beans, drained and rinsed",
      "1 can (14 1/2 oz) diced tomatoes, undrained",
      "1 tsp italian seasoning",
      "1/2 tsp oregano",
      "1 tbsp tomato paste",
      "1 cup fresh spinach leaves, chopped",
      "2 tbsp shredded Parmesan cheese",
      "1 tsp salt",
      "1/4 tsp pepper"
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
      "Reduce heat to low; stir in sausage and spinach. Cook until spinach is wilted, 2-3 minutes. Garnish with cheese before the feast."
    ]
  },
  { 
    "id": 9,
    "name": "Southwestern Chicken Salad", 
    "images": ["/salad.png", "/chicken.png"],
    "types": ["salad", "chicken"],
    "time": "30 minutes",
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
      "1/4 cup packed cilantro with stems"
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
      "Top with creamy cilantro dressing, and that's it!"
    ]
  },

  { 
    "id": 10,
    "name": "Black Bean Salad",
    "images": ["/salad.png", "/vegetarian.png", "/vegan.png"],
    "types": ["salad", "vegetarian", "vegan"],
    "time": "20 minutes",
    "vegetarian": true,
    "vegan": true,
    "ingredients": [
      "1/4 cup cilantro leaves",
      "1 clove garlic, minced",
      "8 cups mixed salad greens",
      "1/2 cup red onion, thinly sliced",
      "2 ears corn, or 2 cups thawed frozen corn",
      "1 ripe avocado, pitted and chopped",
      "2 tbsp extra-virgin olive oil",
      "1 pint grape tomatoes, halved",
      "1 (15 oz) can black beans, drained",
      "1/2 tsp salt",
      "1/4 cup lime juice",
    ],
    "nutrition": {
      "calories": "322",
      "fat": "16g",
      "cholesterol": "0mg",
      "carbs": "41g",
      "protein": "11g",
      "sodium": "406mg"
    },
    "directions": [
      "Place onion in a medium bowl and cover with cold water. Set aside for now.",
      "Combine avocado, cilantro, lime juice, oil, garlic and salt in a mini food processor or blender. Mix until well-blended and smooth",
      "Just before serving, combine salad greens, corn, tomatoes and beans in a large bowl.",
      "Then, drain the onions and add them to bowl. Pour on the avocado dressing, toss to coat and then serve to your heart's desire."
    ]
  },
  { 
    "id": 11,
    "name": "Coconut Chickpea Curry", 
    "images": ["/vegetarian.png", "/vegan.png"],
    "types": ["vegetarian"],
    "time": "25 minutes",
    "vegetarian": true,
    "vegan": true,
    "ingredients": [
      "2 tsp avocado oil or canola oil",
      "1 cup chopped onion",
      "1 cup diced bell pepper",
      "1 medium zucchini, halved and sliced",
      "1 can (15 oz) chickpeas, drained and rinsed",
      "1½ cups coconut curry simmer sauce",
      "½ cup vegetable broth",
      "4 cups baby spinach",
      "2 cups cooked brown rice"
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
    "time": "20 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1¼ lb salmon, skinned and cut into 4 portions",
      "2 tbsp olive oil, split into two portions",
      "1 zucchini, halved and thinly sliced",
      "½ cup chopped onion",
      "⅓ cup dry white wine",
      "1 (15 oz) can diced tomatoes",
      "2 oz cream cheese, cut into cubes",
      "1 tsp Italian seasoning",
      "½ tsp garlic powder",
      "¼ cup chopped fresh basil",
      "¼ tsp salt",
      "¼ tsp ground pepper"
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
    "time": "20 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1½ lb fresh or frozen shrimp in shells",
      "6 oz whole-wheat or plain linguine",
      "1 tbsp olive oil",
      "3 cloves garlic, minced",
      "2 tbsp dry white wine or chicken broth",
      "1 tbsp chives or parsley, chopped",
      "1 tbsp butter",
      "1/8 tsp salt"
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
      "Transfer to plate on top of the Linguine, sprinkle with chives before chowing down."
    ]
  },
  { 
    "id": 14,
    "name": "Garlic Shrimp",
    "images": ["/seafood.png"],
    "types": ["seafood"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1½ tbsp olive oil",
      "1 tsp water",
      "1 lb shrimp, peeled and deveined",
      "6 cloves garlic, finely minced",
      "1/4 tsp red pepper flakes",
      "3 tbsp lemon juice",
      "2 tbsp butter, cut into 4 equal pieces, divided",
      "1/3 cup chopped parsley, divided",
      "1 tbsp caper brine",
      "1/2 tbsp salt"
    ],
    "nutrition": {
      "calories": "196",
      "fat": "12g",
      "cholesterol": "188mg",
      "carbs": "3g",
      "protein": "19g",
      "sodium": "244mg"
    },
    "directions": [
      "Heat olive oil in a heavy skillet over high heat until it begins to smoke. Place shrimp in an even layer in the pan and cook for 1 minute without stirring.",
      "Season shrimp with salt; cook and stir until shrimp begin to turn pink, about 1 minute.",
      "Add garlic and red pepper flakes; cook and stir for 1 minute.",
      "Stir in lemon juice, caper brine, 1 piece of butter, and 1/2 of the parsley; cook until butter has melted, about 1 minute.",
      "Reduce heat to low and stir in remaining butter. Cook and stir until butter has melted, sauce is thick, and shrimp are pink and opaque, 2 to 3 minutes.",
      "Remove shrimp with a slotted spoon and transfer to a bowl; continue to cook butter sauce, adding water, 1 tsp at a time, if too thick, about 2 minutes.",
      "Season with salt to taste; serve shrimp topped with the pan sauce and remaining parsley."
    ]
  },
  { 
    "id": 15,
    "name": "Korean Beef and Rice", 
    "images": ["/beef.png"],
    "types": ["beef"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 lb lean ground beef",
      "3 garlic cloves, minced",
      "¼ cup packed brown sugar",
      "⅓ cup reduced-sodium soy sauce",
      "1/2 tsp ground ginger",
      "1/2 tsp crushed red pepper flakes",
      "1/2 tsp pepper",
      "3 tsp sesame oil",
      "2⅔ cups hot cooked brown rice",
      "3 green onions, thinly sliced"
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
      "Serve with rice. Sprinkle with green onions and get ready for flavor town."
    ]
  },
  { 
    "id": 16,
    "name": "Skillet Ravioli Lasagna", 
    "images": ["/pasta.png", "/beef.png"],
    "types": ["pasta"],
    "time": "20 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 (24 oz) package frozen ravioli",
      "1 lb lean ground beef",
      "1½ tsp dried oregano",
      "1/2 tsp garlic powder",
      "1 (28 oz) can crushed tomatoes",
      "8 oz fresh mozzarella balls, divided",
      "1/4 cup chopped fresh basil",
      "1/4 tsp ground pepper",
      "1/2 tsp salt"
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
    "id": 17,
    "name": "Kickin' Chicken Adobo", 
    "images": ["/chicken.png"],
    "types": ["chicken"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 lb chicken thighs",
      "1/4 cup of soy sauce",
      "1/4 cup of white or cider vinegar",
      "1/8 cup of water",
      "1½ cup cooked brown or white rice",
      "3 cloves of garlic, pounded but not minced",
      "2 bay leaves",
      "1 tbsp fresh ground black pepper"
    ],
    "nutrition": {
      "calories": "350",
      "fat": "7g",
      "cholesterol": "95mg",
      "carbs": "22g",
      "protein": "26g",
      "sodium": "1060mg"
    },
    "directions": [
      "In a large pot, combine soy sauce, vinegar, water, pounded garlic, bay leaves and pepper. Whisk to mix thoroughly.",
      "Once the sauce is mixed, place chicken into pot, making sure it is all submerged.",
      "Place pot on stove, raise heat to medium-low and cover the pot",
      "Cover and bring pot to a fast simmer, adjusting heat as necessary. Keep covered, and simmer for 20-25 minutes.",
      "While pot is simmering, cook your rice. If the rice happens to be done early, it's okay! Keep covered so it remains warm.",
      "Remove the pot's cover and stir ingredients gently. Continue to simmer, uncovered, for an additional 5 minutes to allow the sauce to thicken.",
      "Spoon rice onto your serving dish, top with chicken thighs and desired amount of sauce. Chow down!"
    ]
  },
  { 
    "id": 18,
    "name": "Lasagna Bolognese Cups",
    "images": ["/beef.png", "/pasta.png"],
    "types": ["beef", "pasta"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 tbsp olive oil",
      "1 lb ground beef",
      "3 cloves crushed garlic",
      "1 egg, beaten",
      "28 oz (1 can) crushed tomatoes",
      "1 tbsp dried onions, minced",
      "1/2 cup red wine (or beef broth)",
      "1½ cups skim ricotta cheese",
      "1/4 cup grated Parmesan cheese",
      "1½ cups shredded mozzarella",
      "24 wonton wrappers",
      "1½ tbsp dried basil, divided use",
      "1/2 tsp black pepper",
      "2 tbsp fresh parsley, chopped",
      "1 tsp sea salt"
    ],
    "nutrition": {
      "calories": "290",
      "fat": "15g",
      "cholesterol": "125mg",
      "carbs": "17g",
      "protein": "20g",
      "sodium": "580mg"
    },
    "directions": [
      "Preheat oven to 375 degrees.",
      "In a large frying pan, heat olive oil on medium high heat. Add ground beef and cook for 5 to 7 minutes until meat is browned.",
      "Add garlic, tomatoes, 1 tbsp dried basil (reserve ½ tbsp), salt, pepper, onions, and wine. Bring to a simmer for 10 minutes then remove from heat. Stir well to combine.",
      "In a medium mixing bowl, mix together ricotta cheese, reserved dried basil, egg and parmesan cheese.",
      "Spray the muffin tin with cooking spray. Line the bottom of each muffin cup with a wonton wrapper. Spoon about 1 tbsp of sauce onto the top of each wonton wrapper. Top with ricotta mixture and sprinkle with mozzarella cheese.",
      "Place remaining wonton wrappers on top then another 1 tbsp of meat sauce, ricotta and mozarella cheese until all the cheese is used up. Save leftover sauce to serve with main dish!",
      "Bake in the preheated oven for about 12 minutes or until lasagnas are cooked through and cheese is melted and bubbly. Cool for 5 minutes before carefully removing from the muffin tin.",
      "Sprinkle with fresh herbs and serve with the extra Bolognese sauce put aside from earlier. Mission complete."
    ]
  },
  { 
    "id": 19,
    "name": "Veggie Party Stir Fry",
    "images": ["/vegetarian.png", "/vegan.png"],
    "types": ["vegetarian"],
    "time": "30 minutes",
    "vegetarian": true,
    "vegan": true,
    "ingredients": [
      "1 cup vegetable stock",
      "1/3 cup soy sauce",
      "2 tbsp rice vinegar",
      "2 tbsp white cooking wine",
      "2 tbsp brown sugar * packed",
      "2 tbsp ketchup",
      "1 tbsp sesame oil",
      "1 tbsp extra virgin olive oil",
      "1 cup carrots, thinly sliced",
      "3 cups broccoli",
      "1 red bell pepper, cut into thin strips",
      "1 cup snow peas",
      "1 8oz can sliced water chestnuts, drained",
      "1 15oz can baby corn, drained",
      "2 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "1 tbsp cornstarch",
      "1 tbsp water",
      "sesame seeds (garnish)",
      "cooked rice or noodles (optional)"
    ],
    "nutrition": {
      "calories": "315",
      "fat": "8g",
      "cholesterol": "90mg",
      "carbs": "53g",
      "protein": "10g",
      "sodium": "1430mg"
    },
    "directions": [
      "Whisk together vegetable stock, soy sauce, rice wine vinegar, wine (or broth), sugar, ketchup, and sesame oil. Set aside for now.",
      "Add the olive oil to a large skillet over medium-high heat, then add the carrots.",
      "Cook 2-3 minutes, stirring frequently, then add the broccoli, red bell pepper, snow peas, water chestnuts, and baby corn.",
      "Cook an additional 5-6 minutes, until everything is tender and heated through.",
      "Stir in the garlic and ginger and cook for 1 minute while stirring gently.",
      "Pour in the stir fry sauce and heat for 1-2 minutes, making sure the sauce is able to get hot.",
      "Mix together the cornstarch and water. Stir the cornstarch slurry into the vegetables and raise the heat to high.", 
      "Heat for 30 seconds to 1 minute to thicken the sauce.",
      "Serve as is, or over rice or noodles if you wish. Garnish with sesame seeds and begin the veggie party."
    ]
  },
  { 
    "id": 19,
    "name": "The Paprika Porka",
    "images": ["/pork.png"],
    "types": ["pork"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 pork tenderloin (1 lb), cut into 1 inch cubes",
      "1 tsp all-purpose flour",
      "4 tsp paprika",
      "3/4 tsp salt",
      "1/4 tsp pepper",
      "1 tbsp butter",
      "3/4 cup heavy whipping cream",
      "Hot cooked egg noodles or rice",
      "1 pack uncooked rice or noodles",
      "Minced fresh parsley, optional"
    ],
    "nutrition": {
      "calories": "320",
      "fat": "23g",
      "cholesterol": "122mg",
      "carbs": "3g",
      "protein": "24g",
      "sodium": "525mg"
    },
    "directions": [
      "Toss pork with flour and seasonings. In a large skillet, heat butter over medium heat; saute pork until lightly browned, 4-5 minutes.",
      "While pork is being sauteed, begin to prepare your rice or noodles if you are including them in your meal.",
      "Add cream; bring to a boil, stirring to loosen browned bits from pan. Cook, uncovered, until cream is slightly thickened, 5-7 minutes.",
      "Serve with prepared rice or noodles if desired. Sprinkle with parsley and turn off the stove, this dish is done!",
    ]
  },
  { 
    "id": 20,
    "name": "Pork Tenderloin Fajitas",
    "images": ["/pork.png"],
    "types": ["pork"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1/4 cup minced fresh cilantro",
      "1/2 tsp garlic powder",
      "1/2 tsp chili powder",
      "1/2 tsp ground cumin",
      "1 pork tenderloin (1 lb)",
      "1 tbsp canola oil",
      "1 small onion, sliced into rings",
      "1 green pepper, julienned",
      "1 red pepper, julienned",
      "4 flour tortillas (8 inches), warmed",
      "1 cup cup shredded cheese",
      "sour cream (desired amount)"
    ],
    "nutrition": {
      "calories": "327",
      "fat": "11g",
      "cholesterol": "63mg",
      "carbs": "29g",
      "protein": "28g",
      "sodium": "300mg"
    },
    "directions": [
      "In a small bowl, combine cilantro, garlic powder, chili powder and cumin; set aside.",
      "In a large skillet, saute pork in oil until no longer pink. Add onion and peppers; cook until crisp-tender.",
      "Sprinkle with seasoning mixture. Toss to coat until the seasoning is thoroughly combined with your fajita mix.",
      "Spoon onto tortillas, then top with cheese and sour cream before serving. Finito!"
    ]
  },
  { 
    "id": 21,
    "name": "Stuffed Pepper Soup",
    "images": ["/soup.png"],
    "types": ["soup"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 package ready-to-serve long grain and wild rice",
      "1 lb ground beef",
      "2 cups chopped green pepper",
      "1 cup chopped onion",
      "1 jar (26 oz) chunky tomato pasta sauce",
      "1 can (14 oz) diced tomatoes, undrained",
      "1 can (14 oz) beef broth",
    ],
    "nutrition": {
      "calories": "238",
      "fat": "8g",
      "cholesterol": "31mg",
      "carbs": "28g",
      "protein": "14g",
      "sodium": "920mg"
    },
    "directions": [
      "Heat up a pot of water with appropriate amount of water to cook the rice.",
      "Meanwhile, in a large saucepan, cook the beef, green peppers and onion over medium-high heat until meat is no longer pink, 5 to 7 minutes. Drain excess from pan.",
      "Prepare the rice according to the package directions while the beef cooks. If rice is done early, keep covered so it remains warm while beef finishes cooking",
      "Stir in the pasta sauce, tomatoes, broth and prepared rice; heat through and just like that, you've got some soup!"
    ]
  },
  { 
    "id": 22,
    "name": "Potato Bacon Soup",
    "images": ["/soup.png"],
    "types": ["soup"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "6 bacon strips, diced",
      "3 cups peeled potatoes, cubed",
      "1 carrot, grated",
      "1/2 cup chopped onion",
      "1 can (14 oz) chicken broth",
      "3 tbsp all-purpose flour",
      "3 cups whole milk (or heavy cream)",
      "8 oz Velveeta, cubed",
      "1 tbsp dried parsley flakes",
      "1/2 tsp salt",
      "1/2 tsp pepper",
      "1/2 tsp celery seed",
      "2 green onions, sliced very thin (optional topping)",
    ],
    "nutrition": {
      "calories": "250",
      "fat": "13g",
      "cholesterol": "35mg",
      "carbs": "22g",
      "protein": "12g",
      "sodium": "823mg"
    },
    "directions": [
      "In a large saucepan, cook bacon over medium heat until crisp, stirring occasionally; drain excess fat from pan",
      "Add vegetables, seasonings and broth; bring to a boil. Reduce heat; simmer, covered, until potatoes are tender, 10-15 minutes.",
      "Mix flour and milk until smooth; stir into soup. Bring to a boil, stirring constantly; cook and stir until thickened, about 2 minutes.",
      "Stir in cheese until melted. If desired, serve topped with green onions. Hope this soup hits the spot!"
    ]
  },
  { 
    "id": 23,
    "name": "Split Pea Soup",
    "images": ["/soup.png"],
    "types": ["soup"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "3 cups water",
      "2 tsp chicken bouillon granules",
      "1/2 tsp dried thyme",
      "4 celery ribs and leaves",
      "2 carrots, thinly sliced",
      "2 cans (24 oz total) condensed split pea soup",
      "1 cup cubed fully cooked ham",
      "shaved Parmesan cheese (optional)"
    ],
    "nutrition": {
      "calories": "249",
      "fat": "7g",
      "cholesterol": "23mg",
      "carbs": "32g",
      "protein": "16g",
      "sodium": "1500mg"
    },
    "directions": [
      "In a large saucepan, bring the water, bouillon granules and thyme to a boil.",
      "Thinly slice celery ribs and finely chop the leaves; set leaves aside for now",
      "Add celery ribs and carrots to water mixture; simmer, uncovered, for 5-8 minutes or until tender.",
      "Stir in the soup, ham and celery leaves and continue to heat until soup is steaming.",
      "Top each bowl of soup with cheese if desired before chowing down."
    ]
  },
  { 
    "id": 24,
    "name": "Chicken Noodle Soup",
    "images": ["/soup.png", "/chicken.png"],
    "types": ["soup", "chicken"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "2 tbsp unsalted butter",
      "1 tbsp olive oil",
      "2 cups chopped yellow onion",
      "1 cup chopped carrots (2 carrots)",
      "1 cup chopped celery (2 stalks)",
      "1¾ tsp kosher salt",
      "3 tbsp all-purpose flour",
      "4 cups unsalted chicken stock",
      "2 cups whole milk",
      "4 oz uncooked egg noodles",
      "3 cups chopped rotisserie chicken",
      "1 cup frozen green peas"
    ],
    "nutrition": {
      "calories": "258",
      "fat": "9g",
      "cholesterol": "25mg",
      "carbs": "24g",
      "protein": "23g",
      "sodium": "730mg"
    },
    "directions": [
      "Melt butter with olive oil in a large Dutch oven or pot over medium-high heat.",
      "Add onion, carrots, celery and salt and cook, stirring often, until vegetables are slightly softened, 6 to 8 minutes.",
      "Add flour and stir to coat. Stir in broth and milk and let mixture come to a boil.",
      "Add uncooked noodles to boiling mixture. Cover and cook until noodles are al dente, about 8 minutes.",
      "Stir in chicken and peas and cook until soup is warmed through, about 2 minutes, then your soup is ready to roll."
    ]
  },
  { 
    "id": 25,
    "name": "Tortellini Salad",
    "images": ["/salad.png", "/pasta.png", "/vegetarian.png"],
    "types": ["salad", "pasta", "vegetarian"],
    "time": "15 minutes",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "1 package (19 oz) frozen cheese tortellini",
      "1/2 cup mayonnaise",
      "1/4 cup 2% milk",
      "1/2 cup shredded Parmesan cheese",
      "1/2 to 1 cup cherry tomatoes, halved",
      "2 tbsp lemon juice",
      "2 garlic cloves, minced",
      "8 cups romaine lettuce, shredded",
      "1 cup croutons"
    ],
    "nutrition": {
      "calories": "252",
      "fat": "14g",
      "cholesterol": "17mg",
      "carbs": "22g",
      "protein": "8g",
      "sodium": "390mg"
    },
    "directions": [
      "Begin by heating pot of water and cooking the tortellini according to package directions.",
      "Meanwhile, in a small bowl, combine the mayonnaise, milk, 1/4 cup Parmesan cheese, lemon juice and garlic.",
      "Drain tortellini and rinse in cold water; transfer to a large bowl. Add romaine and remaining Parmesan to the bowl.",
      "Drizzle bowl with dressing, then toss salad to coat.",
      "Top with croutons and you're done! Now watch it magically disappear."
    ]
  },
  { 
    "id": 26,
    "name": "Chicken Meatball Salad",
    "images": ["/salad.png", "/chicken.png"],
    "types": ["salad", "chicken"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "Cooking spray",
      "1 lb ground chicken",
      "1 egg, beaten",
      "1/4 cup plain breadcrumbs",
      "1/3 cup chopped onion",
      "1 1/2 tsp chopped garlic",
      "1 (4 oz) Hatch chiles",
      "1/2 tsp chili powder",
      "1/2 tsp ground cumin",
      "1 head romaine lettuce",
      "kosher salt and freshly ground pepper",
      "shredded cheese of your choice",
      "guacamole",
      "salsa"
    ],
    "nutrition": {
      "calories": "350",
      "fat": "10g",
      "cholesterol": "150mg",
      "carbs": "35g",
      "protein": "20g",
      "sodium": "1150mg"
    },
    "directions": [
      "Preheat oven to 400°F. Coat a small sheet pan with cooking spray",
      "Combine chicken, egg, breadcrumbs, onion, garlic, Hatch chiles, chili powder, and cumin in a bowl.",
      "Season with salt and pepper. Form mixture into 9 (2 oz each) meatballs, and place on prepared pan.",
      "Lightly grease meatballs with cooking spray. Bake until cooked through, 18 to 20 minutes",
      "Serve meatballs on romaine topped with guacamole, salsa, and cheese"
    ]
  },
  { 
    "id": 27,
    "name": "Rainbow Chicken Salad",
    "images": ["/salad.png", "/chicken.png"],
    "types": ["salad", "chicken"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1/3 loaf ciabatta, cut into 1-inch cubes",
      "2 garlic cloves, minced",
      "1/2 lb rainbow carrots, halved lengthwise",
      "2 cup shredded rotisserie chicken",
      "1 cup cooked fresh or frozen peas",
      "1 fennel bulb, cored and thinly sliced",
      "6 cups romaine lettuce",
      "3 tbsp olive oil",
      "1/2 tsp ground black pepper",
      "For the Vinaigrette Dressing:",
      "1/4 cup olive oil",
      "2 tbsp white balsamic vinegar",
      "1 1/2 tbsp chopped fresh chives",
      "1/2 minced small shallot",
      "1 1/2 tsp Dijon mustard",
      "1/4 tsp ground black pepper",
      "1 tsp sugar",
      "1 tsp salt"
    ],
    "nutrition": {
      "calories": "395",
      "fat": "23g",
      "cholesterol": "85mg",
      "carbs": "22g",
      "protein": "28g",
      "sodium": "542mg"
    },
    "directions": [
      "Preheat oven to 400°F. Coat a small sheet pan with cooking spray",
      "Combine chicken, egg, breadcrumbs, onion, garlic, Hatch chiles, chili powder, and cumin in a bowl.",
      "Season with salt and pepper. Form mixture into 9 (2 oz each) meatballs, and place on prepared pan.",
      "Lightly grease meatballs with cooking spray. Bake until cooked through, 18 to 20 minutes",
      "Serve meatballs on romaine topped with guacamole, salsa, and cheese"
    ]
  },
  { 
    "id": 28,
    "name": "White Bean Salad",
    "images": ["/salad.png", "/chicken.png"],
    "types": ["salad", "chicken"],
    "time": "10 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "2 cups mixed salad greens",
      "1/2 chopped cucumbers",
      "1/2 cup halved cherry tomatoes",
      "1/3 cup canned white beans, drained",
      "1/2 avocado, diced",
      "1 tbsp red-wine vinegar",
      "2 tsp olive oil",
      "¼ tsp kosher salt",
      "ground pepper, to taste"
    ],
    "nutrition": {
      "calories": "360",
      "fat": "25g",
      "cholesterol": "5mg",
      "carbs": "30g",
      "protein": "10g",
      "sodium": "322mg"
    },
    "directions": [
      "Combine greens, veggies, beans and avocado in a medium bowl.",
      "Drizzle with vinegar and oil and season with salt and pepper.",
      "Toss to combine and coat salad, then transfer to a large plate for maximum enjoyment."
    ]
  },
  { 
    "id": 29,
    "name": "Sun-Dried Tomato and Spinach Pasta",
    "images": ["/pasta.png", "/vegetarian.png"],
    "types": ["pasta", "vegetarian"],
    "time": "30 minutes",
    "vegetarian": true,
    "vegan": false,
    "ingredients": [
      "5 oz baby spinach, coarsely chopped",
      "8 oz whole-wheat spaghetti",
      "1/2 cup sun-dried tomatoes, in oil",
      "1 tbsp oil from sun-dried tomatoes jar",
      "1/2 cup onion, halved and sliced",
      "3 cloves garlic, minced",
      "1/4 tsp crushed red pepper",
      "1/4 tsp salt",
      "1/4 tsp ground pepper",
      "1 cup vegetable broth",
      "1/2 cup sour cream",
      "1/4 cup grated Parmesan cheese",
      "1 tbsp unsalted butter",
    ],
    "nutrition": {
      "calories": "380",
      "fat": "16g",
      "cholesterol": "26mg",
      "carbs": "51g",
      "protein": "13g",
      "sodium": "330mg"
    },
    "directions": [
      "Place spinach in a colander in the sink. Bring a large pot of water to a boil over high heat. Add spaghetti and cook according to package directions.",
      "Drain the pasta over the spinach; toss gently to help wilt the spinach.",
      "Meanwhile, heat sun-dried tomato oil in a large skillet over medium heat.",
      "Add onion and sun-dried tomatoes; cook, stirring, until softened, about 3 minutes.",
      "Add garlic, crushed red pepper, salt and pepper; cook, stirring, for 1 minute.",
      "Increase heat to medium-high and add broth; cook, stirring, until reduced by about half, about 2 minutes.",
      "Stir in sour cream, Parmesan and butter. Add the spaghetti and spinach; toss to coat well."
    ]
  },
  { 
    "id": 30,
    "name": "Beef & Cauliflower Casserole",
    "images": ["/beef.png"],
    "types": ["beef"],
    "time": "30 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 tbsp olive oil",
      "½ cup chopped onion",
      "1  green bell pepper, chopped",
      "1 lb lean ground beef",
      "3 cups cauliflower florets",
      "3 cloves garlic, minced",
      "2 tbsp chili powder",
      "1/4 tsp ground chipotle",
      "1 (15 oz) can diced tomatoes",
      "⅓ cup sliced pickled jalapeños ",
      "2 cups shredded sharp Cheddar cheese",
      "2 tsp ground cumin",
      "1 tsp dried oregano",
      "1/2 tsp salt",
    ],
    "nutrition": {
      "calories": "351",
      "fat": "23g",
      "cholesterol": "86mg",
      "carbs": "11g",
      "protein": "26g",
      "sodium": "672mg"
    },
    "directions": [
      "Position rack in upper third of oven if possible. Preheat broiler to high.",
      "Heat oil in a large oven-safe skillet over medium heat. Add onion and bell pepper; cook, stirring, until softened, about 5 minutes.",
      "Add beef and cauliflower; cook 5 to 7 minutes, breaking the beef up into smaller pieces once it begins to brown.",
      "Stir in garlic, chili powder, cumin, oregano, salt and chipotle; cook for about 1 minute, then add tomatoes and their juice.",
      "Bring to a simmer and cook, stirring occasionally, until liquid is reduced and cauliflower is tender, about 3 minutes",
      "Remove from heat, then sprinkle cheese over the beef mixture and top with sliced jalapeños.",
      "Return dish to oven and broil until the cheese is melted and browned in spots, 2 to 3 minutes.",
      "Allow cheese to cool for a couple of minutes before serving to make your life easier when serving out the gooey goodness."
    ]
  },
  { 
    "id": 31,
    "name": "Creamy Chicken Skillet", 
    "images": ["/chicken.png"],
    "types": ["chicken"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "1 lb chicken cutlets",
      "1/4 tsp salt, divided",
      "1/4 tsp ground pepper",
      "2 tbsp olive oil, divided",
      "1 zucchini, thinly sliced",
      "½ cup chopped onion",
      "⅓ cup dry white wine",
      "1 can (15 oz) diced tomatoes",
      "2 oz cream cheese, cut into cubes",
      "1 tsp Italian seasoning",
      "1/2 tsp garlic powder",
      "1/4 cup chopped fresh basil"
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
    "id": 32,
    "name": "Garlic Butter Chicken", 
    "images": ["/chicken.png"],
    "types": ["chicken"],
    "time": "20 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": [
      "3 tbsp olive oil",
      "1½lb boneless skinless chicken breasts, pounded",
      "1 to 2 tsp 21 Salute Seasoning (or poultry seasoning)",
      "1/2 cup white wine* or chicken broth, or as necessary",
      "3 tbsp unsalted butter, or more if you want extra sauce",
      "1 tablespoon garlic, finely minced",
      "1 tsp freshly ground black pepper",
      "2 tsp fresh parsley",
      "1 tsp kosher salt",
    ],
    "nutrition": {
      "calories": "294",
      "fat": "21g",
      "cholesterol": "63mg",
      "carbs": "6g",
      "protein": "15g",
      "sodium": "2900mg"
    },
    "directions": [
      "In a large skillet, add the olive oil, pounded chicken, evenly season with 21 Salute, salt, pepper, and cook over medium-high heat for 5 minutes.",
      "A little tip! Do not move, or touch the chicken while it is searing. After 5 minutes, flip chicken over. For bigger chicken breasts, sear for 6-7 minutes until golden brown.",
      "Cook chicken on second side for about 5 minutes, until done and cooked through (remember, 165 F!).",
      "Remove chicken with a slotted spatula and place it on a plate to rest.",
      "Using caution to avoid the splatter, deglaze your skillet by adding wine (or broth) and allow the liquid to bubble up and steam for a few seconds.",
      "Add butter to skillet and allow it to melt, about 30 seconds, stirring continuously until fully melted.",
      "Add the garlic and cook until fragrant, about 1 minutes; stir continuously.",
      "Turn the heat off, add the chicken back into the skillet, flip it to coat with garlic butter sauce, then spoon the sauce over the chicken to fully coat.",
      "Garnish with parsley if desired, and enjoy a hot meal.",
    ]
  }
];

recipes.forEach(recipe => {
  recipe.denotations = [];
  recipe.types.forEach(type => {
    switch(type) {
      case 'beef':
        recipe.denotations.push("/beef.png");
        break;
      case 'chicken':
        recipe.denotations.push("/chicken.png");
        break;
      case 'pasta':
        recipe.denotations.push("/pasta.png");
        break;
      case 'pork':
        recipe.denotations.push("/pork.png");
        break;
      case 'seafood':
        recipe.denotations.push("/seafood.png");
        break;
      case 'salad':
        recipe.denotations.push("/salad.png");
        break;
      case 'soup':
        recipe.denotations.push("/soup.png");
        break;
      case 'texMex':
        recipe.denotations.push("/texmex.png");
        break;
      case 'vegan':
        recipe.denotations.push("/vegan.png");
        break;  
      case 'vegetarian':
        recipe.denotations.push("/vegetarian.png");
        break;
      default:
        recipe.denotations.push("/chef.png");
        break;
    }
  })
});

// create a context for the recipes data
export const RecipesContext = createContext(recipes);
