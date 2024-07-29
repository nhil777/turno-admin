import { ReactElement } from 'react';
import { Navigate } from "react-router-dom";
import { checkAuthStatus } from './services/Auth';

interface ProtectedRouteI {
  element: ReactElement;
}

export const ProtectedRoute = ({ element }: ProtectedRouteI) => {
  return checkAuthStatus() ? element : <Navigate to="/login" />;
};
