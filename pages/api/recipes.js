export const recipes = [{
  "meat": {
    "fish": [
      { 
        "id": 0,
        "name": "Fish Tacos",
        "type": "fish",
        "vegetarian": false,
        "vegan": false,
        "ingredients": [
          "1 ¼ cups flour",
          "2 tablespoons cornstarch",
          "1 teaspoon baking powder",
          "1 teaspoon salt",
          "1 cup beer",
          "1 cup egg",
          "1 quart oil",
          "1 pound fish, cut into strips",
          "flour or corn tortillas",
          "2 to 3 cups lettuce or other shredded greens"
        ],
        "nutrition": {
          "calories": "410",
          "fat": "19g",
          "carbs": "43g",
          "protein": "17g"
        },
        "directions": "Beer batter: Combine one cup flour, cornstarch, baking powder, and salt in large bowl. Blend beer and egg in a separate bowl, then quickly stir into flour mixture until thoroughly combined. Fish fry: Heat oil in a deep-fryer or a deep skillet to 375F. Dust fish pieces lightly with remaining flour. Dip fish into beer batter, then fry in oil until crisp and golden brown. Drain with paper towels. Fill tortillas with fish and desired toppings, sauces and enjoy!" 
      }
    ],
    "beef": [
      { 
        "id": 0,
        "name": "Crockpot Beef Stew",
        "type": "beef",
        "vegetarian": false,
        "vegan": false,
        "ingredients": [
          "2 lbs beef, cut into 1-inch pieces",
          "1 ½ cups beef broth",
          "¼ cup all-purpose flour",
          "½ teaspoon salt",
          "½ teaspoon black pepper",
          "4 medium carrots, sliced",
          "3 medium potatoes, diced",
          "1 medium onion, chopped",
          "1 stalk celery, chopped",
          "1 teaspoon Worcestershire sauce",
          "1 teaspoon ground paprika",
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
    ]
  }
}]


export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(recipes)
};