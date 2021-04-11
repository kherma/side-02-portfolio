import React, { useState, useEffect } from 'react';
import styles from './ContactOptions.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import CopiedAlert from '../../features/CopiedAlert/CopiedAlert';

const ContactOptions = () => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <div className={styles.heroContact}>
      {alert && <CopiedAlert />}
      <ul>
        <li>
          <a href="https://github.com/kherma" target="_blank" rel="noreferrer">
            <FaGithub />
            <span className={styles.contactText}>GitHub</span>
          </a>
        </li>
        <li
          onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText('kamil.herma1@gmail.com');
          }}
        >
          <FiMail />
          <span className={styles.contactText}>kamil.herma1@gmail.com</span>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kamil-herma-75964920a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span className={styles.contactText}>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactOptions;
