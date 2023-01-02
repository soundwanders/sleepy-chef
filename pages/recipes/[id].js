import ContainerBlock from '@components/ContainerBlock';
import { useRouter } from 'next/router';

export async function getServerSideProps({ query }) {
  const { id } = query;

  // Encode the `name` query parameter
  const name = encodeURIComponent(query.name);
  
  const vercelEndpoint = `https://sleepychef.vercel.app/api/recipes/${id}?name=${name}`;
  const localhostEndpoint = `http://localhost:3000/api/recipes/${id}?name=${name}`;

  console.log(query.id)
  console.log(query.name);
  
  // Fetch the data from both URLs concurrently using the await operator with the Promise.all method
  const [vercelRes, localhostRes] = await Promise.all([
    fetch(vercelEndpoint),
    fetch(localhostEndpoint),
  ]);

  // Check which fetch request returned a successful response
  const vercelRecipe = vercelRes.ok ? await vercelRes.json() : null;
  const localhostRecipe = localhostRes.ok ? await localhostRes.json() : null;

  // Get the first non-null recipe
  const recipe = vercelRecipe || localhostRecipe;

  return {
    props: {
      recipe,
    },
  }
};

export default function Recipe(props) {
  const router = useRouter();

  // Find the selected recipe using the id variable
  const { recipe } = props;

  return (
    <ContainerBlock>
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-0 md:py-10 px-8" key={recipe.id}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {recipe.name}
        </h2>
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-4">
          Type: {recipe.type}
        </p>
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-4">
          Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
        </p>
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-4">
          Vegan: {recipe.vegan ? 'Yes' : 'No'}
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-2">Ingredients:</h3>
        <ul className="list-disc pl-4">
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient} className="text-gray-700 text-sm mb-2">{ingredient}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Nutrition:</h3>
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
        Calories: {recipe.nutrition.calories}
        </p>
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
          Fat: {recipe.nutrition.fat}
        </p>
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
          Carbs: {recipe.nutrition.carbs}
        </p>
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider mb-2">
          Protein: {recipe.nutrition.protein}
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Directions:</h3>
        <div className="overflow-y-auto h-48">
          <p className="text-gray-700 text-sm mb-2">
            {recipe.directions}
          </p>
        </div>
      </div>
    </ContainerBlock> 
  )
};
