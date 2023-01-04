import ContainerBlock from '@components/ContainerBlock';
import fetch from 'isomorphic-unfetch';

export async function getServerSideProps({ query }) {
  const { id } = query;

  console.log(id);
  console.log("^^ id");

  const apiEndpoint =
  process.env.NODE_ENV === 'production'
    ? `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/recipes`
    : `${process.env.LOCAL_URL}/api/recipes`;

  try {
    const response = await fetch(`${apiEndpoint}?id=${id}`);
    console.log(response);

    console.log("^^ response");

    const recipeData = response.status === 200 ? await response.json() : null;
    console.log(recipeData);

    console.log("^^ recipeData");

    return {
      props: {
        recipeData
      },
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        errorMessage: "Recipe not found.",
      },
    }
  }
}; 
 
export default function Recipe({ recipeData, errorMessage}) {
  console.log(recipeData);

  return (
    <ContainerBlock>
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0 md:py-10 px-8">
        {recipeData ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {recipeData.name}
            </h2>

            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-4">
              Type: {recipeData.type}
            </p>
            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-4">
              Vegetarian: {recipeData.vegetarian ? 'Yes' : 'No'}
            </p>
            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-4">
              Vegan: {recipeData.vegan ? 'Yes' : 'No'}
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">Ingredients:</h3>

            <ul className="list-disc pl-4">
              {recipeData.ingredients.map(ingredient => (
                <li key={ingredient} className="text-gray-700 text-sm mb-2">{ingredient}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Nutrition:</h3>

            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
              Calories: {recipeData.nutrition.calories}
            </p>
            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
              Fat: {recipeData.nutrition.fat}
            </p>
            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
              Carbs: {recipeData.nutrition.carbs}
            </p>
            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
              Protein: {recipeData.nutrition.protein}
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Directions:</h3>

            <div className="overflow-y-auto h-48">
              <p className="text-gray-700 text-sm mb-2">
                {recipeData.directions}
              </p>
            </div>
          </>
        ) : (
          <p>{errorMessage}</p>
        )}
      </div>
    </ContainerBlock> 
  )
};
