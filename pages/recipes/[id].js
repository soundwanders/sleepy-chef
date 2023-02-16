import { useState, useEffect } from 'react';
import ContainerBlock from '@components/ContainerBlock';
import { recipes } from '@data/recipeDb';
import { Egg } from '@components/Animations';
import appData from "@constants/data";

const API_ENDPOINT =
  process.env.NODE_ENV === 'production' 
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/recipes/`
  : `${process.env.LOCAL_URL}/api/recipes/`;

export async function getStaticPaths() {
  try {
    const paths = recipes.map((recipe) => ({
      params: { 
        id: recipe.id.toString() 
      },
    }));
    return { paths, fallback: false }
  } catch (error) {
    console.error(error);
    return { fallback: true };
  }
};

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(`${API_ENDPOINT}?id=${params.id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch recipe. Status: ${response.status}`);
    }
    const recipe = await response.json();
    return { props: { recipe } };
  } catch (error) {
    console.error(error);
    return { 
      props: { errorMessage: error.message } 
    };
  }
};

export default function Recipe({ recipe, errorMessage }) {
  console.log(recipe);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (recipe) {
      setDataLoaded(true);
    }
  }, [recipe]);

  if (!dataLoaded) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
          <Egg />
        </div>
      </section>
    )
  }

  const recipeData = Array.isArray(recipe) ? recipe[0] : recipe;

  const { name, image, type, vegetarian, vegan, ingredients, nutrition, directions } = recipeData;

  return (
    <ContainerBlock title={appData.title}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12 py-2 md:py-10 mb-10 px-8">
        {recipeData ? (
          <div className="jello bg-neutral-100 dark:bg-gray-900 min-h-screen items-center">
            <div className="flex flex-col items-center">
              <img
                className="w-full rounded-lg mb-8 w-16 py-8"
                src={image}
                alt={name} />

              <h2 className="text-4xl text-center font-bold text-gray-800 dark:text-gray-200 mb-4">
                {name}
              </h2>

              <div className="grid grid-cols-1 gap-8 mb-10">
                <p className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider">
                  Type: {type}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider">
                  Vegetarian: {vegetarian ? 'Yes' : 'No'}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider">
                  Vegan: {vegan ? 'Yes' : 'No'}
                </p>
              </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800 px-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 py-6">
                Ingredients:
              </h3>
                <ul className="grid grid-cols-3 gap-3 md:gap-3">
                {ingredients && ingredients.map(ingredient => (
                  <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-lg col-span-1">
                    {ingredient}
                  </li>
                ))}
                </ul>
            </div>

            <div className="bg-neutral-100 dark:bg-gray-900 px-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 py-6">
                Nutrition:
              </h3>
                <ul className="grid grid-cols-2 gap-1 md:gap-3 py-2">
                {nutrition && Object.entries(nutrition).map(([name, value]) => (
                  <li key={name} className="text-gray-900 dark:text-gray-300 font-medium text-lg uppercase tracking-wider col-span-1">
                    {name}: {value}
                  </li>
                ))}
                </ul>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800 px-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 py-6">
                Directions:
              </h3>
              <div className="overflow-y-auto h-48 pb-12">
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {directions && directions.map(direction => (
                    <li key={direction} className="text-gray-700 dark:text-gray-100 text-lg col-span-1">{direction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 px-8">
              {errorMessage}
            </h3>
          </div>
        )}
      </div>
    </ContainerBlock> 
  )
};
