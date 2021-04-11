import React from 'react';
import styles from './PersonalInfo.module.scss';
import ProfilePhoto from '../../../images/profile.jpg';
import ArticlePaper from '../ArticlePaper/ArticlePaper';

const PersonalInfo = () => {
  return (
    <ArticlePaper title="A letter you might also skip">
      <section className={styles.sectionContainer}>
        <img
          src={ProfilePhoto}
          alt="kamil herma"
          className={styles.personalImage}
        />
        <p className={styles.personalText}>
          Hi, my name is Kamil - Junior Web Developer.
        </p>
        <p className={styles.personalText}>
          I don't believe in junior full stack. That's why I specialize in
          front-end first. My favorite topics are productivity apps, e-commerce
          and anything that has to do with education and environmental care. Oh,
          and really like CSS.
        </p>
        <p className={styles.personalText}>
          Also learned back-end concepts for MERN stack. Enough to setup REST
          API with database and websocket. It makes communication easier.
        </p>
        <p className={styles.personalText}>
          I used to be a dreamer too... You know, Disny movies:
          <q className={styles.personalQuote}>
            How to become a hero and save the world
          </q>
          - then I found programming, came back to earth, and fell in love.
        </p>
        <p className={styles.personalText}>
          It was an ambivalent love. First
          <q className={styles.personalQuote}>hello world</q> in
          C&#x0002B;&#x0002B;. Every single
          <q className={styles.personalQuote}>
            Oh my god, it works&#x00021;
          </q>{' '}
          and
          <q className={styles.personalQuote}>
            Da f&#x0002A;&#x0002A;&#x0002A; you don't wanna compile&#x00021;
          </q>
          . It took me a long time and a lot of failure but it was and still is
          worth it.
        </p>
      </section>
    </ArticlePaper>
  );
};

export default PersonalInfo;
