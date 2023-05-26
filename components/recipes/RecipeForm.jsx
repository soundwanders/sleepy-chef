import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/ui/Highlighter';
import { FormUI } from '@components/ui/FormUI';
import { useRecipeDirections } from '@hooks/useRecipeDirections';
import { useRecipeIngredients } from '@hooks/useRecipeIngredients';
import {
  handleTypesChange,
  handleIngredientsChange,
  handleNutritionChange,
  handleDirectionsChange,
  handleGenericChange,
} from '@utils/form-handlers';

export default function RecipeForm() {
  const highlightColor = "#f9a947";
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // use states to keep track of user input
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    types: [],
    time: '',
    vegetarian: false,
    vegan: false,
    ingredients: [],
    nutrition: {},
    directions: []
  });

  const [
    directions, 
    handleDirectionChange, 
    handleAddDirection, 
    handleRemoveDirection, 
    setDirections
  ] = useRecipeDirections(newRecipe.directions);

  const [
    ingredients,
    handleIngredientChange,
    handleAddIngredient,
    handleRemoveIngredient,
    setIngredients
  ] = useRecipeIngredients(newRecipe.ingredients);
    
  useEffect(() => {
    const storedData = localStorage.getItem('recipeFormData');
    if (storedData) {
      const storedRecipe = JSON.parse(storedData);
      setNewRecipe(prevState => ({
        ...prevState,
        nutrition: {
          ...prevState.nutrition,
          ...storedRecipe.nutrition,
        },
        ingredients: storedRecipe.ingredients,
        directions: storedRecipe.directions,
      }));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('recipeFormData', JSON.stringify(newRecipe));
  }, [newRecipe]);
  
  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;
  
    if (name === 'types') {
      handleTypesChange(setNewRecipe, value, checked);
    } else if (name.startsWith('nutrition.')) {
      handleNutritionChange(setNewRecipe, name, value);
    } else if (name.startsWith('ingredients')) {
      handleIngredientsChange(setNewRecipe);
    } else if (name.startsWith('directions')) {
      handleDirectionsChange(index, event);
      setNewRecipe((prevState) => {
        const updatedDirections = [...prevState.directions];
        updatedDirections[index] = value;
        return { ...prevState, directions: updatedDirections };
      });
    } else {
      handleGenericChange(setNewRecipe, name, type, checked, value);
    }
  }; 

  const handleEnterKey = (event) => {
    const { name, key, shiftKey, target } = event;
    if (name === 'directions' && key === 'Enter' && !shiftKey) {
      const trimmedValue = target.value.trim();
      if (trimmedValue !== '') {
        event.preventDefault();
        setDirections((prevDirections) => [...prevDirections, trimmedValue, '']);
        target.value = '';
      }
    } else if (key === 'Backspace' && target.value === '') {
      event.preventDefault();
      const currentIndex = parseInt(target.dataset.index);
      const previousInput = findPreviousNonEmptyInput(currentIndex);
      if (previousInput) {
        previousInput.focus();
      }
    } else {
      setKey(key);
    }
  };

  const handleClearDirections = () => {
    setDirections([]);
  }; 

  const handleDragEnd = (result) => {
    if (!result.destination) return;
  
    const newDirections = [...directions];
    const [removed] = newDirections.splice(result.source.index, 1);
    newDirections.splice(result.destination.index, 0, removed);
  
    setDirections(newDirections);
  };
  
  // submit recipe form
  const handleSubmit = async () => {
    // Perform client-side form validation
    if (!newRecipe.name || !newRecipe.time || ingredients.length === 0 || directions.length === 0) {
      setError('Please fill out all required fields.');
      return;
    }
  
    const cleanedRecipe = {
      ...newRecipe,
      nutrition: newRecipe.nutrition,
      ingredients: ingredients,
    };
  
    cleanedRecipe._id = uuidv4();
  
    try {
      setLoading(true);
  
      const res = await fetch('/api/submit-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedRecipe),
      });
  
      if (res.ok) {
        const data = await res.json();
        setSuccess(true);
        localStorage.removeItem('recipeFormData');
        setNewRecipe({
          name: '',
          types: [],
          time: '',
          vegetarian: false,
          vegan: false,
          ingredients: [],
          nutrition: {},
          directions: [],
        });
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error(error);
      setError('Error saving recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };  
  
  return (
    <div>
      <div className="max-w-6xl mx-auto h-36 md:h-40 bg-white dark:bg-gray-800 px-8 md:px-4 py-4 mb-4 md:mb-0">
        <div className="w-full text-center">
          <div className="w-fit mt-2">
            <RoughNotationGroup show={true}>
              <Highlighter color={highlightColor}>
                <h1 className={`results-title text-[1.7rem] md:text-[4rem] font-bold text-gray-900 dark:text-gray-100
                  py-1 px-2 break-words text-center`}
                >
                  Submit Your Recipe
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>
      </div>

      <FormUI 
        newRecipe={newRecipe}
        directions={directions}
        ingredients={ingredients}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEnterKey={handleEnterKey}
        handleClearDirections={handleClearDirections}
        handleDirectionChange={handleDirectionChange}
        handleIngredientChange={handleIngredientChange}
        handleAddDirection={handleAddDirection}
        handleRemoveDirection={handleRemoveDirection}
        handleAddIngredient={handleAddIngredient}
        handleRemoveIngredient={handleRemoveIngredient}
        handleDragEnd={handleDragEnd}
        key={key}
        loading={loading}
        success={success}
        error={error}
      />
    </div>
  )
};
