import { useState } from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/ui/Highlighter';

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

  // handle form input fields change
  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;
  
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
      // we also allow user to add a new line of directions using Enter key (key 13)
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

  // add a new line of recipe instructions
  const handleAddDirection = () => {
    setRecipe(prevState => ({
      ...prevState,
      directions: [...prevState.directions, '']
    }));
  };
  
  // remove most recently submitted line of recipe instructions
  const handleRemoveDirection = (indexToRemove) => {
    setRecipe(prevState => ({
      ...prevState,
      directions: prevState.directions.filter((_, index) => index !== indexToRemove)
    }));
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

        <div className="flex-1 items-center justify-start px-8 md:px-4 mb-6 -mt-4 md:mt-6 py-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Recipe Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                id="name"
                name="name"
                type="text"
                placeholder="Enter recipe name"
                value={recipe.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="types">
                Recipe Types
              </label>

              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="types"
                name="types"
                multiple
                value={recipe.types}
                onChange={handleChange}
              >
                <option value="">Select a Type</option>
                <option value="beef">Beef</option>
                <option value="chicken">Chicken</option>
                <option value="pork">Pork</option>
                <option value="salad">Salad</option>
                <option value="seafood">Seafood</option>
                <option value="soup">Soup</option>
                <option value="texmex">TexMex</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
              </select>
            </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
              Total Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              name="time"
              type="text"
              placeholder="Enter total time"
              value={recipe.time}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="vegetarian">
              Vegetarian
            </label>
            <input
              className="mr-2 leading-tight"
              id="vegetarian"
              name="vegetarian"
              type="checkbox"
              checked={recipe.vegetarian}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="vegan">
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
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">
              Ingredients
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
              id="ingredients"
              name="ingredients"
              placeholder="Enter ingredients, separated by commas"
              value={recipe.ingredients}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nutrition">
              Nutrition Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="calories">
                  Calories
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="calories"
                  name="calories"
                  type="text"
                  placeholder="Enter calories"
                  value={recipe.nutrition.calories}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="carbs">
                  Carbs
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="carbs"
                  name="carbs"
                  placeholder="Enter carbs"
                  value={recipe.nutrition.carbs}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="cholesterol">
                  Cholesterol
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="cholesterol"
                  name="cholesterol"
                  placeholder="Enter cholesterol (milligrams)"
                  value={recipe.nutrition.cholesterol}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="fat">
                  Fat
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="fat"
                  name="fat"
                  type="text"
                  placeholder="Enter fat (grams)"
                  value={recipe.nutrition.fat}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="protein">
                  Protein
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="protein"
                  name="protein"
                  placeholder="Enter protein (grams)"
                  value={recipe.nutrition.protein}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="sodium">
                  Sodium
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
                  id="sodium"
                  name="sodium"
                  placeholder="Enter sodium (milligrams)"
                  value={recipe.nutrition.sodium}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-full mr-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="directions">
                Directions
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent h-48 resize-none"
                id="directions"
                name="directions"
                placeholder="Add recipe directions, line by line"
                value={recipe.directions.join('\n')}
                onChange={handleChange}
                style={{ height: `${(recipe.directions.length + 1) * 25}px` }}
              ></textarea>
              {recipe.directions.length > 0 &&
                <div className="flex justify-end">
                  <button onClick={handleAddDirection} className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                      <path d="M10 14a1 1 0 100-2 1 1 0 000 2z" />
                      <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Add Direction
                  </button>
                </div>
              }
            </div>
            <ul>
              {recipe.directions.map((direction, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder={`Direction ${index + 1}`}
                      value={direction}
                      onChange={(event) => handleDirectionChange(index, event)}
                      className="w-full mr-2 rounded border py-1 px-2"
                    />
                  </div>
                  {index === recipe.directions.length - 1 &&
                    <div className="flex">
                      <button onClick={() => handleRemoveDirection(index)} className="inline-flex items-center">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M13.414 6.414a2 2 0 000-2.828L12.828 2.586a2 2 0 00-2.828 0L8.586 3.172a2 2 0 000 2.828L9.172 7l-2.414 2.414a2 2 0 000 2.828l.586.586a2 2 0 002.828 0L11 10.828l2.414 2.414a2 2 0 002.828 0l.586-.586a2 2 0 000-2.828L13.414 9l2.414-2.414a2 2 0 000-2.828l-.586-.586z" clipRule="evenodd" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  }
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
};
