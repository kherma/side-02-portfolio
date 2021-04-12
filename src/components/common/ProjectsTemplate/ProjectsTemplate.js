import React from 'react';
import styles from './ProjectsTemplate.module.scss';
import ArticlePaper from '../ArticlePaper/ArticlePaper';

import { FiMonitor, FiLayout, FiGithub } from 'react-icons/fi';
import { BiDevices } from 'react-icons/bi';

const ProjectsTemplate = ({ title, projects }) => {
  return (
    <ArticlePaper title={title}>
      <section className={styles.sectionContainer}>
        {projects.map(
          ({
            id,
            type,
            rwd,
            imageSource,
            hostLink,
            githubLink,
            technologies,
          }) => (
            <div
              key={id}
              className={`${styles.card} ${
                type === 'front'
                  ? styles.front
                  : type === 'back'
                  ? styles.back
                  : styles.full
              }`}
            >
              <div className={styles.cartHead}>
                <div className={styles.preview}>
                  <div className={styles.itemContainer}>
                    {!rwd ? (
                      <span className={styles.desktop}>
                        <FiMonitor />
                      </span>
                    ) : (
                      <span className={styles.responsive}>
                        <BiDevices />
                      </span>
                    )}
                  </div>
                  <div className={styles.itemContainer}>
                    <img
                      src={imageSource}
                      alt="project preview"
                      className={styles.previewImg}
                    />
                  </div>
                </div>
                <div className={styles.links}>
                  {hostLink && (
                    <a href={hostLink} className={styles.link}>
                      <FiLayout />
                    </a>
                  )}
                  {githubLink && (
                    <a href={githubLink} className={styles.link}>
                      <FiGithub />
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.cardBody}>
                {technologies.map(({ text, color, id }) => (
                  <p
                    key={id}
                    className={styles.technology}
                    style={{ color: color }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          )
        )}
      </section>
    </ArticlePaper>
  );
};

export default ProjectsTemplate;
