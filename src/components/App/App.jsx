import React, { useEffect,Suspense, lazy, } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from '../../redux/auth/authSlice.operations';
import  RestrictedRoute  from 'components/RestrictedRoute/RestrictedRoute';
import  PrivateRoute  from 'components/PrivateRoute/PrivateRoute';
import { Layout } from 'components/layout/layout';
import { Loader } from 'components/loader/loader';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
    return (
        <Layout>
            <Suspense fallback={<Loader />}>
                <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/register" element={<RestrictedRoute><RegisterPage /></RestrictedRoute>} />
                <Route path="/login" element={<RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>}/>
                    <Route path="/contacts" element={<PrivateRoute>
                <ContactsPage />
              </PrivateRoute>}/>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            </Suspense>
        </Layout>
      
    );
  }


