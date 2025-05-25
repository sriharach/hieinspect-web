import React from 'react';
import clsx from 'clsx'

// components
import Loading from '../loading/loading';
import { containerProps } from './container.type';
import styles from './container.module.scss';

const Container = ({ children, loading, isError, className }: containerProps) => {
  if (loading) {
    return (
      <div className={styles['container-hie']}>
        <div className="h-[50vh]">
          <Loading />
        </div>
      </div>
    );
  }

  if (loading && isError) {
    return (
      <div className={styles['container-hie']}>
        <div className="h-screen">
          <span className="text-red-600 uppercase font-normal">Unable to connect</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['container-hie']}>
      <section className={clsx("flex-1", className)}>{children}</section>
    </div>
  );
};

export default Container;
