import React from 'react';
import styles from './ProjectsTemplate.module.scss';
import ArticlePaper from '../ArticlePaper/ArticlePaper';

import square from '../../../images/render-sq/render-sq-2.jpg';
import { FiMonitor, FiLayout, FiGithub } from 'react-icons/fi';
import { BiDevices } from 'react-icons/bi';

const ProjectsTemplate = () => {
  return (
    <ArticlePaper title="Sample Title">
      <section className={styles.sectionContainer}>
        <div className={`${styles.card} ${styles.front}`}>
          <div className={styles.cartHead}>
            <div className={styles.preview}>
              <div className={styles.itemContainer}>
                <span className={styles.responsive}>
                  <BiDevices />
                </span>
              </div>
              <div className={styles.itemContainer}>
                <img
                  src={square}
                  alt="project preview"
                  className={styles.previewImg}
                />
              </div>
            </div>
            <div className={styles.links}>
              <a href="hosting" className={styles.repository}>
                <FiLayout />
              </a>
              <a href="github" className={styles.hosting}>
                <FiGithub />
              </a>
            </div>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.technology}>html</p>
            <p className={styles.technology}>css</p>
            <p className={styles.technology}>javascript</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.back}`}>
          <div className={styles.cartHead}>
            <div className={styles.preview}>
              <div className={styles.itemContainer}>
                <span className={styles.responsive}>
                  <BiDevices />
                </span>
              </div>
              <div className={styles.itemContainer}>
                <img
                  src={square}
                  alt="project preview"
                  className={styles.previewImg}
                />
              </div>
            </div>
            <div className={styles.links}>
              <a href="hosting" className={styles.repository}>
                <FiLayout />
              </a>
              <a href="github" className={styles.hosting}>
                <FiGithub />
              </a>
            </div>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.technology}>express</p>
            <p className={styles.technology}>mongo</p>
            <p className={styles.technology}>node</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.full}`}>
          <div className={styles.cartHead}>
            <div className={styles.preview}>
              <div className={styles.itemContainer}>
                <span className={styles.responsive}>
                  <BiDevices />
                </span>
              </div>
              <div className={styles.itemContainer}>
                <img
                  src={square}
                  alt="project preview"
                  className={styles.previewImg}
                />
              </div>
            </div>
            <div className={styles.links}>
              <a href="hosting" className={styles.repository}>
                <FiLayout />
              </a>
              <a href="github" className={styles.hosting}>
                <FiGithub />
              </a>
            </div>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.technology}>react</p>
          </div>
        </div>
      </section>
    </ArticlePaper>
  );
};

export default ProjectsTemplate;
