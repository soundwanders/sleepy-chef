import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function SingleRecipe({ name, images, types, time, vegetarian, vegan, ingredients, nutrition, directions }) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`fade-in max-w-7xl bg-slate-100 dark:bg-zinc-900 rounded-2xl shadow-md mt-8 mb-24 mx-auto py-10 px-8 md:pb-4
      ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:max-w-[22%] break-normal tracking-wide uppercase border-b border-blue-300 dark:border-blue-800 font-bold text-slate-900 dark:text-slate-200 pb-2">
          {name}
        </h1>
      </div>
        
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow-0 flex-shrink-0 p-2 pl-0 min-h-0 z-10">
          <button onClick={() => router.back()} className="text-zinc-600 dark:text-gray-200 hover:text-slate-800 font-bold transition-colors">
            &lt; Back to Recipes
          </button>
        </div>
      
        <div className="flex-grow flex-shrink-0 md:flex-grow-0 md:flex-shrink-0 flex flex-col md:flex-row md:-mt-40">
          <div className="flex items-center justify-center flex-shrink-1 md:w-1/2 flex-end md:pr-10">
            <img src={images[0]} alt="" className="rounded-lg h-auto w-full object-cover px-20 pt-4 pb-8 md:p-0 md:-translate-y-1/3" />
          </div>
      
          <div className="md:w-1/2 py-8 px-4 -mt-12 md:mt-0">
            <div className="flex items-center mb-4">
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider mr-2">
                Type:
              </span>

              {types.map((type, index) => (
                <span key={index} className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                  <img src={`${images[index]}`} alt="" className="h-auto w-6 m-1" />
                </span>
              ))}
            </div>

            <div className="flex items-center mb-4">
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider mr-2">
                Vegetarian:
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                {vegetarian ? '😊' : '🙁'}
              </span>
            </div>
      
            <div className="flex items-center mb-4">
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider mr-2">
                Vegan:
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                {vegan ? '😊' : '🙁'}
              </span>
            </div>

            <div className="flex items-center mb-10">
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg uppercase tracking-wider mr-2">
                ⏰
              </span>
              <span className="text-gray-500 dark:text-gray-300 font-medium text-lg">
                {time}
              </span>
            </div>
            
            <div className="my-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Ingredients:
              </h2>
              <ul className="list-disc list-inside mt-2">
                {ingredients && ingredients.map((ingredient) => (
                  <li key={ingredient} className="text-gray-700 dark:text-gray-100 text-lg">{
                    ingredient}
                  </li>
                ))}
              </ul>
            </div>
                
            <div className="-mb-6 md:-mb-0">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Nutrition:</h2>
              <ul className="mt-2">        
                {nutrition && Object.entries(nutrition).map(([name, value]) => (
                  <li key={name} className="text-gray-700 dark:text-gray-100 text-lg flex items-center">
                    <span className="text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wider mr-2">
                      {name}:
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 font-bold">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
            
          <div className="md:w-1/2 py-8 px-4 md:px-8  ">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Directions:
            </h2>
            <ol className="list-decimal list-inside">
              {directions && directions.map(direction => (
                <li key={direction} className="text-gray-700 dark:text-gray-100 text-md mb-4">{direction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
};
