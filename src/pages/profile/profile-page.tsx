import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IGetUserResponse } from '../../api/contracts';
import { MyPage } from '../../components/Profile/MyPage/MyPage';
import { NotMyPage } from '../../components/Profile/NotMyPage/NotMyPage';
import { UseAppDispatch } from '../../store/hooks';
import { getUserByIdThunk } from '../../store/slices/profileSlice';
import { RootState } from '../../store/store';

interface IProps {
  infoAboutMe: IGetUserResponse | null
}

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();
  const params = useParams<{ id: string }>();
  const { isAuth, infoAboutMe } = useSelector((state: RootState) => state.app);
  // checking page
  const isMyPage = params.id === infoAboutMe?.id.toString();

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth/login');
    }
    if (!isMyPage && params.id) {
      dispatch(getUserByIdThunk(params.id));
    }
  }, []);

  if (!isMyPage || !infoAboutMe) {
    return <NotMyPage />;
  }
  return <MyPage infoUser={infoAboutMe} />;
};
