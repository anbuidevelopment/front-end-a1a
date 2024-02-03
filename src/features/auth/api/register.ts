import { axios } from '@/lib/axios';
import { AuthAccount } from '@/features/auth/types';
import { ResponseAPI } from '@/utils/responseType';

export type RegisterCredentialsDTO = {
  username: string;
  password: string;
};

export const executeRegister = (data: RegisterCredentialsDTO): Promise<ResponseAPI<AuthAccount>> => {
  return axios.post('/auth/register', data);
};
