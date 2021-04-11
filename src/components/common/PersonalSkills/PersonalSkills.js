import React from 'react';
import styles from './PersonalSkills.module.scss';
import data from './skillsData';
import ArticlePaper from '../ArticlePaper/ArticlePaper';

const PersonalSkills = () => {
  return (
    <ArticlePaper title="TechStack">
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
    </ArticlePaper>
  );
};

export default PersonalSkills;
