import React, { useContext } from 'react';
import { SearchContext } from "./Context";

export default function Recipes() {
  const { item, setItem } = useContext(SearchContext);

  return (
    <div className="hero h-screen lg:h-screen px-8 lg:p-x-0 flex flex-column justify-center items-start overflow-hidden">
      <div className="flex w-full grid-cols-3 gap-4">
        <div class="block justify-center">
          <div class="max-w-sm rounded-lg shadow-lg bg-white dark:bg-gray-700">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {item}
              </h5>
              <p class="text-gray-700 text-base mb-4">
                {item.type}
              </p>
              <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Yahtzee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};