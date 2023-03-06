import { useState } from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/Highlighter';
import RecipeCards from '@components/RecipeCards';

export default function RecipesByType({ data, error, mainTypes, defaultColor, recipeColors}) {
  const [sortBy, setSortBy] = useState("default");
  const highlightColor = "#60a5fa";

  if (error) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800 font-lg">
          <div>{error.message}</div>
        </div>
      </section>
    )
  };

  // Sort recipe cards alphabetically
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  let sortedData = data;

  // use Array.prototype.sort() method to sort alphbetically by recipe name
  if (sortBy === "name-asc") {
    sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto h-36 md:h-40 bg-white dark:bg-gray-800 px-8 md:px-4 py-4 mb-4 md:mb-0">
        <div className="w-full text-center">
          <div className="w-fit mt-2">
            <RoughNotationGroup show={true}>
              <Highlighter color={highlightColor}>
                <h1 className={`results-title text-[1.7rem] md:text-[4rem] font-bold text-gray-900 dark:text-gray-100 p-2`}>
                  It's a <span className="type-span inline-block text-yellow-300">{ mainTypes[0] }</span> kind of night 
                  <span className="ml-4">
                    🎉
                  </span>
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>
      </div>

      <div className="flex justify-start px-8 md:px-4 mb-6 mt-2 py-2">
        <label htmlFor="sort-by" className="mr-2 sr-only">Sort by:</label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={handleSortChange}
          className="tracking-wide bg-slate-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-500 rounded-md px-2 py-1"
        >
          <option value="default">Sort</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>

      <RecipeCards 
        data={sortedData} 
        error={error} 
        defaultColor={defaultColor} 
        recipeColors={recipeColors}
      />
    </>
  )
};
