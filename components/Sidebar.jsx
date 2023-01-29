import { useState } from "react";
import { Close, Hamburger } from "./Icons";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <div className="flex">
      <button 
        className={`
          hamburger text-gray-900 dark:text-slate-100 p-4 rounded focus:outline-none
          ${isOpen ? 'close-icon' : ''} 
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar menu"
        aria-expanded={isOpen}
        aria-controls="sidebar"
        role="button"
        tabIndex="0"
      >
        { isOpen ? <Close /> : <Hamburger /> }
      </button>
    </div>

    <nav
      id="sidebar"
      className={`
        sidebar bg-slate-100 dark:bg-gray-900 w-100 h-100 md:w-1/6 md:h-screen fixed top-0 right-0 p-4 pb-60 md:pb-40 text-center
        ${isOpen ? 'open':'close'}
      `}
      role="navigation"
    >
      <ul className="list-none pt-20 p-0 font-bold md:text-lg">
        <li className="py-2">
          <a href="#" className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200">
            Random Recipe
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 pb-4 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200 ">
            Beef
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200">
            Chicken
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200">
            Fish
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200">
            Pasta
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200">
            Vegan
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200">
            Vegetarian
          </a>
        </li>
      </ul>
    </nav>
  </>
  )
};
