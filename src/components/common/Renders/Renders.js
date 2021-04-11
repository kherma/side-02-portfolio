import React from 'react';
import styles from './Renders.module.scss';
import ArticlePaper from '../ArticlePaper/ArticlePaper';
import renders from './rendersData';

const Renders = () => {
  return (
    <ArticlePaper title="3d renders">
      <section className={styles.renderContainer}>
        {renders.map(({ render, renderSQ, id }, index) => (
          <div className={styles.renderGroup} key={id}>
            {index % 2 === 0 ? (
              <>
                <img src={render} alt="test" className={styles.renderImg} />
                <img src={renderSQ} alt="test" className={styles.renderSqImg} />
              </>
            ) : (
              <>
                <img src={renderSQ} alt="test" className={styles.renderSqImg} />
                <img src={render} alt="test" className={styles.renderImg} />
              </>
            )}
          </div>
        ))}
      </section>
    </ArticlePaper>
  );
};

export default Renders;
