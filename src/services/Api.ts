import axios from 'axios';
import { getToken } from './Auth';

const API = axios.create({
  baseURL: 'http://localhost/api/v1',
});

API.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
