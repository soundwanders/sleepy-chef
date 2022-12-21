import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); 

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <div className="flex md:flex-row justify-between items-center">

        <div className="flex flex-col w-48 md:w-full">
          <Link href="/">
            <a>
              <img
                src={userData.chefUrl}
                alt="portfolio"
                className="w-14 h-14 p-3 hover:scale-110 transition duration-2000 ease-out"
              />
            </a>
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-14 h-14 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-7 h-7 text-yellow-500 dark:text-yellow-500"
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
        </div>
      </div>
      
      <div className="space-x-10 block md:hidden mt-4">
        <Link href="/">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Home
          </a>
        </Link>
        <Link href="/">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            About
          </a>
        </Link>
        <Link href="https://github.com/soundwanders/sleepy-chef">
          <a target="_blank" className="text-base font-normal text-gray-600 dark:text-gray-300">
            Source
          </a>
        </Link>
      </div>
    </div>
  )
};
