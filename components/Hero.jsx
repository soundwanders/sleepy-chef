import React from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from './Highlighter';
import { Searchbar } from './Searchbar';
import appData from '@constants/appData';

export const Hero = () => {
  const highlightColor = "#60a5fa";
  
  return (
    <div className="hero h-screen flex flex-column justify-center items-center px-8 overflow-hidden">
      <img src="/sleepy-her2o.png" alt="" className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-1/5 w-auto" />
      <div className="absolute top-1/3 max-w-4xl mx-auto text-center items-center pb-4 mt-12 md:mt-10">
        <RoughNotationGroup show={true}>
          <Highlighter color={highlightColor}>
            <h1 className="sleepy-title text-5xl md:text-8xl text-gray-800 dark:text-gray-200 py-1 md:px-4">
              {appData.title}
            </h1>
          </Highlighter>
        </RoughNotationGroup>
        <h1 className="font-bold text-[0.85rem] md:text-lg dark:text-gray-100 pt-8 md:pt-10 px-4">
          {appData.description}
        </h1>
        
        <Searchbar />

      </div>
    </div>
  )
};
