import { LoginData } from '../../components/LoginForm/types';
import API from '../Api';

const TOKEN_KEY = 'turno';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = async (loginData: LoginData): Promise<boolean> => {
    try {
        const response = await API.post('/login', loginData);
        const token = response.data.data.token;

        localStorage.setItem(TOKEN_KEY, token);

        return true;
    } catch (error) {
        console.error('Auth/index.ts@login', error);

        return false;
    }
};

export const logout = async (): Promise<boolean> => {
    try {
        await API.post('/logout');

        localStorage.removeItem(TOKEN_KEY);

        return true;
    } catch (error) {
        console.error('Auth/index.ts@logout', error);

        return false;
    }
}
