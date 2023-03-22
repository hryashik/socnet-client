import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/auth/login-page';
import { ProfilePage } from './pages/profile/profile-page';
import { UseAppDispatch } from './store/hooks';
import { SignupPage } from './pages/auth/signup-page';
import { getUserThunk } from './store/slices/userSlice';
import { toggleReady } from './store/slices/appSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const dispatch = UseAppDispatch();
  const { appIsReady } = useSelector((state: RootState) => state.app);
  const { isAuth } = useSelector((state: RootState) => state.user);

  async function initialize() {
    await dispatch(getUserThunk());
    dispatch(toggleReady(true));
  }

  const check = isAuth ? { display: 'block' } : { display: 'none' };

  useEffect(() => {
    initialize();
  }, []);

  if (!appIsReady) {
    return <h1>Preloader</h1>;
  } else {
    return (
      <>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.firstColumn} style={check}>
            <h1>asda</h1>
          </div>
          <div className={styles.secondColumn}>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/:id' element={<ProfilePage />} />
              <Route path='/auth/login' element={<LoginPage />} />
              <Route path='/auth/registration' element={<SignupPage />} />
              <Route
                path='*'
                element={
                  <>
                    <h1>404</h1>
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </>
    );
  }
};
