import React from 'react';
import styles from './VorpLogo.module.scss';

const VorpLogo = () => {
  return (
    <div className={styles.vorpContainer}>
      <div className={styles.vorpGears}></div>
      <div className={styles.vorpFill}></div>
      <div className={styles.vorpLids}></div>
      <div className={styles.vorpBody}></div>
      <div className={styles.vorpEye}></div>
    </div>
  );
};

export default VorpLogo;
