import Link from 'next/link';
import ContainerBlock from '@components/ContainerBlock';
import { recipes } from '@data/recipeDb';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/Highlighter';

export async function getStaticPaths() {
  try {
    const types = [...new Set(recipes.map(recipe => recipe.type))];
    const paths = types.map(type => ({
      params: {
        type,
      },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { fallback: true };
  }
};

export async function getStaticProps({ params }) {
  try {
    const allRecipes = recipes.filter(recipe => recipe.type === params.type);
    return { props: { allRecipes, params } };
  } catch (error) {
    console.error(error);
    return { 
      props: { errorMessage: error.message } 
    };
  }
};

export default function RecipesByType({ allRecipes, errorMessage, params  }) {
  const highlightColor = "#60a5fa";

  return (
    <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
      <ContainerBlock>
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 py-4 bg-white dark:bg-gray-800">
          <div className="w-fit mt-4">
            <RoughNotationGroup show={true}>
              <Highlighter color={highlightColor}>
                <h1 className={`results-title text-2xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4`}>
                  Tonight's a <span className="type-span inline-block"> { params.type } </span> kind of night.
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0 -mt-6 md:-mt-0 md:py-4 mb-10 px-8">
          { allRecipes ? (
            allRecipes.map(recipe => (
              <Link 
                href="/recipes/[id]" 
                as={`/recipes/${recipe.id}`}
                key={recipe.id}
              >
                <div className="bg-neutral-100 dark:bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-md rounded-lg overflow-hidden transform hover:scale-101">  
                  <div className="bg-[#ff926a]  min-h-0 py-4 rounded-t-lg">
                    <div className="flex items-center justify-center h-full w-full">
                      <img src={recipe.denotion} alt="" className="inline-block h-6 w-6" />
                      <h2 className="recipe-name text-xl md:text-[1.3rem] text-center uppercase text-gray-900 py-4 px-3">
                        {recipe.name}
                      </h2>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider py-1 -mt-4">
                      Type: {recipe.type}
                    </p>
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider py-1">
                      Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
                    </p>
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider py-1 pb-4 border-b border-slate-500">
                      Vegan: {recipe.vegan ? 'Yes' : 'No'}
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4 mb-3">
                      Ingredients:
                    </h3>
                    
                    <ul className="grid grid-cols-2 gap-2 md:gap-3">
                      {recipe.ingredients.map(ingredient => (
                        <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{ingredient}</li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3 pt-4 border-t border-slate-500">
                      Nutrition:
                    </h3>
                    {/* 
                      Object.entries(recipe.nutrition) converts the nutrition object into an array of key-value pairs, 
                      where each element in the array is an array containing the key and value of a property. 
                      Then, the map() method iterates over the array, and creates a list item for each key-value pair, 
                    */}
                    <ul className="grid grid-cols-2 w-full gap-2 md:gap-3">
                      {Object.entries(recipe.nutrition).map(([name, value]) => (
                        <li key={name} className="text-gray-600 dark:text-gray-300 font-medium text-xs uppercase tracking-wider col-span-1">
                          {name}: {value}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3 pt-4 border-t border-slate-500">
                      Directions:
                    </h3>
                    <div className="overflow-y-auto h-48">
                      <ul className="grid grid-cols-1 gap-2 md:gap-3">
                        {recipe.directions.map(direction => (
                          <li key={direction} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{direction}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                { errorMessage }
              </h3>
            </div>
          )}
        </div>
      </ContainerBlock>
    </section> 
  )
};