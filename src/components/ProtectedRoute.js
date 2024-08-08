// components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userToken'); // Check if the token is stored in localStorage
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
