import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { MyPage } from '../../components/Profile/MyPage/MyPage';
import { NotMyPage } from '../../components/Profile/NotMyPage/NotMyPage';
import { UseAppDispatch } from '../../store/hooks';
import { getUserByIdThunk } from '../../store/slices/userSlice';
import { RootState } from '../../store/store';

export const ProfilePage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const { isAuth, infoAboutMe } = useSelector((state: RootState) => state.app);
  // checking page
  const isMyPage = params.id === infoAboutMe?.id.toString();

  const navigate = useNavigate();
  const dispatch = UseAppDispatch();
  console.log('its my page?', isMyPage);

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth/login');
    }
    if (!isMyPage && params.id) {
      dispatch(getUserByIdThunk(params.id));
    }
  }, []);
  if (!isMyPage) <NotMyPage />;
  return <MyPage />;
};
