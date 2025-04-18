// libs
import React from 'react';
import clsx from 'clsx';

// type
import { badgeProps } from './badge.type';

import styles from './badge.module.scss'

const Badge = ({ text, classNameText }: badgeProps) => {
  return (
    <div className={styles['badge']}>
      <span className={clsx('text-sm text-white', classNameText)}>{text}</span>
    </div>
  );
};

export default Badge;
