import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Close, Hamburger } from '@components/ui/Icons';
import { FormLink } from '@components/nav/FormLink';
import SidebarLinks from '@constants/sidebar-links';

const TypeLink = ({ name, url, image, closeSidebar, isActive, onClick }) => (
  <Link href={url} as={url} legacyBehavior>
    <a
      className={`
        block px-4 rounded py-2 pb-4 hover:bg-slate-200 hover:text-gray-800 dark:hover:bg-slate-700 theme-text-on-surface
        ${isActive ? 'bg-blue-600 text-slate-50' : 'text-gray-800 dark:text-slate-50'}
      `}
      onClick={() => {
        onClick();
        closeSidebar();
      }}
    >
      <img src={`/${image}`} alt="" className="inline-block w-5 md:w-6 h-auto mr-2" />
      {name}
    </a>
  </Link>
);

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="flex">
        <button
          className={`
            hamburger text-gray-900 dark:text-slate-100 p-4 rounded focus:outline-none focus:bg-transparent
            ${isOpen ? "close-icon" : ""}
          `}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open sidebar"
          aria-controls="toggle-sidebar"
          aria-describedby="search-submit-description"
          role="button"
          tabIndex="0"
        >
          {isOpen ? <Close /> : <Hamburger />}
        </button>
        <span id="search-submit-description" className="sr-only">Submit your search</span>
      </div>

      <nav
        id="sidebar"
        className={`
          sidebar bg-slate-50 dark:bg-gradient-to-b from-gray-800 to-gray-900 h-screen w-100 md:w-1/6 
          fixed top-0 right-0 p-4 px-0
          ${isOpen ? "open" : "close"}
        `}
        role="navigation"
      >
        <div className="pt-8 mb-6 opacity-90">
          <img src="/sidebar-chef.png" alt="" className="w-16 h-auto mx-auto" />
        </div>

        <div className="h-0.5 w-4/5 bg-gray-300 dark:bg-gray-700 mx-auto mb-4"></div>

        <div className="flex flex-col h-full">
          <div className="sidebar-links-container overflow-y-auto">
            <ul className="list-none p-0 font-bold text-sm md:text-base text-center">
              {SidebarLinks.map(item => (
                <li className="md:py-1" key={item.name}>
                  <TypeLink
                    {...item}
                    closeSidebar={closeSidebar}
                    isActive={activeLink === item.url}
                    onClick={() => setActiveLink(item.url)}
                  />
                </li>
              ))}
            </ul>

            <div className="h-0.5 w-4/5 bg-gray-300 dark:bg-gray-700 mx-auto mt-4"></div>
          
            <FormLink />
          </div>
        </div>
      </nav>
    </>
  );
};
