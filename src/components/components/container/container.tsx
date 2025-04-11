import React from 'react';
import styles from './container.module.scss'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles['container-hie']}>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Container;
