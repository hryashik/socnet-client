import { Button, Icon, Input, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './auth-page.module.scss';
import api from '../../api/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import errorIcon from '@mui/icons-material/ReportProblemOutlined';
import { ERROR_NAMES, IFormInput } from './types';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/fox.png'

export const SignupPage: React.FC = () => {
  const [responseError, setResponseError] = useState<Error | null>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    try {
      const response = await api.signup(data);
      console.log(response);
      setResponseError(null);
      reset();
      localStorage.setItem('token', response.access_token)
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
      <img className={styles.logo} src={logo} alt="" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography fontSize={25} variant='h3' fontFamily={"Roboto"}>
          Registration form
        </Typography>
        {/* <EMAIL INPUT> */}
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
          error={errors.hasOwnProperty('email')}
          autoComplete={'off'}
          autoFocus={false}
          placeholder='email'
        />
        {/* </EMAIL INPUT> */}
        {errors.email?.message && (
          <div className={styles.error}>
            <Icon component={errorIcon} color={'error'} />
            <p>{errors.email.message}</p>
          </div>
        )}
        <div className={styles.error}></div>
        {/* <PASWORD> */}
        <Input
          {...register('password', {
            required: ERROR_NAMES.REQUIRED,
            maxLength: 15,
            minLength: {
              value: 6,
              message: ERROR_NAMES.MIN_LENGTH_PASSWORD,
            },
          })}
          error={errors.hasOwnProperty('password')}
          placeholder='password'
          type='password'
        />
        {/* </PASWORD> */}
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
      <p className={styles.linkToRegistration}>
        <NavLink to={'/auth/login'}>У вас уже есть аккаунт?</NavLink>
      </p>
      {responseError && (
        <div className={styles.error}>
          <Icon component={errorIcon} color={'error'} />
          <p>{ERROR_NAMES.INCORRECT_CREDENTIALS}</p>
        </div>
      )}
    </div>
  );
};
