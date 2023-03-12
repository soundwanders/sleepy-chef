import { useState, useEffect } from 'react';
import { HappyEgg } from '@components/Animations';
import ContainerBlock from '@components/ContainerBlock';
import SingleRecipe from '@components/SingleRecipe';
import appData from '@constants/appData';
import { recipes } from '@data/recipeDb';

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
    const recipeData = recipes.find((recipe) => recipe.id.toString() === params.id);
    return {
      props: {
        recipeData: recipeData || null,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return { 
      props: { errorMessage: error.message } 
    };
  }
};

export default function RecipeById({ recipeData, errorMessage }) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [error, setError] = useState(null);
  const recipeInfo = Array.isArray(recipeData) ? recipeData[0] : recipeData;
  const { name, images, types, time, vegetarian, vegan, ingredients, nutrition, directions } = recipeInfo;

  useEffect(() => {
    if (recipeData) {
      setDataLoaded(true);
    }
    if (errorMessage) {
      setError(errorMessage);
    }
  }, [recipeData, errorMessage]);
  
  if (error) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
          <p className="text-red-400 font-bold text-center">{errorMessage}</p>
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
  
  return (
    <ContainerBlock title={name} description={appData.description}>
      <SingleRecipe
        name={name}
        images={images}
        types={types}
        time={time}
        vegetarian={vegetarian}
        vegan={vegan}
        ingredients={ingredients}
        nutrition={nutrition}
        directions={directions}
        errorMessage={errorMessage}
      />
    </ContainerBlock> 
  )
};
