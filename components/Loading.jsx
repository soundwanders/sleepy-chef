import React from 'react';

// crack and hatches chick
export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="egg">
          <div className="crack"></div>
        </div>
        <div className="chick">
          <div className="face">
            <div className="eye"></div>
            <div className="eye"></div>
            <div className="beak"></div>
          </div>
          <div className="body">
            <div className="wing"></div>
            <div className="wing"></div>
            <div className="tail"></div>

            <p>loading</p>
          </div>
        </div>
      </div>

    </div>
  );
};

// first crack
export const LoadingTwo = () => {
  return (
    <div className="loading">
      <div className="egg">
        <div className="egg-top"></div>
        <div className="egg-bottom"></div>
        <div className="crack"></div>
      </div>
    </div>
  );
};
