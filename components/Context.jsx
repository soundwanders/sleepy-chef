import React, { useState } from "react";
  
export const SearchContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  
  return (
    <SearchContext.Provider value={{ item, setItem }}>
      {children}
    </SearchContext.Provider>
  );
};
