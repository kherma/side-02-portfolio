import React from 'react';
import styles from './PersonalSoft.module.scss';
import cert1 from '../../../images/cert-1.jpg';
import cert2 from '../../../images/cert-2.jpg';

const PersonalSoft = () => {
  return (
    <article className={styles.personalContainer}>
      <h3 className={styles.personalHeader}>others</h3>
      <section className={styles.skillsContainer}>
        <div className={styles.skillsCertification}>
          <figure className={styles.skillsCertificationItem}>
            <img
              src={cert1}
              alt="design thinking certification"
              className={styles.skillsCertificationImg}
            />
            <img
              src={cert2}
              alt="design thinking certification"
              className={styles.skillsCertificationImg}
            />
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
    </article>
  );
};

export default PersonalSoft;
