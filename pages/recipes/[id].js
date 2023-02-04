import ContainerBlock from '@components/ContainerBlock';
import { recipes } from '@data/recipeDb';
import { Loading } from '@components/Loading';
import { useState, useEffect } from 'react';

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
    return { props: { errorMessage: error.message } };
  }
};

export default function Recipe({ recipe, errorMessage }) {
  console.log(recipe);
  console.log("^ Selected Recipe");
  
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (recipe) {
      setDataLoaded(true);
    }
  }, [recipe]);

  if (!dataLoaded) {
    return <Loading />;
  }

  const recipeData = Array.isArray(recipe) ? recipe[0] : recipe;

  const { name, image, type, vegetarian, vegan, ingredients, nutrition, directions } = recipeData;

  return (
    <ContainerBlock>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-2 md:py-10 px-8">
        {recipeData ? (
          <div className="jello bg-gray-50 dark:bg-gray-900 min-h-screen items-center">
            <div className=" flex flex-col items-center">
              <img
                className="w-full rounded-lg mb-8 px-12 pt-8"
                src={image}
                alt={name} />

              <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-4">
                {name}
              </h2>

              <div className="grid grid-cols-1 gap-8 mb-10">
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm uppercase tracking-wider">
                  Type: {type}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm uppercase tracking-wider">
                  Vegetarian: {vegetarian ? 'Yes' : 'No'}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm uppercase tracking-wider">
                  Vegan: {vegan ? 'Yes' : 'No'}
                </p>
              </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 p-3">
                Ingredients:
              </h3>
                <ul className="grid grid-cols-2 gap-2 md:gap-3 p-3">
                {ingredients && ingredients.map(ingredient => (
                  <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">
                    {ingredient}
                  </li>
                ))}
                </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 p-3">
                Nutrition:
              </h3>
                <ul className="grid grid-cols-2 gap-1 md:gap-3 p-3">
                {nutrition && Object.entries(nutrition).map(([name, value]) => (
                  <li key={name} className="text-gray-600 dark:text-gray-300 font-medium text-sm uppercase tracking-wider col-span-1">
                    {name}: {value}
                  </li>
                ))}
                </ul>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 p-3">
                Directions:
              </h3>
              <div className="overflow-y-auto h-48 px-4">
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {directions && directions.map(direction => (
                    <li key={direction} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{direction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {errorMessage}
            </h3>
          </div>
        )}
      </div>
    </ContainerBlock> 
  )
};
