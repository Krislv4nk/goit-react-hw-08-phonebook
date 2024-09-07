import React from "react";
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from './../../redux/auth/authSlice.operations';
import Notiflix from 'notiflix';
import css from './registerForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      name: data.get('firstName') + ' ' + data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    if (!formData.name || !formData.email || !formData.password) {
      return Notiflix.Notify.failure('All fields must be filled out');
    }

    dispatch(apiRegisterUser(formData));
  };

  return (
    <form noValidate onSubmit={onSubmit} className={css.formContainer}>
      <div className={css.formField}>
        <label className={css.label} htmlFor="firstName">First Name</label>
        <input className={css.input}
          type="text"
          id="firstName"
                  name="firstName"
                  placeholder="First name"
          required
          autoFocus
        />
      </div>
      <div className={css.formField}>
        <label htmlFor="lastName" className={css.label}>Last Name</label>
        <input className={css.input}
          type="text"
          id="lastName"
                  name="lastName"
                  placeholder="Last name"
          required
        />
      </div>
      <div className={css.formField}>
        <label htmlFor="email" className={css.label}>Email Address</label>
        <input className={css.input}
          type="email"
          id="email"
                  name="email"
                  placeholder="Email"
          required
        />
      </div>
      <div className={css.formField}>
        <label htmlFor="password" className={css.label}>Password</label>
        <input className={css.input}
          type="password"
          id="password"
                  name="password"
                  placeholder="Password"
          required
        />
      </div>
      <button type="submit" className={css.submitButton}>Sign Up</button>
    </form>
  );
};

export default RegisterForm;
