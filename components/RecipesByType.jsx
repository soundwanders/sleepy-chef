import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/Highlighter';
import RecipeCards from '@components/RecipeCards';

export default function RecipesByType({ data, error, mainTypes, defaultColor, recipeColors}) {
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

  return (
    <>
      <div className="max-w-6xl mx-auto h-36 md:h-40 bg-white dark:bg-gray-800 px-8 py-4 mb-4 md:mb-0">
        <div className="w-full text-center">
          <div className="w-fit mt-2">
            <RoughNotationGroup show={true}>
              <Highlighter color={highlightColor}>
                <h1 className={`results-title text-[1.7rem] md:text-[4rem] font-bold text-gray-800 dark:text-gray-100 p-2`}>
                  It's a <span className="type-span inline-block text-yellow-300">{ mainTypes[0] }</span> kind of night 
                  <span className="ml-3">
                    🎉
                  </span>
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>
      </div>

      <RecipeCards 
        data={data} 
        error={error} 
        defaultColor={defaultColor} 
        recipeColors={recipeColors}
      />
    </>
  )
};
