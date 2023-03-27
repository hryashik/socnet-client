import React from 'react';
import { useSelector } from 'react-redux';
import { IGetUserResponse, IMessage } from '../../../api/contracts';
import { RootState } from '../../../store/store';
import useFetch from '../../../utils/useFetch';
import styles from './DialogCard.module.scss';

interface IProps {
  id: string,
  lastMessage: IMessage,
  userId: number
}

export const DialogCard: React.FC<IProps> = ({id, lastMessage, userId}) => {
  const {data, error, isLoading} = useFetch<IGetUserResponse>(`http://localhost:3000/users/${userId}`)
  if (!data) {
    return <h1>Идет загрузка</h1>
  }
  return (
    <div className={styles.dialog_card}>
      <div className={styles.avatar}>
        <img
          src={data.avatar ? data.avatar : ''}
          alt=''
        />
      </div>
      <div className={styles.info}>
        <div className={styles.info__title}>
          <h4>{data.firstName} {data.secondName}</h4>
        </div>
        <div className={styles.info__message}>
          <p>
            {lastMessage.text}
          </p>
        </div>
      </div>
    </div>
  );
};
