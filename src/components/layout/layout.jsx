import React from 'react';
import { useSelector } from 'react-redux';
import {selectAuthIsLoggedIn} from '../../redux/auth/authSlice.selectors';
import  Navigation  from 'components/Navigation/Navigation';
import  UserMenu  from 'components/UserMenu/UserMenu';



export const Layout = ({ children }) => {

    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
 
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '60px' }}>
      <Navigation />
        {isLoggedIn && <UserMenu />} 
      </header>

      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
