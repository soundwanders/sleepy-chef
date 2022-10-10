import React from "react";

export default function Search() {
  return (
    <form class="max-w-4xl mx-auto">
      <div class="flex justify-center">
        <div class="w-1/2 pt-20 pb-40">
          <div class="input-group relative flex flex-nowrap items-stretch w-full mb-4 rounded">
            <input type="search" 
              class="form-control relative flex-auto min-w-0 block w-full px-5 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 border-solid rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
              placeholder="Search" 
              aria-label="Search" 
              aria-describedby="button-addon2"
            />

            <span class="input-group-text flex flex items-center px-3 py-1.5 text-base font-normal text-gray-500 dark:text-gray-200 text-center whitespace-nowrap rounded" id="search-icon">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </span>
          </div>      
        </div>
    </div>
  </form>
  )
};