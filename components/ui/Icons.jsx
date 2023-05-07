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

export const AddLine = () => {
  <svg className="w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v14a1 1 0 0 0 1 1z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M18 10a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1z" clipRule="evenodd" />
  </svg>
};

export const RemoveLine = () => {
  <svg className="w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-7a3 3 0 013 3v1h-6V5a3 3 0 013-3z"
      clipRule="evenodd"
    />
  </svg>
};