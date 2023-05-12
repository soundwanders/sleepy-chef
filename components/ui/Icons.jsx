import React from 'react';

export const Hamburger = () => (
  <svg className="fill-current w-5 md:w-6 h-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export const Close = () => (
  <svg className="fill-current w-6 h-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
  </svg>
);

export const AddLine = () => (
  <svg className="fill-current w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v14a1 1 0 0 0 1 1z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M18 10a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1z" clipRule="evenodd" />
  </svg>
);

export const RemoveLine = () => (
  <svg className="fill-current w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M15.8 4.4c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L10 8.6 6.6 5.2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.4 3.4L5.2 13c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.4-3.4 3.4 3.4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-3.4-3.4 3.4-3.4z"
      clipRule="evenodd"
    />
  </svg>
);

export const ClearAll = () => (
  <svg className="fill-current w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/>
  </svg>
);
