// libs
import React from 'react';
import clsx from 'clsx';
import { BackgroundLandingProps } from './backgroundLanding.type';

// component
import styles from './backgroundLanding.module.scss';

const BackgroundLanding = ({ text, secondText, image = 'roof' }: BackgroundLandingProps) => {
  return (
    <div className={styles['landing']}>
      <div
        className={clsx(image === 'roof' ? styles['landing-background'] : styles['landing-wisdom-landing-page'])}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className={styles['landing-filter-color']} />
        <div className={styles['landing-content-container-text']}>
          {text && <h1 className="text-2xl md:text-4xl lg:text-6xl z-20 font-bold">{text}</h1>}
          {secondText && <h2 className="text-xl md:text-3xl lg:text-5xl z-20 font-bold">{secondText}</h2>}
        </div>
      </div>
    </div>
  );
};

export default BackgroundLanding;
