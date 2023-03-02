### Recipe Types

#### An Array of recipe types.

- Beef
- Chicken
- Pasta
- Pork
- Salad
- Seafood
- Soup
- TexMex
- Vegetarian

-------

### Vegetarian

- Boolean, true/false

-------

### Vegan

- Boolean, true/false

-------

### Ingredients

#### An Array of ingredients.

```
"ingredients": [
    "1 tbsp olive oil",
    "2 cloves garlic, minced",
    "8 oz ground beef"
```

-------

### Nutrition

#### An Object that contains nutritional value properties:
- Calories
- Fat
- Cholesterol
- Carbs
- Protein
- Sodium

```
"nutrition": {
    "calories": "750",
    "fat": "35g",
    "cholesterol": "90mg",
    "carbs": "70g",
    "protein": "44g",
    "sodium": "1600mg"
}
```

-------

### Directions
#### An Array that contains step-by-step cooking instructions.

```
"directions": [
    "Ring around the rosie",
    "Fly me to the moon",
    "Land on the ground",
    "Jump up and spin around"
]
```

### Denotations
#### An array of images that denotes the types of each recipe.
#### Loop through the recipes array and isolate each `type` property. Switch cases assign a `denotation` property to denote the recipe's type.

```
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
      case 'vegetarian':
        recipe.denotations.push("/vegetarian.png");
        break;
      default:
        recipe.denotations.push("/chef.png");
        break;
    }
  })
});
```