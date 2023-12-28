import Axios, { InternalAxiosRequestConfig } from 'axios';

import storage from '@/utils/storage';

const API_URL = process.env.REACT_APP_API_URL as string;

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
