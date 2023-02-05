import { useState } from "react";
import Link from "next/link";
import { Close, Hamburger } from "./Icons";

const recipeTypes = [
  { name: "Random Recipe", url: "/types" },
  { name: "Beef", url: "/types/beef" },
  { name: "Chicken", url: "/types/chicken" },
  { name: "Pasta", url: "/types/pasta" },
  { name: "Pork", url: "/types/pork" },
  { name: "Salad", url: "/types/salad" },
  { name: "Seafood", url: "/types/seafood" },
  { name: "Soup", url: "/types/soup" },
];

const TypeLink = ({ name, url }) => (
  <Link href={url} as={url} legacyBehavior>
    <a className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 pb-4 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200 ">
      {name}
    </a>
  </Link>
);

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
        aria-label="Open sidebar"
        aria-controls="toggle-sidebar"
        aria-describedby="hamburger"
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
        {recipeTypes.map(item => (
          <li className="py-2" key={item.name}>
            <TypeLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  </>
  );
};
