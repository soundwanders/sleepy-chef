import { useState, useEffect } from 'react';
import { recipes } from '@data/recipeDb';
import { HappyEgg } from '@components/Animations';
import ContainerBlock from '@components/ContainerBlock';
import appData from '@constants/appData';

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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recipe) {
      setDataLoaded(true);
    }
    if (errorMessage) {
      setError(errorMessage);
    }
  }, [recipe, errorMessage]);
  
  if (error) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
          <p className="text-red-400 font-bold text-center">{error}</p>
        </div>
      </section>
    )
  };

  if (!dataLoaded) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
          <HappyEgg />
        </div>
      </section>
    )
  };

  const recipeData = Array.isArray(recipe) ? recipe[0] : recipe;
  const { name, images, types, vegetarian, vegan, ingredients, nutrition, directions } = recipeData;

  return (
    <ContainerBlock title={name} description={appData.description}>
      <div className="max-w-7xl mx-auto py-10 px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">{name}</h1>
        </div>

        {recipeData ? (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8">
              <img src={images[0]} alt="" className="rounded-lg h-auto w-full md:h-80 object-cover" />
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider mr-2">
                  Type:
                </span>
                {types.map((type, index) => (
                  <span key={index} className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                    <img src={images[type]} alt="" className="h-auto w-7 m-1" />
                  </span>
                ))}
              </div>

              <div className="flex items-center mb-4">
                <span className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider mr-2">
                  Vegetarian:
                </span>
                <span className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                  {vegetarian ? 'Yes' : 'No'}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider mr-2">Vegan:</span>
                <span className="text-gray-800 dark:text-gray-200 font-bold text-lg">{vegan ? 'Yes' : 'No'}</span>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Ingredients:</h2>
                <ul className="list-disc list-inside mt-2">
                  {ingredients && ingredients.map(ingredient => (
                    <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-lg">{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Nutrition:</h2>
                <ul className="mt-2">
                  {nutrition && Object.entries(nutrition).map(([name, value]) => (
                    <li key={name} className="text-gray-700 dark:text-gray-100 text-lg flex items-center">
                      <span className="text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wider mr-2">{name}:</span>
                      <span className="text-gray-800 dark:text-gray-200 font-bold">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Directions:</h2>
              <ol className="list-decimal list-inside">
                {directions && directions.map(direction => (
                  <li key={direction} className="text-gray-700 dark:text-gray-100 text-lg mb-4">{direction}</li>
                ))}
              </ol>
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
