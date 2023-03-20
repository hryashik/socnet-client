import { Button, Input } from '@mui/material';
import { useState } from 'react';
import styles from './login-page.module.scss';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Input
          autoFocus={true}
          placeholder='email'
          value={email}
          margin={'dense'}
        />
        <Input placeholder='password' value={password} />
        <Button variant='contained'>login</Button>
      </div>
    </div>
  );
};
