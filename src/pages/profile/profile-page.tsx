import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { ProfileHeader } from '../../components/Profile/Header/Profile-header';
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
        <div></div>
        <div></div>
      </div>
    </>
  );
};
