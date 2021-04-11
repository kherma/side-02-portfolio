import React, { useState, useEffect } from 'react';
import styles from './Filmmaking.module.scss';
import ArticlePaper from '../ArticlePaper/ArticlePaper';
import { FaYoutube } from 'react-icons/fa';
import movies from './moviesData';

const Filmmaking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currenMovie, setCurrentMovie] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    updatePlaylist(movies[0].id);
  }, []);

  const updatePlaylist = (itemID) => {
    setIsLoading(false);
    const newMovie = movies.find(({ id }) => id === itemID);
    const newPlaylist = currenMovie
      ? playlist.filter(({ id }) => id !== itemID)
      : movies.filter(({ id }) => id !== itemID);
    currenMovie
      ? setPlaylist([...newPlaylist, currenMovie])
      : setPlaylist(newPlaylist);
    setCurrentMovie(newMovie);
    setIsLoading(true);
  };

  return (
    <ArticlePaper
      title="filmmaking 
    (Warning! #Polish)"
    >
      <section className={styles.ytContainer}>
        <h5 className={styles.ytLogo}>
          <FaYoutube />{' '}
          <p className={styles.logoText}>
            Youtube<sup>PL</sup>
          </p>
        </h5>
        <div className={styles.movieBox}>
          {isLoading && (
            <>
              <figure className={styles.ytMovieContainer}>
                <iframe
                  className={styles.ytMovie}
                  src={currenMovie.videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <figcaption>{currenMovie.title}</figcaption>
              </figure>
              <div className={styles.commentsSection}>
                <div className={styles.commentContainer}>
                  <span className={styles.commentPicture}>K</span>
                  <p className={styles.commentText}>{currenMovie.comment}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <aside className={styles.playlistContainer}>
          {isLoading &&
            playlist.map(({ id, picture, title }) => (
              <div
                className={styles.playlistItem}
                onClick={() => {
                  updatePlaylist(id);
                }}
                key={id}
              >
                <img
                  src={picture}
                  alt="youtube thumbnail"
                  className={styles.playlistPicture}
                />
                <p className={styles.playlistTitle}>{title}</p>
              </div>
            ))}
        </aside>
      </section>
    </ArticlePaper>
  );
};

export default Filmmaking;
