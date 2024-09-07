import React from "react";
import RegisterForm from "./../components/registerForm/registerForm";
import Slideshow from './../components/SlideShow/SlideShow';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.cover}>
        <Slideshow />
      </div>
      <div>
        <div className={css.formContainer}>
          <h2 className={css.header}>Sign Up</h2>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;



