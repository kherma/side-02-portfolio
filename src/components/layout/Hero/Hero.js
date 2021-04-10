import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.heroTitle} ${styles.heroTitleMain}`}>
        <h1>Kamil Herma</h1>
      </div>
      <div className={`${styles.heroTitle} ${styles.heroTitleSub}`}>
        <h2>Web Developer</h2>
      </div>
    </div>
  );
};

export default Hero;
