'use client';

import React, { useEffect } from 'react';
import styles from './navbar.module.scss';
import { routesNavbar } from './routesNavbar';
import clsx from 'clsx';
import Link from 'next/link'

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById('nav');
    const ulContent = document.getElementById('render-nav');

    function EvenScroll() {
      if (!navbar) return;
      const scrolled = window.scrollY > 240;

      if (scrolled) {
        navbar.classList.add(styles['nav-scrolled-stuck-content']);
      } else {
        navbar.classList.remove(styles['nav-scrolled-stuck-content']);
      }

      if (!ulContent) return;
      if (scrolled) {
        ulContent.classList.add(styles['nav-ul-scrolled-stuck-content']);
      } else {
        ulContent.classList.remove(styles['nav-ul-scrolled-stuck-content']);
      }
    }

    window.addEventListener('scroll', EvenScroll);

    return () => {
      window.removeEventListener('scroll', EvenScroll);
    };
  }, []);

  return (
    <nav id="nav" className={styles['nav']}>
      <ul id="render-nav" className={clsx(styles['nav-ul-content'], styles['nav-ul-scrolled-content'])}>
        {routesNavbar.map((roueNav) => (
          <li key={roueNav.id} className={styles['nav-li-content']}>
            <Link href={roueNav.href} passHref>{roueNav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
