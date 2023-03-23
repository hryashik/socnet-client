import React from 'react';
import styles from './MessengerPage.module.scss';

export const MessengerPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first_collumn}>
        <div className={styles.header}>header</div>
        <div className={styles.dialog_card}>
          <div className={styles.avatar}>
            <img
              src='https://www.cnet.com/a/img/resize/fbed5b83741a0de89c81dd89bbb3ad1c245d1907/hub/2023/02/17/436d6904-b4db-4d5b-8507-2a489ec16f9c/naruto.jpg?auto=webp&fit=crop&height=675&width=1200'
              alt=''
            />
          </div>
          <div className={styles.info}>
              <div className={styles.info__title}>
                <h4>saske uchiha</h4>
              </div>
              <div className={styles.info__message}>
                hello world
              </div>
            </div>
        </div>
        <div className={styles.dialog_card}>
          <div className={styles.avatar}>
            <img
              src='https://www.cnet.com/a/img/resize/fbed5b83741a0de89c81dd89bbb3ad1c245d1907/hub/2023/02/17/436d6904-b4db-4d5b-8507-2a489ec16f9c/naruto.jpg?auto=webp&fit=crop&height=675&width=1200'
              alt=''
            />
          </div>
          <div className={styles.info}>
              <div className={styles.info__title}>
                <h4>saske uchiha</h4>
              </div>
              <div className={styles.info__message}>
                hello world
              </div>
            </div>
        </div>
      </div>
      <div className={styles.second_collumn}>
        <div className={styles.header}>Header</div>
      </div>
    </div>
  );
};
