import { useSelect } from '@mui/base';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IDialog } from '../../api/contracts';
import { DialogsMenu } from '../../components/Messenger/DialogsMenu/DialogsMenu';
import { MessagesTable } from '../../components/Messenger/MessagesTable/MessagesTable';
import { RootState } from '../../store/store';
import useFetch from '../../utils/useFetch';
import styles from './MessengerPage.module.scss';

export const MessengerPage = () => {
  const { data, isLoading, error } = useFetch<IDialog[]>(
    'http://localhost:3000/dialogs'
  );
  const [selectedDialog, setSelectedDialog] = useState<string>('');
  const {isAuth} = useSelector((state: RootState) => state.app)
  function selectDialog(name: string) {
    setSelectedDialog(name);
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) {
      navigate('/auth/login')
    }
  }, [])

  if (isLoading) {
    return <h1>Идёт загрузка диалогов</h1>;
  }
  if (!data || error) {
    return <h1>Диалогов нет</h1>;
  }

  return (
    <div className={styles.main}>
      <DialogsMenu
        dialogs={data}
        selectedDialog={selectedDialog}
        selectDialog={selectDialog}
      />
      {selectedDialog ? (
        <MessagesTable dialog={data.find(el => el.id === selectedDialog)} />
      ) : (
        <div>Нет активных диалогов</div>
      )}
    </div>
  );
};
