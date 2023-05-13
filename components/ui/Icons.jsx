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
  <svg className="fill-current w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
);

export const ClearAll = () => (
  <svg className="fill-current w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
  </svg>
);
