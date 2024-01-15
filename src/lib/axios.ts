import Axios, { InternalAxiosRequestConfig } from 'axios';

import storage from '@/utils/storage';
import { useNotificationStore } from '@/store/notifications';

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

axios.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(error);
    useNotificationStore.getState().addNotification({
      duration: 2000,
      type: 'error',
      message: 'Error : ' + message,
    });
    if (error.response.status === 403) {
      if (storage.getToken() != null) {
        storage.clearToken();
        setTimeout(() => {
          window.location.replace((window.location.origin) as unknown as string);
        }, 2000);
      }
    }
    return Promise.reject(error);
  }
);
