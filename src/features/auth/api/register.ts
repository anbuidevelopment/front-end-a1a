import { axios } from '@/lib/axios';
import { AuthAccount } from '@/features/auth/types';

export type RegisterCredentialsDTO = {
  username: string;
  password: string;
};

export const executeRegister = (data: RegisterCredentialsDTO): Promise<AuthAccount> => {
  return axios.post('/auth/register', data);
};
