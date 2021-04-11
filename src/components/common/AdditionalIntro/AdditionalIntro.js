import React from 'react';
import ArticlePaper from '../ArticlePaper/ArticlePaper';
import styles from './AdditionalIntro.module.scss';

const AdditionalIntro = () => {
  return (
    <ArticlePaper title="1 + &#x221e;">
      <div className={styles.quoteContainer}>
        <ul>
          <li className={styles.notebookLine}></li>
          <li className={styles.notebookLine}></li>
          <li className={styles.notebookLine}></li>
          <li className={styles.notebookLine}></li>
          <li className={styles.notebookLine}></li>
          <li className={styles.notebookLine}></li>
          <li className={styles.notebookLine}></li>
        </ul>
        <p className={styles.text}>
          Apart from programming, I also do other things. Here are some of my
          hobbies and projects in which I participated so far.
        </p>
        <q className={styles.quote}>
          Life that passes idle is no different from a slow death
          {/* <cite>—Who Knows</cite> */}
        </q>
      </div>
    </ArticlePaper>
  );
};

export default AdditionalIntro;
