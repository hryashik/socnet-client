import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/auth/login-page';
import { ProfilePage } from './pages/profile/profile-page';
import { UseAppDispatch } from './store/hooks';
import './App.scss'
import { SignupPage } from './pages/auth/signup-page';

export const App: React.FC = () => {
  const dispatch = UseAppDispatch();

  return (
    <>
      <Routes>
        <Route path='/' element={<ProfilePage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/registration' element={<SignupPage />} />
        <Route path='*' element={<><h1>404</h1></>} />
      </Routes>
    </>
  );
};
