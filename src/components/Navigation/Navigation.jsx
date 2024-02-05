import React from 'react';
import { useSelector } from 'react-redux';
import {selectAuthIsLoggedIn} from '../../redux/auth/authSlice.selectors';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';


const Navigation = () => {
 const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div>
      <ul className={css.navList}>
        {isLoggedIn ? (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.navLink} ${isActive ? css.active : ''}`
              }
              to="/contacts"
            >
              Phonebook
            </NavLink>
          </>
        ) : (
          <div className={css.navLinks}>
            <NavLink className={({ isActive }) =>
                `${css.navLink} ${isActive ? css.active : ''}`
              } to="/">Home</NavLink>
          <NavLink
              className={({ isActive }) =>
                `${css.navLink} ${isActive ? css.active : ''}`
              }
              to="/register"
            >
              Sign up
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${css.navLink} ${isActive ? css.active : ''}`
              }
              to="/login"
            >
             Sign in
            </NavLink>
             </div>
        )}
        <Outlet />
      </ul>
    </div>
);

};

export default Navigation;