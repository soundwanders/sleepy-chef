import React, { useState, useEffect, useContext } from 'react';
import Link from "next/link";
import axios from 'axios';
import { SearchContext } from './Context';

export default function Search() {
  const { item, setItem } = useContext(SearchContext);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState("");

  useEffect(()=>{
    const fetchData = async ()=> {
      try {
        const res = await axios.get('http://localhost:3000/api/recipes');
        setItem(res.data);
        setFiltered(res.data);
      } catch(err){
        throw new Error(err);
      }
    }

    fetchData();
  }, []);

  useEffect(()=> {
    const results = filtered.filter (
      res => res.name.toLowerCase().includes(result)
    )
    setItem(results);
  }, [result]);

  console.log(item);

  const onInputChange =(e)=> {
    e.preventDefault();
    setItem(e.target.value);
    setResult(e.target.value);
  };

  return (
    <form className="max-w-6xl mx-auto">
      <div className="max-w-screen-lg md:w-full mx-auto md:mx-4 flex justify-center">
        <div className="w-full pt-20 pb-60 md:pb-40">
          <div className="input-group relative flex flex-nowrap justify-center items-stretch w-full mb-4 rounded">
            <input 
              className="form-control relative flex-auto min-w-0 block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 border-solid rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
              type="search" 
              placeholder="Search by ingredient..."
              aria-label="Search" 
              aria-describedby="button-addon2"
              value={result}
              onChange={onInputChange}
            />

            <Link href="/results">
              <span className="input-group-text flex flex items-center px-3 py-1.5 cursor-pointer text-base font-normal text-gray-500 dark:text-gray-200 text-center whitespace-nowrap rounded" id="search-icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                <span className="sr-only">Search</span>
              </span>
            </Link> 
          </div>
        </div>
      </div>
    </form>
  )  
};