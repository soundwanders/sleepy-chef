import React from 'react';
import { useRouter } from 'next/router';

const Results = () => {
  const router = useRouter();
  // const searchResults = router.query.results;
  const searchResults = JSON.parse(decodeURIComponent(router.query.results));

  return (
    <div>
      {searchResults.map((result) => (
        <div key={result.id}>{result.name} {result.type}</div>
      ))}
    </div>
  );
};

export default Results;
