import React from 'react';
import styles from './MyMenu.module.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { NavLink } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MessengerIcon from '@mui/icons-material/ChatBubbleOutline';
import FriendsIcon from '@mui/icons-material/PeopleOutlineRounded';
import PhotosIcon from '@mui/icons-material/CropOriginalRounded';

export const MyMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tab}>
        <PermIdentityIcon color='primary'/>
        <NavLink to={'/'}>Моя страница</NavLink>
      </div>
      <div className={styles.tab}>
        <NewspaperIcon color='primary'/>
        <NavLink to={'#'}>Новости</NavLink>
      </div>
      <div className={styles.tab}>
        <MessengerIcon color='primary'/>
        <NavLink to={'/im'}>Мессенджер</NavLink>
      </div>
      <div className={styles.tab}>
        <FriendsIcon color='primary'/>
        <NavLink to={'#'}>Друзья</NavLink>
      </div>
      <div className={styles.tab}>
        <PhotosIcon color='primary'/>
        <NavLink to={'#'}>Фотографии</NavLink>
      </div>
    </div>
  );
};
