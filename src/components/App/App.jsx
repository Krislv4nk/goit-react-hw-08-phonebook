import React from 'react';
// import css from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import { Layout } from 'components/layout/layout';






export const App = () => {
    return (
      <Layout>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />}/>
                    <Route path="/contacts" element={<ContactsPage />}/>
    

                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/register" />} />
            </Routes>
        </Layout>
      
    );
  }


