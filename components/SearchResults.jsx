import { useRouter } from 'next/router';
import useSWR from 'swr';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from './Highlighter';
import RecipeCards from '@components/RecipeCards';
import appData from '@constants/appData';

export const SearchResults = ({ recipeColors, defaultColor }) => {
  const router = useRouter();
  const { query } = router;
  const { type, ingredient, name } = query;
  const highlightColor = "#60a5fa";

  let queryParams = [];
  let endpoint;

  if (type) {
    queryParams.push(`type=${encodeURIComponent(type)}`);
  }
  if (ingredient) {
    queryParams.push(`ingredient=${encodeURIComponent(ingredient)}`);
  }
  if (name) {
    queryParams.push(`name=${encodeURIComponent(name)}`);
  }

  const queryString = queryParams.length > 0 ? queryParams.join('&') : '';

  endpoint = `/api/recipes?${queryString}`;

  const { data, error } = useSWR(endpoint, async (url) => {
    const response = await fetch(url);
  
    if(response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      throw new Error("Sorry, we're having trouble finding that page. It may not exist.");
    } else if (response.status === 500) {
      throw new Error("Server error, robot mutiny! Please try again later");
    } else {
      throw new Error("We're currently out of town. Please try again later.");
    }
  }, { revalidateOnMount: true });
  
  return (
    <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
      <div className="max-w-6xl bg-white dark:bg-gray-800 mx-auto h-36 md:h-40 px-8 md:px-4 py-4 md:py-0 md:pb-4 md:mb-4">
        <div className="flex justify-center">
          <div className="w-fit">
            <RoughNotationGroup show={true}>
              <Highlighter color={highlightColor} className="md:text-center">
                <h1 className={`results-title text-center mx-auto text-[2.675rem] md:text-8xl font-bold text-gray-800 dark:text-gray-100 py-1 px-4 whitespace-nowrap`}>
                {appData.resultsTitle}
                </h1>
              </Highlighter>
            </RoughNotationGroup>
          </div>
        </div>
      </div>

      <RecipeCards 
        data={data} 
        error={error} 
        recipeColors={recipeColors}
        defaultColor={defaultColor} 
      />
    </section>
  )
};
