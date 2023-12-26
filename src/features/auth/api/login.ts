import { axios } from '@/lib/axios';
import { AccountResponse } from '../types';

export interface LoginRequestDTO {
  username: string;
  password: string;
}

export const executeLogin = (request: LoginRequestDTO): Promise<AccountResponse> => {
  return axios.post('/auth', request);
};
