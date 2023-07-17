import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/ui/Highlighter';
import RecipeCards from '@components/recipes/RecipeCards';
import appData from '@constants/appData';

export const SearchResults = ({ recipeColors, defaultColor }) => {
  const highlightColor = "#60a5fa";
  const [sortBy, setSortBy] = useState("default");
  const router = useRouter();
  const { query } = router;
  const { type, ingredient, name } = query;

  const queryColors = [
    "text-orange-250",
    "text-orange-300",
    "text-violet-400",
    "text-rose-300",
    "text-green-400",
    "text-blue-400",
    "text-red-400",
    "text-emerald-400"
  ];
  
  const setQueryColor = () => {
    const randomIndex = Math.floor(Math.random() * queryColors.length);
    return queryColors[randomIndex];
  }; 
  
  const queryColor = setQueryColor();
  
  let searchQuery = '';
  
  if (type) {
    searchQuery = type;
  } else if (ingredient) {
    searchQuery = ingredient;
  } else if (name) {
    searchQuery = name;
  };

  let queryParams = [];
  let endpoint;

  if (type) {
    queryParams.push(`type=${encodeURIComponent(type)}`);
  }
  if (ingredient) {
    queryParams.push(`ingredient=${encodeURIComponent(ingredient)}`);
  }
  if (name) {
    queryParams.push(`name=${encodeURIComponent(name)}`);
  }

  const queryString = queryParams.length > 0 ? queryParams.join('&') : '';

  endpoint = `/api/recipes?${queryString}`;

  const { data, error } = useSWR(endpoint, async (url) => {
    const response = await fetch(url);
  
    if(response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      throw new Error("Sorry, we're having trouble finding that page. Please return to Home.");
    } else if (response.status === 500) {
      throw new Error("Server error, robot mutiny! Please try again later.");
    } else {
      throw new Error("Oops! We can't find that recipe, please try another search.");
    }
  }, { revalidateOnMount: true });

  // Sort recipe cards
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  
  let sortedData = data;
  
  if (sortBy === "name-asc") {
    sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "time-asc") {
    sortedData = [...data].sort((a, b) => parseInt(a.time) - parseInt(b.time));
  };  
  
  return (
    <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
      <div className="max-w-6xl bg-white dark:bg-gray-800 mx-auto h-36 md:h-40 px-8 md:px-4 py-4 md:py-0 md:pb-4 mb-0">
        <div className="flex justify-center">
          <div className="w-fit">
            <RoughNotationGroup show={true}>
              <Highlighter color={highlightColor} className="md:text-center">
                <h1 className={`results-title text-center mx-auto text-[2.675rem] md:text-8xl font-bold text-gray-900 dark:text-gray-100 md:py-1 px-4 whitespace-nowrap`}>
                {appData.resultsTitle}
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>
      </div>

      <div className="flex-1 items-center justify-start px-8 md:px-4 mb-6 -mt-10 md:-mt-4 py-4">
        {query && (
          <div className="md:hidden text-lg text-gray-600 dark:text-gray-200 -mt-2 mb-8">
            Search results for&nbsp;
            <span className="font-bold text-xl text-gray-800 dark:text-gray-100 px-[2px]">
              {searchQuery.split(' ').map((word, i) => ( 
                <span key={i} className={`queryColor ${queryColor}`}>
                  {word}
                </span>  
              ))}
            </span>...
          </div>
        )}

        <label htmlFor="sort-by" className="mr-2 sr-only">Sort by:</label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={handleSortChange}
          className="tracking-wide bg-slate-50 dark:bg-slate-850 border border-sky-100 dark:border-yellow-50 rounded-md shadow px-2 py-1"
        >
          <option value="default">Sort by...</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="time-asc">Time</option>
        </select>

        {query && (
          <div className="hidden md:inline-block w-5/6 text-center text-lg text-gray-600 dark:text-gray-200">
            Search results for&nbsp;
            <span className="font-bold text-2xl text-gray-800 dark:text-gray-100">
              {searchQuery.split(' ').map((word, i) => ( 
                <span key={i} className={`queryColor ${queryColor}`}>
                  {word}
                </span>
              ))}
            </span>...
          </div>
        )}
      </div>

      <RecipeCards 
        data={sortedData} 
        error={error} 
        recipeColors={recipeColors}
        defaultColor={defaultColor} 
      />
    </section>
  )
};
