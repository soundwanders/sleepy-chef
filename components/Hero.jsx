import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlighter } from "./Highlighter";
import Searchbar from "./Searchbar";
import userData from "@constants/data";

export default function Hero() {
  const highlightColors = [ "#4667b4", "#ff9105", "#01e5a1e8", "#ff6961"];
  return (
    <div className="hero h-screen flex flex-column justify-center items-center px-8 overflow-hidden">

      {/* Rainbow Highlighted Headlines Container */}
      <div className="absolute top-0 max-w-4xl mx-auto text-center items-center pb-4 mt-56">
        <RoughNotationGroup show={true}>
          <Highlighter color={highlightColors[0]}>
            <h1 className="text-5xl md:text-8xl font-bold text-gray-800 dark:text-gray-200">
              Sleepy Chef
            </h1>
          </Highlighter>
        </RoughNotationGroup>
        <h1 className="font-regular text-md dark:text-gray-100 pt-10 px-4 lg:-mb-4">
          {userData.description}
        </h1>
      <Searchbar />
      </div>
    </div>
  )
};
