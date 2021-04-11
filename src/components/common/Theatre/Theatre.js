import React from 'react';
import styles from './Theatre.module.scss';
import ArticlePaper from '../ArticlePaper/ArticlePaper';
import posters from './postersData';

const Theatre = () => {
  return (
    <ArticlePaper title="theatre (polish)">
      <section className={styles.posters}>
        {posters.map(({ id, title, image, altText, group, place, linkTo }) => (
          <figure className={styles.posterItem} key={id}>
            <cite className={styles.posterTitle}>{title}</cite>
            <span className={styles.imageContainer}>
              <img src={image} alt={altText} className={styles.posterImg} />
            </span>
            <figcaption>
              <span className={styles.posterGroup}>{group}</span>
              <sub>Theatre Group</sub>
            </figcaption>
            <p>
              <a
                href={linkTo}
                target="_blank"
                rel="noreferrer"
                className={styles.posterLink}
              >
                {place}
              </a>
            </p>
          </figure>
        ))}
      </section>
    </ArticlePaper>
  );
};

export default Theatre;
