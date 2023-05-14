import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { Sidebar } from '@components/nav/Sidebar';
import NavSearchbar from '@components/nav/NavSearchbar';
import appData from '@constants/appData';

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const {theme, setTheme} = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); 

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="w-max">
            <img
              src={appData.chefUrl}
              alt="sleepy-chef"
              className="w-14 h-14 p-3.5 md:p-2 mr-2 md:mr-0 hover:scale-110 transition duration-2000 ease-out"
            />
          </Link>
        </div>

        {/* Display NavSearchbar in all routes EXCEPT for Home page */}
        { router.pathname !== '/' && <NavSearchbar /> }
        
        <div className={`space-x-4 flex flex-row items-center`}>
          <button
            aria-label="Toggle Theme"
            aria-controls="dark-mode"
            aria-describedby="toggle-sleepy-theme"
            type="button"
            className="toggle-theme w-14 h-14 p-3 rounded focus:outline-none focus:bg-transparent"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-6 md:w-8 h-auto text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
          <span id="toggle-sleepy-theme" className="sr-only">Toggle Light/Dark Mode</span>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  )
};
