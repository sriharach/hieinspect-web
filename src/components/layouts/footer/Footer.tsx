import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} HIEinspect All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
