import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/ui/Highlighter';
import { FormUI } from '@components/ui/FormUI';
import { useRecipeDirections } from '@hooks/useRecipeDirections';

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
    const { key } = event;
  
    if (name === 'types') {
      const selectedType = value;
      const newTypes = checked
        ? [...newRecipe.types, selectedType]
        : newRecipe.types.filter((type) => type !== selectedType);
      setRecipe((prevState) => ({ ...prevState, types: newTypes }));
    } else if (name === 'ingredients') {
      const ingredients = value
        .split('\n')
        .map((line) => {
          const parts = line.trim().split(/\s+/); // Split each line by whitespace
          const quantity = parts.shift(); // Extract the quantity (first element)
          const ingredient = parts.join(' '); // Rejoin the remaining parts as the full ingredient name
          return { quantity, ingredient };
        });
      setRecipe((prevState) => ({ ...prevState, ingredients }));
    } else if (name.startsWith('nutrition.')) {
      const propertyName = name.slice('nutrition.'.length);
      setRecipe((prevState) => ({
        ...prevState,
        nutrition: {
          ...prevState.nutrition,
          [propertyName]: value,
        },
      }));
    } else if (name === 'directions') {
      setRecipe((prevState) => ({
        ...prevState,
        directions: [...prevState.directions, ''],
      }));
    } else {
      const newValue = type === 'checkbox' ? checked : value;
      setRecipe((prevState) => ({ ...prevState, [name]: newValue }));
    }
  }; 

  // add event listener to store key in state when 'Enter' is pressed
  // allows user to submit a new line of directions and move to a new line
  const handleKeyDown = (event) => {
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
        nutrition: JSON.parse(JSON.stringify(newRecipe.nutrition)),
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
        handleKeyDown={handleKeyDown}
        handleClearDirections={handleClearDirections}
        handleDirectionChange={handleDirectionChange}
        handleAddDirection={handleAddDirection}
        handleRemoveDirection={handleRemoveDirection}
        handleDragEnd={handleDragEnd}
      />
    </div>
  )
};
