import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IDialog, IGetUserResponse } from '../../../api/contracts';
import { RootState } from '../../../store/store';
import useFetch from '../../../utils/useFetch';
import { MessageCard } from '../Message/MessageCard';
import styles from './MessagesTable.module.scss';

interface IProps {
  dialog: IDialog | undefined;
}

export const MessagesTable: React.FC<IProps> = ({ dialog }) => {
  const { infoAboutMe } = useSelector((state: RootState) => state.app);
  const userId = dialog?.usersId.filter(
    el => el !== infoAboutMe?.id
  )[0] as number;
  const { data, error, isLoading } = useFetch<IGetUserResponse>(
    `http://localhost:3000/users/${userId}`
  );
  if (!dialog) {
    return <div>Нет активных диалогов</div>;
  }
  if (!data) {
    return <div>Не удалось получить сообщения</div>;
  }
  const mappedMessages = dialog.Messages.map(el => {
    return <MessageCard info={el} key={el.id}/>;
  });
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p>
          {data.firstName} {data.secondName}
        </p>
      </div>
      <div className={styles.container}>
        <ul>{mappedMessages}</ul>
      </div>
    </div>
  );
};
