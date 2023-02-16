### Recipe Types

- Beef
- Chicken
- Pasta
- Pork
- Salad
- Seafood
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

### Denotion
#### An image that denotes the type of recipe.
#### Loop through the recipes array and isolate each `type` property. Switch cases assign a `denotion` property to denote the recipe's type.

```
recipes.forEach(recipe => {
  switch(recipe.type) {
    case 'beef':
      recipe.denotion = `beef.png`;
      break;
    case 'chicken':
      recipe.denotion = `chicken.png`;
      break;
    case 'pasta':
      recipe.denotion = `pasta.png`;
      break;
    case 'pork':
      recipe.denotion = `pork.png`;
      break;
    case 'seafood':
      recipe.denotion = `seafood.png`;
      break;
    case 'salad':
      recipe.denotion = `salad.png`;
      break;
    case 'soup':
      recipe.denotion = `soup.png`;
      break;
    case 'vegan':
      recipe.denotion = `vegan.png`;
      break;
    case 'vegetarian':
      recipe.denotion = `vegetarian.png`;
      break;
    default:
      recipe.denotion = `chef.png`;
      break;
  }
});
```