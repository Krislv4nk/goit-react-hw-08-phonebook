import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice.operations';
import {
  selectAuthIsLoading,
  selectAuthUserData,
} from '../../redux/auth/authSlice.selectors';
import css from './UserMenu.module.css';


const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? "Could't get user email";
  return (
    <div className={css.container}>
      <p className={css.user}>{userEmail}</p>
      <button className={css.button} onClick={handleLogOut} disabled={isLoading} type="button">
        Logout
      </button>
    </div>
  );
};



export default UserMenu;