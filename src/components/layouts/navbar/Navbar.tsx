import React from 'react';
import styles from './navbar.module.scss';
import { routesNavbar } from './routesNavbar';

const Navbar = () => {
  return (
    <nav className={styles['nav']}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {routesNavbar.map((roueNav) => (
          <li
            key={roueNav.id}
            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 after:content-[''] after:absolute after:right-[-12px] after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-4 after:bg-gray-400 last:after:hidden"
            // className="relative after:content-[''] after:absolute after:right-[-12px] after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-4 after:bg-gray-400 last:after:hidden"
          >
            {roueNav.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
