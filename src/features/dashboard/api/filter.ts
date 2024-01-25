import { axios } from '@/lib/axios';

export const executeGetFilter = () => {
  return axios.get('/fac');
};
