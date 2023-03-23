import React from 'react';
import styles from './ProfileGifts.module.scss';

export const ProfileGifts = () => {
  return (
    <div className={styles.main}>
      <h4>Подарки 300</h4>
      <div className={styles.collection}>
        <div className={styles.card}>
          <img src="https://media.tenor.com/ycakT-72TBMAAAAi/present-gift.gif" alt="" />
        </div>
        <div className={styles.card}>
          <img src="https://media.tenor.com/ycakT-72TBMAAAAi/present-gift.gif" alt="" />
        </div>
        <div className={styles.card}>
          <img src="https://media.tenor.com/ycakT-72TBMAAAAi/present-gift.gif" alt="" />
        </div>
      </div>
    </div>
  );
};
