import React from 'react';
import styles from './PersonalSkills.module.scss';
import data from './skillsData';
const PersonalSkills = () => {
  return (
    <article className={styles.personalContainer}>
      <h3 className={styles.personalHeader}>TechStack</h3>
      {data.map(({ stack, id }) => (
        <section className={styles.stackSection} key={id}>
          {stack.map(({ name, Icon, color }) => (
            <div
              className={styles.stackItem}
              style={{ color: color }}
              key={name}
            >
              {typeof Icon === 'string' ? <span>{Icon}</span> : <Icon />}
              <p className={styles.stackText}>{name}</p>
            </div>
          ))}
        </section>
      ))}
    </article>
  );
};

export default PersonalSkills;
