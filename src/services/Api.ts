import axios from 'axios';
import { getToken } from './Auth';

const API = axios.create({
  baseURL: 'http://127.0.0.1:3333'
});

API.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
