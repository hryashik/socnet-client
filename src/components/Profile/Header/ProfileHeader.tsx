import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './ProfileHeader.module.scss';

export const ProfileHeader: React.FC = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <img
            src='https://wallup.net/wp-content/uploads/2016/02/18/266926-nature-fall-water-trees-Japan-colorful.jpg'
            alt=''
          />
        </div>
        <div className={styles.bottomPanel}>
          <div className={styles.avatar}>
          <img
            src='https://qph.cf2.quoracdn.net/main-qimg-6e8e7d415afe917d6045a75b20f78af0-lq'
            alt=''
          />
          </div>
          <div className={styles.info_panel}>
            <div className={styles.leftBlock}>
              <p>Dmitriy Dultsev</p>
              <NavLink to={'#'}>Укажите информацию о себе...</NavLink>
            </div>
            <div className={styles.rightBlock}>
              <Button variant='outlined'>Редактировать профиль</Button>
            </div>
          </div>
        </div>
      </div>
  );
};
