import React from 'react';
import styles from './Hero.module.scss';
import Navbar from '../Navbar/Navbar.js';
import ContactOptions from '../../features/ContactOptions/ContactOptions';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Navbar />
      <div className={styles.heroText}>
        <div className={`${styles.heroTitle} ${styles.heroTitleMain}`}>
          <h1>Kamil Herma</h1>
        </div>
        <div className={`${styles.heroTitle} ${styles.heroTitleSub}`}>
          <h2>Web Developer</h2>
        </div>
      </div>
      <ContactOptions />
    </div>
  );
};

export default Hero;
