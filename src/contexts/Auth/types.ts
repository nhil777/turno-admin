import { Dispatch, ReactNode } from "react";

export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<boolean>;
}

export interface AuthProviderProps {
    children: ReactNode;
}