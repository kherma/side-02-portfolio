import React from 'react';
import styles from './Styleguide.module.scss';
import data from './colorsData';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const StyleSheet = () => {
  return (
    <div className={styles.styleguideContainer}>
      <ArticlePaper title="typography">
        <section className={styles.typographyContent}>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
        </section>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </ArticlePaper>

      <ArticlePaper title="color">
        <section className={styles.colorContent}>
          {data.map(({ itemClass, hex, varName }) => (
            <div key={hex} className={styles.colorItem}>
              <span className={itemClass}></span>
              <p>{hex}</p>
              <p>{varName}</p>
            </div>
          ))}
        </section>
      </ArticlePaper>
    </div>
  );
};

export default StyleSheet;
