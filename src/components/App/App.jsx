import React, { useEffect,Suspense, lazy, } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from '../../redux/auth/authSlice.operations';
import  RestrictedRoute  from 'components/RestrictedRoute/RestrictedRoute';
import  PrivateRoute  from 'components/PrivateRoute/PrivateRoute';
import { Layout } from 'components/layout/layout';
import { Loader } from 'components/loader/loader';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));



export const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
    return (
        <Layout>
            <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>}/>
                    <Route path="/contacts" element={<PrivateRoute>
                <ContactsPage />
              </PrivateRoute>}/>
            </Routes>
            </Suspense>
        </Layout>
      
    );
  }


