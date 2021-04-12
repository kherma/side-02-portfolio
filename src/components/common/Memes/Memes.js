import React from 'react';
import styles from './Memes.module.scss';
import ArticlePaper from '../ArticlePaper/ArticlePaper';
import memes from './memesData';

const Memes = () => {
  return (
    <ArticlePaper title="fav memes (so far)">
      <figure className={styles.sectionContainer}>
        {memes.map(({ id, source }) => (
          <img
            key={id}
            src={source}
            alt="explorer meme"
            className={styles.sectionImage}
          />
        ))}
        <figcaption>
          Found on
          <a
            href="https://www.facebook.com/oficialexplorer"
            target="_blank"
            rel="noreferrer"
            className={styles.sectionLink}
          >
            Explorer
          </a>
          group
        </figcaption>
        <div className={styles.popup}>
          <p>Warning, you are taking the risk of losing time!!!</p>
        </div>
      </figure>
    </ArticlePaper>
  );
};

export default Memes;
