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
      handleDirectionsChange(setNewRecipe);
    } else {
      handleGenericChange(setNewRecipe, name, type, checked, value);
    }
  }; 

  // add event listener to store key in state when 'Enter' is pressed
  // allows user to submit a new line of directions and move to a new line
  const handleEnterKey = (event) => {
    const { name, key, shiftKey, target } = event;
    if (name === 'directions' && key === 'Enter' && !shiftKey) {
      const trimmedValue = target.value.trim();
      
      // add a check to disallow empty lines of directions from being submitted
      if (trimmedValue !== '') {
        event.preventDefault();
        setNewRecipe((prevState) => ({
          ...prevState,
          directions: [...prevState.directions, trimmedValue, ''],
        }));
        target.value = '';
      }
    } else {
      setKey(key);
    }
  };  

  // clear all directions and start over
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
  
  // handle recipe form submission
  const handleSubmit = async () => {
    try {
      // Create a new object without circular references
      const cleanedRecipe = {
        ...newRecipe,
        nutrition: newRecipe.nutrition,
        ingredients: ingredients,
      };

      // Assign a unique ID to the new recipe
      cleanedRecipe._id = uuidv4();

      console.log('cleanedRecipe', cleanedRecipe);
      console.log('cleanedRecipe JSON', JSON.stringify(cleanedRecipe));

      const res = await fetch('/api/submit-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedRecipe),
      });

      if (res.ok) {
        const data = await res.json();
        alert('Recipe saved successfully!');
        localStorage.removeItem('recipeFormData');

        // reset recipe state after successful submission to prevent stale data
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
      alert(`Error saving recipe: ${error.message}`);
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
      />
    </div>
  )
};
