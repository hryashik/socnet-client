import { useEffect } from 'react';
import { Root } from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { UseAppDispatch } from '../../store/hooks';
import { getUserThunk } from '../../store/slices/userSlice';
import { RootState } from '../../store/store';

export const ProfilePage: React.FC = () => {
  const { isAuth, isLoading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth/login')
    }
  }, [])

  return <h1>Main page</h1>;
};
