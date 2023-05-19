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
  setRecipe((prevRecipe) => ({
    ...prevRecipe,
    ingredients: value
  }));
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
