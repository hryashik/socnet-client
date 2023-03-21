import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';

export const ProfilePage: React.FC = () => {
  const userInit = useSelector((state: RootState) => state.user.init);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInit) {
      navigate('/auth/login');
    }
  });

  return <h1>Main page</h1>;
};
