import { useState, useEffect } from "react";
import Link from "next/link";
import { Close, Hamburger } from "./Icons";
import SidebarLinks from "@constants/links";

const TypeLink = ({ name, url, closeSidebar }) => (
  <Link href={url} as={url} legacyBehavior>
    <a
      className="hover:bg-sky-300 dark:hover:bg-sky-900 block px-4 py-2 pb-4 theme-text-on-surface text-gray-800 dark:text-slate-100 hover:bg-gray-200"
      onClick={closeSidebar}
    >
      {name}
    </a>
  </Link>
);

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className="flex">
        <button
          className={`
            hamburger text-gray-900 dark:text-slate-100 p-4 rounded focus:outline-none
            ${isOpen ? "close-icon" : ""}
          `}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open sidebar"
          aria-controls="toggle-sidebar"
          aria-describedby="hamburger"
          role="button"
          tabIndex="0"
        >
          {isOpen ? <Close /> : <Hamburger />}
        </button>
      </div>

      <nav
        id="sidebar"
        className={`
          sidebar bg-slate-100 dark:bg-gray-900 w-100 h-100 md:w-1/6 md:h-screen fixed top-0 right-0 p-4 pb-60 md:pb-40 text-center
          ${isOpen ? "open" : "close"}
        `}
        role="navigation"
      >
        <ul className="list-none pt-20 p-0 font-bold md:text-lg">
          {SidebarLinks.map(item => (
            <li className="py-2" key={item.name}>
              <TypeLink {...item} closeSidebar={closeSidebar} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
};
