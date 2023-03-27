import axios from 'axios';
import React, { useEffect } from 'react';
import { IDialog } from '../../api/contracts';
import { DialogsMenu } from '../../components/Messenger/DialogsMenu/DialogsMenu';
import useFetch from '../../utils/useFetch';
import styles from './MessengerPage.module.scss';

export const MessengerPage = () => {
  const {data, isLoading, error} = useFetch<IDialog[]>('http://localhost:3000/dialogs')
  console.log('@Data', data)
  console.log('@isLoading', isLoading)
  if (isLoading) {
    return <h1>Идёт загрузка диалогов</h1>
  }
  if (!data || error) {
    return <h1>Диалогов нет</h1>
  }

  return (
    <div className={styles.main}>
      <DialogsMenu dialogs={data}/>
      <div className={styles.second_collumn}>
        <div className={styles.header}>Header</div>
      </div>
    </div>
  );
};
