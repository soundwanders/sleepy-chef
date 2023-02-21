import React from 'react';

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900 relative inset-x-0 bottom-0">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        {/* Decorative background divider line*/}
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-12">
            <div className="text-red-400 hover:bg-red-100 rounded-md px-2 py-1 hover:text-red-600">
              <div className="inline-block hover:scale-110 hover:-rotate-2 transition duration-300">
                <a
                  target="_blank"
                  href="https://github.com/soundwanders/sleepy-chef"
                >
                  Built with &#10084; 
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};
