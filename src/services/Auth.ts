const KEY = 'turno';

export const isAuthenticated = () => localStorage.getItem(KEY) !== null;
export const getToken = () => localStorage.getItem(KEY);
export const login = (token: string) => localStorage.setItem(KEY, token);
export const logout = () => localStorage.removeItem(KEY);
