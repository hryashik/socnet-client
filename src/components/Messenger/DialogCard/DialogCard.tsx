import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IDialog, IGetUserResponse, IMessage } from '../../../api/contracts';
import { RootState } from '../../../store/store';
import useFetch from '../../../utils/useFetch';
import styles from './DialogCard.module.scss';

interface IProps {
  info: IDialog;
  selectedDialog: string;
  selectDialog: (name: string) => void;
}

export const DialogCard: React.FC<IProps> = ({
  info,
  selectDialog,
  selectedDialog,
}) => {
  const { infoAboutMe } = useSelector((state: RootState) => state.app);
  const userId = info.usersId.filter(id => id !== infoAboutMe?.id)[0];
  const lastMessage = info.Messages.at(-1) as IMessage;
  const { data, error, isLoading } = useFetch<IGetUserResponse>(
    `http://localhost:3000/users/${userId}`
  );
  const checkSelected =
    selectedDialog === info.id
      ? `${styles.dialog_card} ${styles.selected}`
      : styles.dialog_card;

  if (!data) {
    return <h1>Идет загрузка</h1>;
  }
  return (
    <div className={checkSelected} onClick={() => selectDialog(info.id)}>
      <div className={styles.avatar}>
        <img src={data.avatar ? data.avatar : ''} alt='' />
      </div>
      <div className={styles.info}>
        <div className={styles.info__title}>
          <h4>
            {data.firstName} {data.secondName}
          </h4>
        </div>
        <div className={styles.info__message}>
          <p>{lastMessage.text}</p>
        </div>
      </div>
    </div>
  );
};
