import { useState } from 'react';

export default function RecipeForm() {
  // use state to keep track of user input
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

  // handle form field changes
  const handleChange = (event) => {
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
    } else {
      const newValue = type === 'checkbox' ? checked : value;
      setRecipe(prevState => ({ ...prevState, [name]: newValue }));
    }
  };
  
  // handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle the form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Recipe Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <option value="chicken">Chicken</option>
          <option value="beef">Beef</option>
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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="calories"
            name="calories"
            type="text"
            placeholder="Enter calories"
            value={recipe.nutrition.calories}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="fat">
            Fat
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fat"
            name="fat"
            type="text"
            placeholder="Enter fat in grams"
            value={recipe.nutrition.fat}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cholesterol">
            Cholesterol
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cholesterol"
            name="cholesterol"
            placeholder="Enter cholesterol"
            value={recipe.nutrition.cholesterol}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  </form>
)};