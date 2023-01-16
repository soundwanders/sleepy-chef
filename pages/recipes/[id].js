import ContainerBlock from '@components/ContainerBlock';

export async function getServerSideProps({ query }) {
  const { id } = query;

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
  console.log("RECIPE DATA ^^^");

  return (
    <ContainerBlock>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-2 md:py-10 px-8">
        {recipeData ? (
          <div className="bg-gray-50 dark:bg-gray-900 min-h-screen items-center">
            <div className=" flex flex-col items-center">
              <img
                className="w-full rounded-lg mb-10"
                src={recipeData.image}
                alt={recipeData.name}
              />
              <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-4">
                {recipeData.name}
              </h2>

              <div className="grid grid-cols-1 gap-8 mb-10">
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm uppercase tracking-wider">
                  Type: {recipeData.type}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm uppercase tracking-wider">
                  Vegetarian: {recipeData.vegetarian ? 'Yes' : 'No'}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm uppercase tracking-wider">
                  Vegan: {recipeData.vegan ? 'Yes' : 'No'}
                </p>
              </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 p-3">
                Ingredients:
              </h3>
                <ul className="grid grid-cols-2 gap-2 md:gap-3 p-3">
                {recipeData.ingredients && recipeData.ingredients.map(ingredient => (
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
                {recipeData.nutrition && Object.entries(recipeData.nutrition).map(([name, value]) => (
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
                  {recipeData.directions && recipeData.directions.map(direction => (
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
