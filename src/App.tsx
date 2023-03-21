import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/auth/login-page';
import { MainPage } from './pages/main/main-page';
import { UseAppDispatch } from './store/hooks';
import { RootState } from './store/store';
import './App.scss'

export const App: React.FC = () => {
  const dispatch = UseAppDispatch();

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<Login />} />
      </Routes>
    </>
  );
};
