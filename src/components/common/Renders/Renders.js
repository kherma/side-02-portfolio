import React from 'react';
import styles from './Renders.module.scss';
import renders from './rendersData';

const Renders = () => {
  return (
    <article className={styles.articleContainer}>
      <h3 className={styles.articlelHeader}>3D renders</h3>
      <div className={styles.renderContainer}>
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
      </div>
    </article>
  );
};

export default Renders;
