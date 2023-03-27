import { IGetUserResponse } from '../../../api/contracts';
import { ProfileContent } from '../Body/Content/ProfileContent';
import { ProfileFriends } from '../Body/Friends/ProfileFriends';
import { ProfileGifts } from '../Body/Gifts/ProfileGifts';
import { ProfileHeader } from '../Header/ProfileHeader';
import styles from './MyPage.module.scss';

interface IProps {
  infoUser: IGetUserResponse;
}

export const MyPage: React.FC<IProps> = ({ infoUser }) => {
  console.log('MY PAGE')
  return (
    <div>
      <div className={styles.header}>
        <ProfileHeader firstName={infoUser.firstName} lastName={infoUser.secondName} avatar={infoUser.avatar}/>
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
