import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import ContainerBlock from "@components/ContainerBlock";
import userData from "@constants/data";

const Results = () => {
  const router = useRouter();
  const searchResults = JSON.parse(router.query.results);
  console.log(searchResults);

  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await fetch(`https://sleepychef.vercel.app/api/recipes?q=${searchResults}`);
      setResults(response.data);
      console.log(response.data);
    };
    search();
  }, []);

  return (
    <ContainerBlock
      title={userData.title}
      description={userData.description}
    >
      <h1>Search results for {searchResults}</h1>
      
      {results ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </ContainerBlock>
  )
};

export default Results;