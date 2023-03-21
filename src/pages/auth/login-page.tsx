import { Button, Icon, Input, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './login-page.module.scss';
import api from '../../api/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import errorIcon from '@mui/icons-material/ReportProblemOutlined';
import { ERROR_NAMES, IFormInput } from './types';

export const Login: React.FC = () => {
  const [responseError, setResponseError] = useState<Error | null>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    try {
      const response = await api.login(data);
      console.log(response);
      setResponseError(null);
      reset();
    } catch (error) {
      // check instance error for handling
      if (error instanceof Error && error.message === 'Incorrect credentials') {
        // update error state
        setResponseError(error);
      }
    }
  };
  //checking react-hook-form errors for button
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
            required: ERROR_NAMES.REQUIRED,
            maxLength: 20,
            minLength: {
              value: 6,
              message: ERROR_NAMES.MIN_LENGTH_EMAIL,
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: ERROR_NAMES.INCORRECT_FORMAT_EMAIL,
            },
          })}
          autoComplete={"off"}
          autoFocus={true}
          placeholder='email'
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
            required: ERROR_NAMES.REQUIRED,
            maxLength: 15,
            minLength: {
              value: 3,
              message: ERROR_NAMES.MIN_LENGTH_PASSWORD,
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
      {responseError && (
        <div className={styles.error}>
          <Icon component={errorIcon} color={'error'} />
          <p>{ERROR_NAMES.INCORRECT_CREDENTIALS}</p>
        </div>
      )}
    </div>
  );
};
