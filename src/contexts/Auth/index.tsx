import { createContext, useState, useEffect } from 'react';
import { checkAuthStatus } from '../../services/Auth';
import { AuthContextType, AuthProviderProps } from './types';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const initializeAuth = () => {
      const status = checkAuthStatus();
      setIsAuthenticated(status);
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
