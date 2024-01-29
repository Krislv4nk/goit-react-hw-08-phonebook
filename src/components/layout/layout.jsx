import React from 'react';
import { useSelector } from 'react-redux';

import  Navigation  from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';



export const Layout = ({ children }) => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
 
  return (
    <div>
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>

      <main>{children}</main>
      <footer>Copyright</footer>
    </div>
  );
};