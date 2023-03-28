import { TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './MessagesTable.module.scss';
import { useState } from 'react';

export const MessagesTableFooter = () => {
  const [areaState, setAreaState] = useState('');
  function handler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAreaState(e.target.value);
  }
  return (
    <>
      <TextareaAutosize
        className={styles.text_area}
        placeholder='Напишите ваше сообщение...'
        maxLength={150}
        minRows={1}
        maxRows={10}
        value={areaState}
        onChange={handler}
      />
      <SendIcon color='primary' />
    </>
  );
};
