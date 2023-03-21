import { Button, Icon, Input, Typography } from '@mui/material';
import { KeyboardEvent, useEffect, useState } from 'react';
import styles from './login-page.module.scss';
import api from '../../api/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import errorIcon from '@mui/icons-material/ReportProblemOutlined';
import { ILoginContract } from '../../api/contracts';
import { AxiosError } from 'axios';

interface IFormInput extends ILoginContract {}

export const Login: React.FC = () => {
  const [error, setError] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    try {
      const response = await api.login(data);
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  };

  const hasErrors =
    (errors.hasOwnProperty('email') || errors.hasOwnProperty('password')) ===
    true;
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography fontSize={25} variant='h3'>
          Auth form
        </Typography>
        <Input
          {...register('email', {
            required: 'Поле обязательно для заполнения',
            maxLength: 20,
            minLength: {
              value: 6,
              message: 'Минимум 6 символов',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Неверный формат email',
            },
          })}
          autoFocus={true}
          placeholder='email'
          margin={'dense'}
        />
        {errors.email?.message && (
          <div className={styles.error}>
            <Icon component={errorIcon} color={'error'} />
            <p>{errors.email.message}</p>
          </div>
        )}
        <div className={styles.error}></div>
        <Input
          {...register('password', {
            required: 'Поле обязательно для заполнения',
            maxLength: 15,
            minLength: {
              value: 3,
              message: 'Минимум 3 символа',
            },
          })}
          placeholder='password'
          type='password'
        />
        {errors.password?.message && (
          <div className={styles.error}>
            <Icon component={errorIcon} color={'error'} />
            <p>{errors.password.message}</p>
          </div>
        )}
        <Button variant='contained' type='submit' disabled={hasErrors}>
          login
        </Button>
      </form>
    </div>
  );
};
