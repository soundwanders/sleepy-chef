import Link from 'next/link';
import { HappyEgg } from '@components/Animations';

export default function RecipeCards({ data, error }) {
  const defaultColor = "bg-green-300";
  const recipeColors = {
    beef: "bg-orange-200",
    chicken: "bg-violet-250",
    mexican: "bg-red-200",
    pasta: "bg-amber-250",
    pork: "bg-rose-100",
    salad: "bg-green-200",
    seafood: "bg-blue-200",
    soup: "bg-zinc-300",
    vegetarian: "bg-emerald-100"
  };

  if (error) {
    return (
      <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800 font-lg">
          <div>{error.message}</div>
        </div>
      </section>
    )
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense justify-self-center gap-12 
      mb-10 -mt-4 md:-mt-0 px-8 md:px-0 py-0 md:py-2 md:pl-4"
    >
      { data ? (
        data.map(recipe => (
        <Link 
          className="h-min"
          href="/recipes/[id]" 
          as={`/recipes/${encodeURIComponent(recipe.id)}`}
          key={recipe.id}
        >
          <div className="min-h-0 bg-zinc-100 dark:bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-md
            rounded-lg overflow-hidden transform hover:scale-101"

          >  <div className={`w-full rounded-t-lg py-4 ${recipeColors[recipe.types[0]] || defaultColor}`}>
              <div className="flex items-center justify-center h-full w-full">
                <div className="title-container flex flex-col">
                  <h2 className="recipe-name mx-auto text-[1.7rem] md:text-3xl leading-8 md:leading-10 text-center text-gray-900 py-4 px-4"
                  >
                    {recipe.name}
                  </h2>
                  <div className="images-container flex justify-center">
                    {recipe.denotations.map((denotation, index) => (
                      <img key={index} src={denotation} alt="" className="h-auto w-8 m-1" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-9 py-8">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-500 -mt-4 
                text-center text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider"
              >
                <p className="py-1">
                  Type: {recipe.types.join(", ")}
                </p>
                <p className="py-1">
                  Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
                </p>
                <p className="py-1">
                  Vegan: {recipe.vegan ? 'Yes' : 'No'}
                </p>
                <p className="py-1">
                  ⏰ {recipe.time}
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4 mb-4">
                Ingredients:
              </h3>
              
              <ul className="grid grid-cols-2 gap-2 md:gap-3">
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{ingredient}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-4 pt-4 border-t border-slate-500">
                Nutrition:
              </h3>
              {/* 
                Object.entries(recipe.nutrition) converts the nutrition object into an array of key-value pairs.
                Then, the map() method iterates over the array and creates a list item for each key-value pair. 
              */}
              <ul className="grid grid-cols-2 w-full gap-2 md:gap-3">
                {Object.entries(recipe.nutrition).map(([name, value]) => (
                  <li key={name} className="text-gray-800 dark:text-gray-300 font-medium text-xs uppercase tracking-wider col-span-1">
                    {name}: {value}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3 pt-4 border-t border-slate-500">
                Directions:
              </h3>
              <div className="overflow-x-hidden overflow-y-auto h-48">
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {recipe.directions.map(direction => (
                    <li key={direction} className="text-gray-700 dark:text-gray-100 text-sm col-span-1">{direction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))
      ) : (
        <section className="bg-white dark:bg-gray-800 pb-10 md:py-8">
          <div className="max-w-6xl mx-auto h-36 md:h-40 px-8 md:px-4 py-4 bg-white dark:bg-gray-800">
            <HappyEgg />
          </div>
        </section>
      )}
    </div>
  )
};