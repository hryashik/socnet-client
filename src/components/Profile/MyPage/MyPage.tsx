import { ProfileContent } from '../Body/Content/ProfileContent';
import { ProfileFriends } from '../Body/Friends/ProfileFriends';
import { ProfileGifts } from '../Body/Gifts/ProfileGifts';
import { ProfileHeader } from '../Header/ProfileHeader';
import styles from './MyPage.module.scss'

export const MyPage = () => {
  return (
    <div>
      <div className={styles.header}>
        <ProfileHeader />
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
