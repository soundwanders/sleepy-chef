import React from 'react';
import { useRouter } from 'next/router';

const SearchComponent = ({ searchResults }) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchResultsState, setSearchResultsState] = React.useState(searchResults);
  const router = useRouter();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    // Fetch the search results from the API using fetch
    // and set them in the searchResultsState state using setSearchResultsState
    fetch(`http://localhost:3000/api/recipes?q=${searchInput}`)
    .then((response) => {
      // Check if the response is in a valid JSON format
      if (response.headers.get('Content-Type').indexOf('application/json') === 0) {
        return response.json();
      } else {
        throw new Error('Invalid JSON format');
      }
    })
    .then((results) => {
      setSearchResultsState(results);
    })
    .catch((error) => {
      console.error(error);
    });

    router.push({
      pathname: '/results',
      query: { results: JSON.stringify(searchResults) },
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-screen-lg md:w-full mx-auto md:mx-4 flex justify-center">
        <div className="w-full pt-20 pb-60 md:pb-40">
          <div className="input-group relative flex flex-nowrap justify-center items-stretch w-full mb-4 rounded">
            <input 
              id="searchbar"
              className="form-control relative flex-auto min-w-0 block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 border-solid rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
              type="text"
              placeholder="Search by ingredient..."
              aria-label="Search" 
              aria-describedby="button-addon2"
              value={searchInput}
              onChange={handleSearchInputChange}
            />

            <button type="submit" onClick={handleSearch} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              <span className="input-group-text flex flex items-center px-3 py-1.5 cursor-pointer text-base font-normal text-gray-500 dark:text-gray-200 text-center whitespace-nowrap rounded" id="search-icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                <span className="sr-only">Search</span>
              </span>
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

export async function getServerSideProps() {
  // Fetch the search results from the local API using fetch
  // and return them as props to the results page
  const response = await fetch(`http://localhost:3000/api/recipes?q=${searchInput}`);
  const searchResults = await response.json();
  
  return {
    props: {
      searchResults,
    },
  };
}
