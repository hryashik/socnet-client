import { Button, Input, Typography } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import styles from './login-page.module.scss';
import api from '../../api/api';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  function changeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function changePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography fontSize={25} variant='h3'>
          Auth form
        </Typography>
        <Input
          {...register('email', {required: true, maxLength: 20, minLength: {
            value: 6,
            message: 'Min length 6'
          }, })}
          autoFocus={true}
          placeholder='email'
          value={email}
          margin={'dense'}
          onChange={changeEmail}
        />
        <Input
          {...register('password', {required: true, maxLength: 15})}
          placeholder='password'
          value={password}
          onChange={changePassword}
          type='password'
        />
        <Button variant='contained' type='submit'>
          login
        </Button>
      </form>
    </div>
  );
};
