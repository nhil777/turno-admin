import axios from 'axios';
import { getToken } from './Auth';

const Api = axios.create({
  baseURL: 'http://localhost/api/v1',
});

Api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
});

export default Api;
