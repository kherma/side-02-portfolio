import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}></span>
      <nav className={styles.navLinks}>
        <NavLink
          exact
          to="/personaldata"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          .personal<span className={styles.navSpecial}>Data</span> &#x00028;
          &#x00029;
        </NavLink>
        <NavLink
          exact
          to="/projects"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          .projects<span className={styles.navSpecial}>Dir</span> &#x00028;
          &#x00029;
        </NavLink>
        <NavLink
          exact
          to="/additionalinfo"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          .additional<span className={styles.navSpecial}>Info</span> &#x00028;
          &#x00029;
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          .contact<span className={styles.navSpecial}>Me</span> &#x00028;
          &#x00029;
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
