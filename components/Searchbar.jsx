import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { RecipesContext } from '../data/recipeDb';
import { EggYolk } from './Animations';

// The Searchbar component allows a user to search the sleepy chef API for recipes by type, ingredient, or name.
// Uses the `useRouter` hook to navigate to the results page with the appropriate query parameters in the URL.
// The `handleSubmit` function checks whether the search input matches a recipe type, ingredient, or name,
// then if the search input is valid, the `setError` function is called to clear any error message
// Finally, the `router.push` function is used to navigate to the search results page
// and reset the page URL based on which query parameters passed the checks

export const Searchbar = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isEggCracked, setIsEggCracked] = useState(false);

  const recipes = useContext(RecipesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // create an array of all recipe types, ingredients, names
    const recipeTypes = recipes.reduce((acc, recipe) => acc.concat(recipe.type.toLowerCase()), []);
    const recipeIngredients = recipes.reduce((acc, recipe) => acc.concat(recipe.ingredients.map(ingredient => ingredient.toLowerCase())), []);
    const recipeNames = recipes.map(recipe => recipe.name.toLowerCase());

    // check if the search input matches a recipe type, ingredient, or name (case-insensitive)
    const type = recipeTypes.some(recipeType => recipeType.toLowerCase().includes(query.toLowerCase())) ? query : null;
    const ingredient = recipeIngredients.some(recipeIngredient => recipeIngredient.toLowerCase().includes(query.toLowerCase())) && !type ? query : null;
    const name = recipeNames.some(recipeName => recipeName.toLowerCase().includes(query.toLowerCase())) && !type && !ingredient ? query : null;

    if (!query) {
      setError('✏️');
      return;
    }

    if (!type && !ingredient && !name) {
      setError('🤔');
      return;
    }

    setError('');
    setIsEggCracked(true);

    setTimeout(() => {
      router.push({
        pathname: '/results',
        query: { type, ingredient, name },
      });
    }, 1400);
  };

  // clear error to allow search form resubmission
  const handleInputFocus = () => {
    setError('');
  };

  return (
    <div className="w-full pt-20 -mt-6 md:-mt-4 pb-60 md:pb-40">
      <AnimatePresence>
        {isEggCracked ? (
          <motion.div
            className="motion-container flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0 }}
          >
            <EggYolk />
          </motion.div>
        ) : (
          <div className="input-group relative flex flex-nowrap justify-center min-w-0 mb-4 rounded px-4 md:px-0">
            <motion.form
              className="flex"
              onSubmit={handleSubmit}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <input
                className="form-control relative flex-auto min-w-0 w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 border-solid rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  
                type="text"
                aria-label="Search" 
                aria-describedby="form-control"
                id="query"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={handleInputFocus}
              />
              <button 
                type="submit" 
                className="search-main relative px-4 py-1 ml-4 border-2 border-blue-400 text-blue-400 md:font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                aria-label="Submit search"
                aria-controls="submit-search"
                aria-describedby="search-main"
                role="button"
                tabIndex="0"
              >
                <span className="input-group-text flex flex items-center md:px-3.5 py-1 cursor-pointer text-base font-normal text-gray-600 dark:text-gray-200 text-center whitespace-nowrap rounded" id="search-icon">
                  <svg className="w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </span>
              </button>
              {error && (
                <span
                  className="error absolute z-10 self-center right-[4rem] md:right-12 px-8 md:px-0"
                >
                  {error}
                </span>
              )}
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
};
