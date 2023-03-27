import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './ProfileHeader.module.scss';
import unknownAvatar from '../../../assets/avatar.jpg';

interface IProps {
  firstName: string;
  lastName: string;
  avatar: string | null;
}

export const ProfileHeader: React.FC<IProps> = ({
  firstName,
  lastName,
  avatar,
}) => {
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
          <img src={avatar ? avatar : unknownAvatar} alt='' />
        </div>
        <div className={styles.info_panel}>
          <div className={styles.leftBlock}>
            <p>
              {firstName} {lastName}
            </p>
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
