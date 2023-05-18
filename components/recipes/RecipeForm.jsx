import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/ui/Highlighter';
import { FormUI } from '@components/ui/FormUI';
import { useRecipeDirections } from '@hooks/useRecipeDirections';
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
  const [newRecipe, setRecipe] = useState({
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
    handleRemoveDirection
  ] = useRecipeDirections(newRecipe.directions)

  useEffect(() => {
    const storedData = localStorage.getItem('recipeFormData');
    if (storedData) {
      const storedRecipe = JSON.parse(storedData);
      setRecipe(prevState => ({
        ...prevState,
        nutrition: {
          ...prevState.nutrition,
          ...storedRecipe.nutrition,
        },
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
      handleTypesChange(setRecipe, value, checked);
    } else if (name === 'ingredients') {
      handleIngredientsChange(setRecipe, value);
    } else if (name.startsWith('nutrition.')) {
      handleNutritionChange(setRecipe, name, value);
    } else if (name === 'directions') {
      handleDirectionsChange(setRecipe);
    } else {
      handleGenericChange(setRecipe, name, type, checked, value);
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
        setRecipe((prevState) => ({
          ...prevState,
          directions: [...prevState.directions, trimmedValue, ''],
        }));
        target.value = '';
      }
    } else {
      setKey(key);
    }
  };  

  // allow users to use commas to separate items in their recipe ingredients list
  const handleCommaKey = (event) => {
    if (event.key === ',') {
      event.preventDefault();
      const textarea = event.target;
      const { selectionStart, value } = textarea;
  
      // Insert a comma at the current caret position
      const newValue = value.slice(0, selectionStart) + ', ' + value.slice(selectionStart);
  
      // Update the textarea value and caret position
      textarea.value = newValue;
      textarea.setSelectionRange(selectionStart + 2, selectionStart + 2);
  
      // Trigger the form change handler with the updated value
      handleChange({ target: { name: 'ingredients', value: newValue } });
    }
  };  
  
  // clear all directions and start over
  const handleClearDirections = () => {
    setRecipe(prevState => ({
      ...prevState,
      directions: []
    }));
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
      };
  
      // Assign a unique ID to the new recipe
      cleanedRecipe._id = uuidv4();

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
        setRecipe({
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
        throw new Error('Error saving recipe');
      }
    } catch (error) {
      console.error(error);
      alert('Error saving recipe');
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
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEnterKey={handleEnterKey}
        handleCommaKey={handleCommaKey}
        handleClearDirections={handleClearDirections}
        handleDirectionChange={handleDirectionChange}
        handleAddDirection={handleAddDirection}
        handleRemoveDirection={handleRemoveDirection}
        handleDragEnd={handleDragEnd}
      />
    </div>
  )
};
