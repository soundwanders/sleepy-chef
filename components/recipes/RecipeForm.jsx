import React, { useState } from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/ui/Highlighter';
import { AddLine } from '@components/ui/Icons';
import { RemoveLine } from '@components/ui/Icons';
import { useRecipeDirections } from '@hooks/useRecipeDirections';

export default function RecipeForm() {
  const highlightColor = "#60a5fa";

  // use states to keep track of user input
  const [recipe, setRecipe] = useState({
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
  ] = useRecipeDirections(recipe.directions)

  // handle form input fields change
  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    const { key } = event;

    if (name === 'types') {
      const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
      setRecipe(prevState => ({ ...prevState, types: selectedOptions }));
    } else if (name === 'ingredients') {
      const ingredients = value.split(',').map(str => str.trim());
      setRecipe(prevState => ({ ...prevState, ingredients }));
    } else if (name.startsWith('nutrition.')) {
      const propertyName = name.slice('nutrition.'.length);
      setRecipe(prevState => ({ 
        ...prevState, 
        nutrition: {
          ...prevState.nutrition,
          [propertyName]: value
        } 
      }));
    } else if (name === 'directions' && key === 'Enter') {
      setRecipe(prevState => ({
        ...prevState,
        directions: [...prevState.directions, '']
      }));
    } else {
      const newValue = type === 'checkbox' ? checked : value;
      setRecipe(prevState => ({ ...prevState, [name]: newValue }));
    }
  };

  // add event listener for 'Enter' keydown event, store the key in state when it's pressed
  const handleKeyDown = (event) => {
    const { name, key } = event;
    if (name === 'directions' && key === 'Enter') {
      event.preventDefault();
    } else {
      setKey(key);
    }
  };
  
  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle the form submission here
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
                    Submit Your Favorite Recipe
                  </h1>
                </Highlighter>
              </RoughNotationGroup>
            </div>
          </div>
        </div>

        <div className="flex-1 items-center justify-start px-8 md:px-4 mb-6 -mt-4 md:mt-6 py-2 pb-20">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="name">
                Recipe Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="name"
                name="name"
                type="text"
                placeholder="Enter recipe name"
                value={recipe.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="types">
                Recipe Types
              </label>

              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                id="types"
                name="types"
                multiple
                value={recipe.types}
                onChange={handleChange}
              >
                <option value="">Select a Type</option>
                <option value="beef" selected={recipe.types.includes("beef")}>Beef</option>
                <option value="chicken" selected={recipe.types.includes("chicken")}>Chicken</option>
                <option value="pork" selected={recipe.types.includes("pork")}>Pork</option>
                <option value="salad" selected={recipe.types.includes("salad")}>Salad</option>
                <option value="seafood" selected={recipe.types.includes("seafood")}>Seafood</option>
                <option value="soup" selected={recipe.types.includes("soup")}>Soup</option>
                <option value="texmex" selected={recipe.types.includes("texmex")}>TexMex</option>
                <option value="vegan" selected={recipe.types.includes("vegan")}>Vegan</option>
              </select>
            </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="time">
              Total Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              name="time"
              type="text"
              placeholder="Enter total time"
              value={recipe.time}
              onChange={handleChange}
            />
          </div>

          <div className="flex mb-4">
            <div className="mr-8">
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="vegetarian">
                Vegetarian
              </label>
              <input
                className="ml-1 mr-2 leading-tight"
                id="vegetarian"
                name="vegetarian"
                type="checkbox"
                checked={recipe.vegetarian}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="vegan">
                Vegan
              </label>
              <input
                className="mr-2 leading-tight"
                id="vegan"
                name="vegan"
                type="checkbox"
                checked={recipe.vegan}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="ingredients">
              Ingredients
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
              id="ingredients"
              name="ingredients"
              placeholder="Enter ingredients, separated by commas"
              value={recipe.ingredients}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="nutrition">
              Nutrition Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="calories">
                  Calories
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="calories"
                  name="calories"
                  type="text"
                  placeholder="Enter calories"
                  value={recipe.nutrition.calories}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="carbs">
                  Carbs
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="carbs"
                  name="carbs"
                  placeholder="Enter carbs"
                  value={recipe.nutrition.carbs}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="cholesterol">
                  Cholesterol
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="cholesterol"
                  name="cholesterol"
                  placeholder="Enter cholesterol (milligrams)"
                  value={recipe.nutrition.cholesterol}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="fat">
                  Fat
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="fat"
                  name="fat"
                  type="text"
                  placeholder="Enter fat (grams)"
                  value={recipe.nutrition.fat}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="protein">
                  Protein
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="protein"
                  name="protein"
                  placeholder="Enter protein (grams)"
                  value={recipe.nutrition.protein}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="sodium">
                  Sodium
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="sodium"
                  name="sodium"
                  placeholder="Enter sodium (milligrams)"
                  value={recipe.nutrition.sodium}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="directions">
              Directions
            </label>
            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent">
              {directions.map((direction, index) => (
                <div key={`direction-${index}`} className="flex mb-2">
                  <div className="w-10">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-slate-900 text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 ml-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                      type="text"
                      name={`directions-${index}`}
                      value={direction}
                      onChange={(event) => handleDirectionChange(index, event)}
                      onKeyDown={handleKeyDown}
                      placeholder="Add a step"
                    />
                  </div>
                  <div className="w-10 ml-2 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 hover:bg-red-200 text-red-500 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      onClick={() => handleRemoveDirection(index)}
                    >
                      <span className="sr-only">Remove Line</span>
                      <RemoveLine />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex items-center mt-2 ml-10 p-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleAddDirection}
                >
                  <span class="sr-only">New Line</span>
                  <AddLine />
                </button>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
};
