import React from 'react';
import styles from './MainLayout.module.scss';

import Navbar from '../Navbar/Navbar.js';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
