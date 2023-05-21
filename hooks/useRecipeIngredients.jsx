import { useState } from 'react';

export const useRecipeIngredients = (initialIngredients) => {
  const [ingredients, setIngredients] = useState(initialIngredients);

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  return [ingredients, handleIngredientChange, handleAddIngredient, handleRemoveIngredient];
};
