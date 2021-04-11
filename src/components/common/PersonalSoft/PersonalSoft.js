import React from 'react';
import styles from './PersonalSoft.module.scss';
import ArticlePaper from '../ArticlePaper/ArticlePaper';
import certifications from './softData';

const PersonalSoft = () => {
  return (
    <ArticlePaper title="others">
      <section className={styles.skillsContainer}>
        <div className={styles.skillsCertification}>
          <figure className={styles.skillsCertificationItem}>
            {certifications.map(({ source, text, id }) => (
              <img
                key={id}
                src={source}
                alt={text}
                className={styles.skillsCertificationImg}
              />
            ))}

            <figcaption>
              Design Thinking Workshop
              <span className={styles.skillsCertificationData}>
                PFR &#x00026; Google - 2019 &#x00026; 2021
              </span>
            </figcaption>
          </figure>
        </div>
        <div className={styles.skillsItem}>
          <p className={styles.skillItemText}>
            Driving license <span>category B</span>
          </p>
        </div>
        <div className={styles.skillsItem}>
          <p className={styles.skillItemText}>
            English <span>B2</span>
          </p>
        </div>
      </section>
    </ArticlePaper>
  );
};

export default PersonalSoft;
