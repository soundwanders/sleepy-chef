import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormUIMock } from '../__mocks__/FormUIMock';
import { SuccessPage } from '@components/form/SuccessPage';
import { useRecipeDirections } from '@hooks/useRecipeDirections';
import { useRecipeIngredients } from '@hooks/useRecipeIngredients';
import {
  handleTypesChange,
  handleIngredientsChange,
  handleNutritionChange,
  handleDirectionsChange,
  handleGenericChange,
} from '@utils/form-handlers';

export default function RecipeFormMock() {
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  
  // use states to keep track of user input
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    types: [],
    time: '',
    vegetarian: false,
    vegan: false,
    ingredients: [],
    nutrition: {},
    directions: [],
  });

  const [
    directions,
    handleDirectionChange,
    handleAddDirection,
    handleRemoveDirection,
    setDirections,
  ] = useRecipeDirections(newRecipe.directions);

  const [
    ingredients,
    handleIngredientChange,
    handleAddIngredient,
    handleRemoveIngredient,
    setIngredients,
  ] = useRecipeIngredients(newRecipe.ingredients);

  // Store form data in local storage
  useEffect(() => {
    const storedData = localStorage.getItem('recipeFormData');
    if (storedData) {
      const storedRecipe = JSON.parse(storedData);
      setNewRecipe((prevState) => ({
        ...prevState,
        nutrition: {
          ...prevState.nutrition,
          ...storedRecipe.nutrition,
        },
        ingredients: storedRecipe.ingredients,
        directions: storedRecipe.directions,
      }));
    }
  }, [setNewRecipe]);

  useEffect(() => {
    localStorage.setItem('recipeFormData', JSON.stringify(newRecipe));
  }, [newRecipe]);

  // Handle input changes using our form handler functions
  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;

    if (name === 'types') {
      handleTypesChange(setNewRecipe, value, checked);
    } else if (name.startsWith('nutrition.')) {
      handleNutritionChange(setNewRecipe, name, value);
    } else if (name.startsWith('ingredients')) {
      handleIngredientsChange(setNewRecipe, index);
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

  // Clear all entered recipe directions
  const handleClearDirections = () => {
    setDirections([]);
  }; 

  // Drag and drop recipe direction input fields
  const handleDragEnd = (result) => {
    if (!result.destination) return;
  
    const newDirections = [...directions];
    const [removed] = newDirections.splice(result.source.index, 1);
    newDirections.splice(result.destination.index, 0, removed);
    setDirections(newDirections);
  };

  const handleDirectionKeys = (event) => {
    const { name, key, shiftKey, target } = event;
    if (name === 'directions' && key === 'Enter' && !shiftKey) {
      const trimmedValue = target.value.trim();
      if (trimmedValue !== '') {
        event.preventDefault();
        setDirections((prevDirections) => [...prevDirections, trimmedValue, '']);
        target.value = '';
      }
    } else if (key === 'Backspace') {
      // prevent line deletion on Backspace in an empty input field
      event.preventDefault();
    } else {
      setKey(key);
    }
  };
  
  // HCaptcha verification
  const onVerifyCaptcha = (token, ekey) => {
    let dummyToken = 'mock-hcaptcha-token';
    dummyToken = token;
    setCaptchaVerified(true);
  };

  // Reset state if hCaptcha expires
  const handleCaptchaExpire = () => {
    setCaptchaVerified(false);
    console.log("Oops! Captcha has expired. Please complete it again before submitting your recipe.");
  };

  // SUBMIT FORM FUNCTION handles recipe form submission
  const submitForm = async () => {
    const endpoint = '/api/submit-recipe';

    setLoading(true);

    // Client-side form validation
    const validationErrors = {};

    if (!newRecipe.name) {
      validationErrors.name = 'Please enter the recipe name';
    }

    const recipeTime = parseInt(newRecipe.time);

    if (!recipeTime) {
      validationErrors.time = 'Please enter the recipe time';
    }
  
    if (ingredients.length === 0) {
      validationErrors.ingredients = 'Please add at least one ingredient';
    }

    // Add nullish coalescing operator to provide a default empty object for nutrition
    if (!newRecipe.nutrition ?? Object.keys(newRecipe.nutrition).length === 0) {
      validationErrors.nutrition = `Please fill out all nutritional info. If you don't know, please enter 'unknown'`;
    }

    if (directions.length === 0) {
      validationErrors.directions = 'Please add at least one line of directions';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const cleanedRecipe = {
      ...newRecipe,
      nutrition: newRecipe.nutrition,
      ingredients: ingredients,
    };

    // Generate userId and recipe id using uuid
    cleanedRecipe.userId = uuidv4();
    cleanedRecipe._id = uuidv4();

    const recipeData = JSON.stringify(cleanedRecipe);

    const hCaptchaToken = '10000000-aaaa-bbbb-cccc-000000000001';
    const token = hCaptchaToken;

    const reqBody = {
      recipeData,
      token,
      userId: cleanedRecipe.userId,
    };

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      };
      
      const res = await fetch(endpoint, options);

      console.log('client response:', res);

      if (res.ok) {
        const data = await res.json();
        localStorage.removeItem('recipeFormData');
        setSuccess(true);

        setNewRecipe({
          name: '',
          types: [],
          time: '',
          vegetarian: false,
          vegan: false,
          ingredients: [],
          nutrition: {},
          directions: [],
        })
      } else {
        const errorData = await res.json();
        setErrors({ submit: errorData.error });
      }
    } catch (error) {
      console.error(error);
      setErrors({ submit: 'Error saving recipe. Please try again.' });
    }
  
    setLoading(false);
  };

  // Handle form submission
  // preventDefault prevents page refresh after a failed submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaVerified) {
      submitForm();
    } else {
      console.log('Oops! Please complete the reCAPTCHA before submitting your recipe.');
    }
  };
  
  // Reset success state after successful submission
  // clears form fields and prevents user from getting stuck on Success page
  const resetForm = () => {
    setSuccess(false);
    setNewRecipe({
      name: '',
      types: [],
      time: '',
      vegetarian: false,
      vegan: false,
      ingredients: [],
      nutrition: {},
      directions: [],
    })
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto h-36 md:h-40 bg-white dark:bg-gray-800 px-8 md:px-4 py-4 mb-4 md:mb-0">
        <div className="w-full text-center">
          <h1 className={`results-title text-[1.7rem] md:text-[4rem] font-bold text-gray-900 dark:text-gray-100
            py-1 px-2 break-words text-center`}
          >
            Submit Your Recipe
          </h1>
        </div>
      </div>
  
      {success ? (
        <SuccessPage resetForm={resetForm} />
      ) : (
        <FormUIMock
          newRecipe={newRecipe}
          directions={directions}
          ingredients={ingredients}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDirectionKeys={handleDirectionKeys}
          handleClearDirections={handleClearDirections}
          handleDirectionChange={handleDirectionChange}
          handleIngredientChange={handleIngredientChange}
          handleAddDirection={handleAddDirection}
          handleRemoveDirection={handleRemoveDirection}
          handleAddIngredient={handleAddIngredient}
          handleRemoveIngredient={handleRemoveIngredient}
          handleDragEnd={handleDragEnd}
          handleCaptchaExpire={handleCaptchaExpire}
          onVerifyCaptcha={onVerifyCaptcha}
          captchaVerified={captchaVerified}
          errors={errors}
          loading={loading}
        />
      )}
    </div>
  )  
};
