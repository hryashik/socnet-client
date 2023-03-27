import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { ProfileContent } from '../Body/Content/ProfileContent';
import { ProfileFriends } from '../Body/Friends/ProfileFriends';
import { ProfileGifts } from '../Body/Gifts/ProfileGifts';
import { ProfileHeader } from '../Header/ProfileHeader';
import styles from './NotMyPage.module.scss';

export const NotMyPage = () => {
  const { info } = useSelector((state: RootState) => state.profile);

  if (!info) {
    return <h1>Not my page preloader</h1>;
  }
  return (
    <div>
      <div className={styles.header}>
        <ProfileHeader firstName={info.firstName} lastName={info.secondName} avatar={info.avatar}/>
      </div>
      <div className={styles.body}>
        <div className={styles.first_column}>
          <div className={styles.body__content}>
            <ProfileContent />
          </div>
        </div>
        <div className={styles.second_column}>
          <div>
            <ProfileGifts />
          </div>
          <div className={styles.friends}>
            <ProfileFriends />
          </div>
        </div>
      </div>
    </div>
  );
};
