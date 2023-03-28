import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMessage } from '../../../api/contracts';
import styles from './MessageCard.module.scss';
import mockAvatar from '../../../assets/avatar.jpg'

interface IProps {
  info: IMessage;
}

export const MessageCard: React.FC<IProps> = ({ info }) => {
   const avatar = info.author.avatar || mockAvatar
  return (
    <li>
      <div className={styles.message}>
        <img className={styles.avatar} src={avatar} alt='' />
        <div className={styles.message__info}>
          <NavLink to={'#'}>{info.author.firstName}</NavLink>
          <p>{info.text}</p>
        </div>
      </div>
    </li>
  );
};
