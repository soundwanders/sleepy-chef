import Link from 'next/link';

export const FormLink = () => (
  <Link href="/form" as="/form" legacyBehavior>
    <a className="block px-4 py-4 -mt-5 md:mt-4 md:mb-4 rounded-md hover:bg-slate-200 hover:text-gray-800 dark:hover:bg-slate-700
      dark:hover:text-amber-100 list-none p-0 font-bold text-md md:text-lg text-center theme-text-on-surface"
    >
      <span className="flex items-center justify-center">
        <img src="/cupcake.png" alt="Cupcake" className="w-6 h-auto mr-2" />
        Submit Recipe
      </span>
    </a>
  </Link>
);
