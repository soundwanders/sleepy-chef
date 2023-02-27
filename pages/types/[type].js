import Link from 'next/link';
import ContainerBlock from '@components/ContainerBlock';
import appData from '@constants/appData';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from '@components/Highlighter';
import { recipes } from '@data/recipeDb';
import { HappyEgg } from '@components/Animations';

export async function getStaticPaths() {
  try {
    // Get an array of all unique recipe types
    const types = [...new Set(recipes.flatMap(recipe => recipe.types))];
    const paths = types.map(type => ({
      params: {
        type: type,
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
    // Get all recipes that have the type(s) specified in the URL parameter
    const allRecipes = recipes.filter(recipe => recipe.types.includes(params.type));
    
    // Extract the first type from each recipe's types array that matches the type specified 
    // in the URL parameter and has the highest index in the 'types' array
    const mainTypes = allRecipes.map(recipe => recipe.types.find(type => type === params.type));

    return { props: { allRecipes, mainTypes, params } };
  } catch (error) {
    console.error(error);
  }
};

export default function RecipesByType({ allRecipes, mainTypes, params }) {
  const highlightColor = "#60a5fa";
  const defaultColor = 'bg-green-300';

  const recipeColors = {
    beef: "bg-orange-200",
    chicken: "bg-violet-250",
    mexican: "bg-red-200",
    pasta: "bg-amber-250",
    pork: "bg-rose-100",
    salad: "bg-green-200",
    seafood: "bg-blue-200",
    soup: "bg-zinc-300",
    vegetarian: "bg-emerald-100"
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <ContainerBlock title={appData.title}>
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 py-4 bg-white dark:bg-gray-800">
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

        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense justify-self-center gap-12 mt-3 mb-12 md:mb-16 py-0 md:py-2 px-8 md:px-0 md:pl-8">
          { allRecipes ? (
            allRecipes.map(recipe => (
              <Link 
                href="/recipes/[id]" 
                as={`/recipes/${recipe.id}`}
                key={recipe.id}
              >
                <div className="min-h-0 bg-neutral-100 dark:bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-md rounded-lg overflow-hidden transform hover:scale-101">  
                  <div className={`w-full py-4 rounded-t-lg ${recipeColors[recipe.types[0]] || defaultColor}`}>
                    <div className="flex items-center justify-center h-full w-full">
                      <div className="title-container flex flex-col">
                        <h2 className="recipe-name mx-auto text-[1.7rem] md:text-3xl leading-8 md:leading-10 text-center text-gray-900 py-4 px-4">
                          {recipe.name}
                        </h2>
                        <div className="images-container flex justify-center">
                          {recipe.denotations.map((denotation, index) => (
                            <img key={index} src={denotation} alt="" className="h-auto w-8 m-1" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider py-1 -mt-4">
                      Type: {recipe.types.join(', ')}
                    </p>
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider py-1">
                      Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
                    </p>
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider py-1 pb-4 border-b border-slate-500">
                      Vegan: {recipe.vegan ? 'Yes' : 'No'}
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4 mb-4">
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
            <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
              <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
                <HappyEgg />
              </div>
            </section>
          )}
        </div>
      </ContainerBlock>
    </section> 
  )
};
