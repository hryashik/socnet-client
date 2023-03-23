import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProfileContent } from '../../components/Profile/Body/Content/ProfileContent';
import { ProfileFriends } from '../../components/Profile/Body/Friends/ProfileFriends';
import { ProfileHeader } from '../../components/Profile/Header/ProfileHeader';
import { UseAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import styles from './profile-page.module.scss';

export const ProfilePage: React.FC = () => {
  const { isAuth, isLoading, info } = useSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();
  const params = useParams();
  const isMyPage = params.id === info?.displayName;

  console.log('its my page?', isMyPage);
  useEffect(() => {
    if (!isAuth) {
      navigate('/auth/login');
    }
  }, []);

  return (
    <>
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
          <div className={styles.friends}>
            <ProfileFriends />
          </div>
        </div>
      </div>
    </>
  );
};
