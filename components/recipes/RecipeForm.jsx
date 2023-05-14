import React, { useState } from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/ui/Highlighter';
import { FormUI } from '@components/ui/FormUI';
import { useRecipeDirections } from '@hooks/useRecipeDirections';


export default function RecipeForm() {
  const highlightColor = "#f9a947";
  const [key, setKey] = useState('');

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

  // handle change for form field inputs
  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    const { key } = event;
  
    if (name === 'types') {
      const selectedType = value;
      const newTypes = checked
        ? [...recipe.types, selectedType]
        : recipe.types.filter((type) => type !== selectedType);
      setRecipe((prevState) => ({ ...prevState, types: newTypes }));
    } else if (name === 'ingredients') {
      const ingredients = value.split(',').map((str) => str.trim());
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
    } else if (name === 'directions' && key === 'Enter') {
      setRecipe((prevState) => ({
        ...prevState,
        directions: [...prevState.directions, ''],
      }));
    } else {
      const newValue = type === 'checkbox' ? checked : value;
      setRecipe((prevState) => ({ ...prevState, [name]: newValue }));
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

  // clear all directions and start over
  const handleClearDirections = () => {
    setRecipe(prevState => ({
      ...prevState,
      directions: []
    }));
  };  

  // handler to drag/reorder list of directions
  const handleDragEnd = (result) => {
    if (!result.destination) return;
  
    const newDirections = [...props.directions];
    const [removed] = newDirections.splice(result.source.index, 1);
    newDirections.splice(result.destination.index, 0, removed);
  
    props.setDirections(newDirections);
  };

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });
      
      // select our MongoDB `recipes` collection
      const recipesCollection = client.db().collection('recipes');

      // insert the recipe data into the collection
      const result = await recipesCollection.insertOne(recipe);
  
      if (result.insertedCount === 1) {
        alert('Recipe saved successfully!');
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
        alert('Error saving recipe');
      }

      // close the MongoDB connection
      client.close();
    } catch (err) {
      console.log(err);
      alert('Error saving recipe.');
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
                  Submit Your Favorite Recipe
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>
      </div>

      <FormUI 
        recipe={recipe}
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
