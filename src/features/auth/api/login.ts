import { axios } from '@/lib/axios';
import { AccountResponse } from '../types';
import { ResponseAPI } from '@/utils/responseType';

export interface LoginRequestDTO {
  username: string;
  password: string;
}

export const executeLogin = (request: LoginRequestDTO): Promise<ResponseAPI<AccountResponse>> => {
  return axios.post('/auth', request);
};
