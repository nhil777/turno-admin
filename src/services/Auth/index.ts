import { LoginData } from '../../components/LoginForm/types';
import API from '../Api';

const TOKEN_KEY = 'turno';

export const checkAuthStatus = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = async (loginData: LoginData): Promise<boolean> => {
    const { data: response } = await API.post('/login', loginData);
    const token = response.data.token;

    localStorage.setItem(TOKEN_KEY, token);

    return true;
};

export const logout = async (): Promise<boolean> => {
    await API.post('/logout');

    localStorage.removeItem(TOKEN_KEY);

    return true;
}
