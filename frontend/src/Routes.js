import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/LoginPage';
import Signup from './components/SignupPage';

function AppRoutes() {
  return (
    <Routes>
      
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Navigate to="/login" />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRoutes;
