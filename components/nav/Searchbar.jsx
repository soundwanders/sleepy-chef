import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { RecipesContext } from '@data/recipeDb';
import { EggYolk } from '@components/ui/Animations';

// The Searchbar component allows user to search the sleepy chef API for recipes by type, ingredient, or name
// The `handleSubmit` function checks whether the search input matches a recipe type, ingredient, or name,
// then if the search input is valid, `setError` is called with an empty string to clear the error message
// Finally, `router.push` navigates to the results page and resets the URL based on which query params passed the checks

export const Searchbar = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [showYolk, setShowYolk] = useState(false);

  const recipes = useContext(RecipesContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create an array of all recipe types, ingredients, names
    const recipeTypes = recipes.reduce((acc, recipe) => acc.concat(recipe.types.map(type => type.toLowerCase())), []);
    const recipeIngredients = recipes.reduce((acc, recipe) => acc.concat(recipe.ingredients.map(ingredient => ingredient.toLowerCase())), []);
    const recipeNames = recipes.map(recipe => recipe.name.toLowerCase());

    // check if the search input matches a recipe type, ingredient, or name (case-insensitive)
    const type = recipeTypes.some(recipeType => recipeType.includes(query.toLowerCase())) ? query : null;
    const ingredient = recipeIngredients.some(recipeIngredient => recipeIngredient.includes(query.toLowerCase())) && !type ? query : null;
    const name = recipeNames.some(recipeName => recipeName.includes(query.toLowerCase())) && !type && !ingredient ? query : null;

    if (!query) {
      setError('✏️');
      return;
    }
    
    if (query.length < 2) {
      setError('🤔');
      return;
    }

    if (!type && !ingredient && !name) {
      setError('🤔');
      return;
    }

    try {
      const response = await fetch(`/api/recipes?query=${query}`);
      const data = await response.json();

      if (response.ok) {
        // If the response is successful, proceed with navigation
        setError('');
        setShowYolk(true);

        setTimeout(() => {
          router.push({
            pathname: '/results',
            query: { type, ingredient, name },
          });
        }, 300);
      } else {
        // If the response contains an error, set the error state accordingly
        setError(data.error);
      }
    } catch (error) {
      // If there's an error with the fetch or parsing the response, handle it here
      setError('An error occurred while fetching data.');
    }
  };

  // clear error to allow search form resubmission
  const handleInputFocus = () => {
    setError('');
  };
 
  return (
    <div className="w-full pt-20 -mt-12 pb-56 md:pb-40">
      <AnimatePresence>
        <div className="parent-container relative">
          <div className="input-group relative flex flex-nowrap justify-center min-w-0 mb-4 rounded px-10 md:px-0">
            <motion.form
              className="flex"
              onSubmit={handleSubmit}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <input
                className={`form-control relative flex-initial min-w-0 w-full max-w-[304px] max-h-[42px] text-base 
                font-normal text-gray-700 bg-white bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 
                focus:outline-none border border-gray-300 border-solid rounded-lg transition ease-in-out m-0 px-3 py-2
                ${error ? 'error-border' : ''}`} 
                type="text"
                aria-label="Search" 
                id="query"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={handleInputFocus}
              />

              {showYolk ? (
                <motion.div
                  className="relative rounded-full px-3 ml-2 md:ml-4 -mr-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                >
                  <EggYolk />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button 
                    type="submit"
                    className="search-main relative border-2 border-blue-400 text-blue-400 md:font-medium text-xs 
                      leading-tight uppercase rounded-full px-3 py-1 ml-4 -mr-4"
                    aria-label="Submit search"
                    aria-controls="submit-search"
                    aria-describedby="main-search-submit"
                    role="button"
                    tabIndex="0"
                  >
                    <span id="search-icon" className="input-group-text flex flex items-center rounded cursor-pointer 
                      text-base font-normal text-gray-600 dark:text-gray-200 text-center whitespace-nowrap md:px-3.5 py-1"
                    >
                      <svg className="w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                      <span className="sr-only">Search</span>
                    </span>
                  </button>

                  <span id="main-search-submit" className="sr-only" aria-label="Submit search">
                    Submit search
                  </span>
                  {error && (
                    <span
                      className="error absolute z-10 self-center right-[4rem] md:right-12 px-8 md:px-0 mt-2 md:mt-0"
                      role="img"
                      aria-label="Search submission error"
                    >
                      {error}
                    </span>
                  )}
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </AnimatePresence>
    </div>
  )
};
