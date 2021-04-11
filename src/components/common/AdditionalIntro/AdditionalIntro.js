import React from 'react';
import styles from './AdditionalIntro.module.scss';

const AdditionalIntro = () => {
  return (
    <article className={styles.articleContainer}>
      <h3 className={styles.articlelHeader}>1 + &#x221e;</h3>
      <p className={styles.articleText}>
        Apart from programming, I also do other things...
      </p>
    </article>
  );
};

export default AdditionalIntro;
