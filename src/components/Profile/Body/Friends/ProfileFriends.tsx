import React from 'react';
import styles from './ProfileFriends.module.scss';

export const ProfileFriends = () => {
  return (
    <div className={styles.wrapper} style={{border: "1px solid rgba(128, 128, 128, 0.276)"}}>
      <div className={styles.block}>
        <p>Друзья онлайн 10</p>
        <div className={styles.content}>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <p>Друзья 30</p>
        <div className={styles.content}>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
          <div className={styles.card}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='' />
            <p>Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};
