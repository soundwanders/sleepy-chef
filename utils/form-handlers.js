export const handleTypesChange = (setRecipe, value, checked) => {
  setRecipe(newRecipe => {
    const selectedType = value;
    const newTypes = checked
      ? [...newRecipe.types, selectedType]
      : newRecipe.types.filter((type) => type !== selectedType);
    return { ...newRecipe, types: newTypes };
  });
};

export const handleIngredientsChange = (setRecipe, value) => {
  setRecipe((newRecipe) => {
    const ingredientsList = value
      .split(/,\s*/) // Split based on commas followed by optional spaces
      .filter((ingredient) => ingredient.trim() !== '')
      .map((ingredient) => {
        const [quantity, ...parts] = ingredient.split(/\s+/);
        const ingredientName = parts.join(' ');
        return { quantity, ingredient: ingredientName };
      });

    return { ...newRecipe, ingredients: ingredientsList };
  });
};

export const handleNutritionChange = (setRecipe, name, value) => {
  setRecipe(newRecipe => {
    const propertyName = name.slice('nutrition.'.length);
    return {
      ...newRecipe,
      nutrition: { ...newRecipe.nutrition, [propertyName]: value }
    };
  });
};

export const handleDirectionsChange = (setRecipe) => {
  setRecipe(newRecipe => {
    return {
      ...newRecipe,
      directions: [...newRecipe.directions, '']
    };
  });
};

export const handleGenericChange = (setRecipe, name, type, checked, value) => {
  setRecipe(newRecipe => {
    const newValue = type === 'checkbox' ? checked : value;
    return { ...newRecipe, [name]: newValue };
  });
};
