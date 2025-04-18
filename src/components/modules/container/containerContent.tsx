import React from 'react';
import { containerProps } from './container.type';
import styles from './container.module.scss'

const ContainerContent = ({ children }: containerProps) => {
  return <div className={styles['container-hie-content']}>{children}</div>;
};

export default ContainerContent;
