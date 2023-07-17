import React from 'react';

export const BeatLoader = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-2 py-10">
        <div className="h-2 w-2 bg-orange-400 rounded-full animate-bounce" />
        <div className="h-2 w-2 bg-orange-400 rounded-full animate-bounce" />
        <div className="h-2 w-2 bg-orange-400 rounded-full animate-bounce" />
      </div>
    </>
  )
};
