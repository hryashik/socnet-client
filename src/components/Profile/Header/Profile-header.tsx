import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './Profile-header.module.scss'

export const ProfileHeader: React.FC = () => {
  return (
    <>
        <img
          className={styles.background}
          src='https://wallup.net/wp-content/uploads/2016/02/18/266926-nature-fall-water-trees-Japan-colorful.jpg'
          alt=''
        />
        <div className={styles.info}>
          <img
            src='https://qph.cf2.quoracdn.net/main-qimg-6e8e7d415afe917d6045a75b20f78af0-lq'
            alt=''
          />{' '}
          <div className={styles.data}>
            <div className={styles.namePanel}>
              <p>Dmitriy Dultsev</p>
              <NavLink to='/settings'>Указать информацию о себе...</NavLink>
            </div>

            <div className={styles.buttons}>
              <Button variant='outlined'>Редактировать профиль</Button>
            </div>
          </div>
        </div>
      </>
  )
};
