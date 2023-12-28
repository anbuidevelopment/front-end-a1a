import {axios} from '@/lib/axios';
import {ResponseAPI} from "@/utils/responseType";

export type RegisterCredentialsDTO = {
  username: string;
  password: string;
  fullName: string;
  position: string;
  department: string;
  email: string;
  gender: string;
};

export const executeRegister = (data: RegisterCredentialsDTO): Promise<ResponseAPI<any>> => {
  return axios.post('/auth/register', data);
};
