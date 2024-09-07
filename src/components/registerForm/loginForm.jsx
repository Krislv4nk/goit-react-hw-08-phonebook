
import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from './../../redux/auth/authSlice.operations';
import Notiflix from 'notiflix';
import css from './registerForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    if (!formData.email || !formData.password) {
      return Notiflix.Notify.failure('All fields must be filled out');
    }
    dispatch(apiLoginUser(formData));
  };

  return (
    <form noValidate onSubmit={onSubmit} className={css.formContainer}>
      <input className={css.input}
        type="email"
        name="email"
        placeholder="Email"
        required
        autoComplete="email"
        autoFocus
      />
      <input className={css.input}
        type="password"
        name="password"
        placeholder="Password"
        required
        autoComplete="current-password"
      />
      <button type="submit" className={css.submitButton}>Sign In</button>
    </form>
  );
};

export default LoginForm;
