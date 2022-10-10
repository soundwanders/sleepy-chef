import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Highlighter } from "./Highlighter";

export default function Hero() {
  const highlightColors = [ "#01cdfe", "#ff9105", "#01e59f", "#ff6961"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">

      {/* Rainbow Highlighted Headlines Container */}
      <div className="max-w-6xl mx-auto text-center lg:p-10">
        <RoughNotationGroup show={true}>
          <Highlighter color={highlightColors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2 px-4 md:px-8">
              Sleepy Chef
            </h1>
          </Highlighter>
        </RoughNotationGroup>
      </div>
    </div>
  )
};
