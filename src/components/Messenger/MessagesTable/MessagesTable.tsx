import { TextareaAutosize, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { IDialog, IGetUserResponse } from '../../../api/contracts';
import { socket } from '../../../socket.io/socket';
import { RootState } from '../../../store/store';
import useFetch from '../../../utils/useFetch';
import { MessageCard } from '../Message/MessageCard';
import styles from './MessagesTable.module.scss';
import { MessagesTableFooter } from './MessagesTableFooter';

interface IProps {
  dialog: IDialog | undefined;
}

export const MessagesTable: React.FC<IProps> = ({ dialog }) => {
  socket.on('connect', () => {
    console.log(socket.id)
  })

  function emitMessage() {
    socket.emit('newMessage', {
      dialogId: dialog?.id,
      message: 'asdasd',
    })
  }

  const { infoAboutMe } = useSelector((state: RootState) => state.app);
  const userId = dialog?.usersId.filter(
    el => el !== infoAboutMe?.id
  )[0] as number;
  const ul = useRef<HTMLUListElement>(null);

  const { data, error, isLoading } = useFetch<IGetUserResponse>(
    `http://localhost:3000/users/${userId}`
  );
  useEffect(() => {
    ul.current?.scrollTo(0, 10000);
  }, [data]);

  if (!dialog) {
    return <div>Нет активных диалогов</div>;
  }
  if (!data) {
    return <div>Не удалось получить сообщения</div>;
  }
  const mappedMessages = dialog.Messages.map(el => {
    return <MessageCard info={el} key={el.id} />;
  });
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p>
          {data.firstName} {data.secondName}
        </p>
      </div>
      <div className={styles.container}>
        <ul ref={ul}>
          {mappedMessages}
          {mappedMessages}
          {mappedMessages}
        </ul>
      </div>
      <div className={styles.footer} onClick={emitMessage}>
        <MessagesTableFooter />
      </div>
    </div>
  );
};
