import { Route, Routes, useParams } from 'react-router-dom';
import { LoginPage } from './pages/auth/login-page';
import { ProfilePage } from './pages/profile/profile-page';
import { UseAppDispatch } from './store/hooks';
import { SignupPage } from './pages/auth/signup-page';
import { checkAuthThunk } from './store/slices/appSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.scss';
import { MyMenu } from './components/MyMenu/MyMenu';
import { MessengerPage } from './pages/messenger/MessengerPage';

export const App: React.FC = () => {
  const dispatch = UseAppDispatch();
  const { appIsReady, isAuth, infoAboutMe } = useSelector((state: RootState) => state.app);

  async function initialize() {
    dispatch(checkAuthThunk())
  }
  const check =
    isAuth  ? { display: 'block' } : { display: 'none' };

  useEffect(() => {
    initialize();
  }, []);

  if (!appIsReady) {
    return <h1>App preloader</h1>;
  } else {
    return (
      <>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.firstColumn} style={check}>
              <MyMenu />
            </div>
            <div className={styles.secondColumn}>
              <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/:id' element={<ProfilePage />} />
                <Route path='/im' element={<MessengerPage />} />
                <Route path='/auth/login' element={<LoginPage />} />
                <Route path='/auth/registration' element={<SignupPage />} />
                <Route
                  path='/404'
                  element={
                    <>
                      <h1>404</h1>
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </>
    );
  }
};
