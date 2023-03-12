import ContainerBlock from '@components/ContainerBlock';
import appData from '@constants/appData';
import RecipesByType from '@components/RecipesByType';
import { recipes } from '@data/recipeDb';

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
    const data = recipes.filter(recipe => recipe.types.includes(params.type));
    
    // Extract the first type from each recipe's types array that matches the type specified 
    // in the URL parameter and has the highest index in the 'types' array
    const mainTypes = data.map(recipe => recipe.types.find(type => type === params.type));

    return {
      props: { 
        data, mainTypes
      }, 
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
  }
};

export default function RecipeTypeLinks({ data, mainTypes, highlightColor, defaultColor, recipeColors }) {

  return (
    <section className="bg-white dark:bg-gray-800">
      <ContainerBlock title={appData.title}>
        <RecipesByType
          data={data} 
          mainTypes={mainTypes} 
          highlightColor={highlightColor} 
          defaultColor={defaultColor} 
          recipeColors={recipeColors}
        />
      </ContainerBlock>
    </section> 
  )
};
