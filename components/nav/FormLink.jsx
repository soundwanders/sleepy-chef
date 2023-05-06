import Link from "next/link";

export const FormLink = () => (
  <Link href="/form" as="/form" legacyBehavior>
    <a className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-200 hover:text-gray-800 dark:hover:bg-slate-700 theme-text-on-surface mb-4">
      <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM17.293 5.293a1 1 0 10-1.414-1.414L11 9.586V3a1 1 0 00-2 0v6.586l-4.879-4.88a1 1 0 00-1.414 1.414L8.586 12l-5.293 5.293a1 1 0 001.414 1.414L10 13.414l5.293 5.293a1 1 0 001.414 0 1 1 0 000-1.414L11.414 12l5.879-5.879z"/>
      </svg>
      Submit Recipe
    </a>
  </Link>
);
