import Link from 'next/link';

export const FormLink = () => (
  <Link href="/form" as="/form" legacyBehavior>
    <a className="block px-4 py-4 mt-1 md:my-3 rounded-md hover:bg-slate-200 hover:text-gray-800 dark:hover:bg-slate-700
      dark:hover:text-yellow-50 list-none p-0 font-bold text-sm md:text-base text-center theme-text-on-surface"
    >
      <span className="flex items-center justify-center">
        <img src="/cupcake.png" alt="Cupcake" className="w-6 h-auto mr-2" />
        Submit Recipe
      </span>
    </a>
  </Link>
);
