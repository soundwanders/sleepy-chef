import React from 'react';

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900 relative inset-x-0 bottom-0">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        {/* Decorative background divider line*/}
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center text-sm md:text-base mt-12">
            <div className="text-red-400 hover:bg-red-100 rounded-md px-2 py-1 hover:text-red-600">
              <div className="inline-block hover:scale-110 hover:-rotate-2 transition duration-300">
                <a
                  target="_blank"
                  href="https://github.com/soundwanders/sleepy-chef"
                  rel="noopener"
                >
                  Built with &#10084; 
                </a>
              </div>
            </div>
            <div className="text-blue-500 hover:bg-blue-100 rounded-md px-2 py-1 hover:text-blue-700">
              <div className="inline-block hover:scale-110 hover:-rotate-2 transition duration-300">
                <a
                  target="_blank"
                  href="https://www.flaticon.com/authors/freepik"
                  rel="noopener"
                >
                  Icons from <span className="">Freepik</span>
                </a>
              </div>
            </div>
            </div>
          </div>
      </div>
  )
};