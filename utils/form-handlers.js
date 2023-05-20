export const handleTypesChange = (setNewRecipe, value, checked) => {
  setNewRecipe(newRecipe => {
    const selectedType = value;
    const newTypes = checked
      ? [...newRecipe.types, selectedType]
      : newRecipe.types.filter((type) => type !== selectedType);
    return { ...newRecipe, types: newTypes };
  });
};

export const handleIngredientsChange = (index) => (event) => {
  const updatedIngredients = [...ingredients];
  updatedIngredients[index] = event.target.value;
  setIngredients(updatedIngredients);
};

export const handleAddIngredient = () => {
  const updatedIngredients = [...ingredients, ''];
  setIngredients(updatedIngredients);
};

export const handleRemoveIngredient = (index) => () => {
  const updatedIngredients = [...ingredients];
  updatedIngredients.splice(index, 1);
  setIngredients(updatedIngredients);
};

export const handleNutritionChange = (setNewRecipe, name, value) => {
  setNewRecipe(newRecipe => {
    const propertyName = name.slice('nutrition.'.length);
    return {
      ...newRecipe,
      nutrition: { ...newRecipe.nutrition, [propertyName]: value }
    };
  });
};

export const handleDirectionsChange = (setNewRecipe) => {
  setNewRecipe(newRecipe => {
    return {
      ...newRecipe,
      directions: [...newRecipe.directions, '']
    };
  });
};

export const handleGenericChange = (setNewRecipe, name, type, checked, value) => {
  setNewRecipe(newRecipe => {
    const newValue = type === 'checkbox' ? checked : value;
    return { ...newRecipe, [name]: newValue };
  });
};
