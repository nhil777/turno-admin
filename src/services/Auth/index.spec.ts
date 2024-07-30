import { login, logout, checkAuthStatus, getToken } from './index';
import { Login as LoginType } from '../../components/LoginForm/types';
import API from '../Api';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(API);

const clearLocalStorage = () => {
  localStorage.clear();
};

describe('Auth service', () => {
    const TOKEN_KEY = 'turno';
    const mockToken = 'mock-token';

    afterEach(() => {
        mock.reset();
        clearLocalStorage();
    });

    it('should return false if user is not authenticated', () => {
        expect(checkAuthStatus()).toBe(false);
    });

    it('should return true if user is authenticated', () => {
        localStorage.setItem(TOKEN_KEY, mockToken);
        expect(checkAuthStatus()).toBe(true);
    });

    it('should return null if no token is found', () => {
        expect(getToken()).toBeNull();
    });

    it('should return the token if it exists', () => {
        localStorage.setItem(TOKEN_KEY, mockToken);
        expect(getToken()).toBe(mockToken);
    });

    it('should login and set token in localStorage', async () => {
        const loginData: LoginType = { email: 'jest@unit.test', password: 'password' };
        const mockResponse = { data: { token: mockToken } };

        mock.onPost('/login').reply(200, mockResponse);

        const result = await login(loginData);

        expect(result).toBe(true);
        expect(localStorage.getItem(TOKEN_KEY)).toBe(mockToken);
    });

    it('should logout and remove token from localStorage', async () => {
        localStorage.setItem(TOKEN_KEY, mockToken);

        mock.onPost('/logout').reply(200);

        const result = await logout();

        expect(result).toBe(true);
        expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
    });
});
