import React from 'react';
import styles from './MainLayout.module.scss';

import Hero from '../../layout/Hero/Hero';
import VorpLogo from '../../features/VorpLogo/VorpLogo';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <header className={styles.pageHeader}>
        <VorpLogo />
        <Hero />
      </header>
      <main className={styles.pageMain}>{children}</main>
    </div>
  );
};

export default MainLayout;
