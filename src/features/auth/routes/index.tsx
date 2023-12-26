import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Login } from '@/features/auth/routes/Login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
