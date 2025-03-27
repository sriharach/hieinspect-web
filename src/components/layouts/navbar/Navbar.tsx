import React from 'react';
import styles from './navbar.module.scss';
import { routesNavbar } from './routesNavbar';

const Navbar = () => {
  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav-ul-content']}>
        {routesNavbar.map((roueNav) => (
          <li role="button" key={roueNav.id} className={styles['nav-li-content']}>
            {roueNav.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
