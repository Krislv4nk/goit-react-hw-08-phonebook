import React from 'react';
import { useSelector } from 'react-redux';
import {selectAuthIsLoggedIn} from '../../redux/auth/authSlice.selectors';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';


const Navigation = () => {
 const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div>
      <ul>
      {isLoggedIn ? (
        <li>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
      <Outlet />
      </ul>
    </div>
  );
};

export default Navigation;