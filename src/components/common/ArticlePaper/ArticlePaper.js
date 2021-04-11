import React from 'react';
import styles from './ArticlePaper.module.scss';
const ArticlePaper = ({ children, title }) => {
  return (
    <article className={styles.articleContainer}>
      <h3 className={styles.articleHeader}>{title}</h3>
      {children}
    </article>
  );
};
export default ArticlePaper;
