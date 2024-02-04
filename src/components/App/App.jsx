import React, { useEffect } from 'react';
// import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import { apiRefreshUser } from '../../redux/auth/authSlice.operations';
import  RestrictedRoute  from 'components/RestrictedRoute/RestrictedRoute';
import  PrivateRoute  from 'components/PrivateRoute/PrivateRoute';
import { Layout } from 'components/layout/layout';






export const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
    return (
      <Layout>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>}/>
                    <Route path="/contacts" element={<PrivateRoute>
                <ContactsPage />
              </PrivateRoute>}/>
            </Routes>
        </Layout>
      
    );
  }


