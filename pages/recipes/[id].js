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

    const recipeData = response.status === 200 ? await response.json() : null;

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
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-2 md:py-10 px-8">
        {recipeData ? (
          <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
              <div className="flex flex-col items-center">
                <img
                  className="w-full rounded-lg mb-10"
                  src={recipeData.image || null}
                  alt={recipeData.name}
                />

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {recipeData.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <p className="text-gray-600 dark:text-gray-200 font-medium text-sm uppercase tracking-wider">
                    Type: {recipeData.type}
                  </p>
                  <p className="text-gray-600 dark:text-gray-200 font-medium text-sm uppercase tracking-wider">
                    Vegetarian: {recipeData.vegetarian ? 'Yes' : 'No'}
                  </p>
                  <p className="text-gray-600 dark:text-gray-200 font-medium text-sm uppercase tracking-wider">
                    Vegan: {recipeData.vegan ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Ingredients:
                  </h3>
                    <ul className="list-disc pl-4">
                      {recipeData.ingredients.map(ingredient => (
                        <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-sm mb-2">{ingredient}</li>
                      ))}
                    </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Nutrition:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-gray-600 dark:text-gray-100 font-medium text-sm uppercase tracking-wider mb-2">
                  Calories: {recipeData.nutrition.calories}
                </p>
                <p className="text-gray-600 dark:text-gray-100 font-medium text-sm uppercase tracking-wider mb-2">
                  Fat: {recipeData.nutrition.fat}
                </p>

                <p className="text-gray-600 dark:text-gray-100 font-medium text-sm uppercase tracking-wider mb-2">
                  Carbs: {recipeData.nutrition.carbs}
                </p>
                <p className="text-gray-600 dark:text-gray-100 font-medium text-sm uppercase tracking-wider mb-2">
                  Protein: {recipeData.nutrition.protein}
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4 mb-4">
                Directions:
              </h3>
              <div className="overflow-y-auto h-48">
                  <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                    {recipeData.directions}
                  </p>
              </div>
          </div>
        ) : (
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {errorMessage}
          </h3>
        )}
      </div>
    </ContainerBlock> 
  )
};
