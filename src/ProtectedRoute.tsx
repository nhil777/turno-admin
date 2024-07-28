import { ReactElement } from 'react';
import { Navigate } from "react-router-dom";
import { isAuthenticated } from './services/Auth';

interface ProtectedRouteI {
  element: ReactElement;
}

export const ProtectedRoute = ({ element }: ProtectedRouteI) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};
