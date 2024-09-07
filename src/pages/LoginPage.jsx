
import React from 'react';
import LoginForm from './../components/registerForm/loginForm';
import Slideshow from 'components/SlideShow/SlideShow';
import css from './RegisterPage.module.css'

const LoginPage = () => {
  return (
   
      <div className={css.wrapper}>
        <div className={css.formContainer}>
          <h2 className={css.header}>Sign In</h2>
          <LoginForm />
      </div>
      <div className={css.cover}>
        <Slideshow />
      </div>
      </div>
   
  );
};

export default LoginPage;
