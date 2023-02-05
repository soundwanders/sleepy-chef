import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlighter } from "./Highlighter";
import { Searchbar } from "./Searchbar";
import userData from "@constants/data";

export const Hero = () => {
  const highlightColor = "#60a5fa";
  
  return (
    <div className="hero h-screen flex flex-column justify-center items-center px-8 overflow-hidden">

      {/* Rainbow Highlighted Headlines Container */}
      <div className="absolute top-0 max-w-4xl mx-auto text-center items-center pb-4 mt-52">
        <RoughNotationGroup show={true}>
          <Highlighter color={highlightColor}>
            <h1 className="sleepy-title text-5xl md:text-8xl text-gray-800 dark:text-gray-200 md:px-4">
              {userData.title}
            </h1>
          </Highlighter>
        </RoughNotationGroup>
        <h1 className="font-regular text-md md:text-lg dark:text-gray-100 pt-10 px-4 lg:-mb-4">
          {userData.description}
        </h1>
        
        <Searchbar />

      </div>
    </div>
  )
};
