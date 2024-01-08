import { FilterInfo } from '@/features/dashboard/types';
import { axios } from '@/lib/axios';

export interface GetFilterRequestDto {
  pCustomerCode: string;
}

export const executeGetFilter = (params: GetFilterRequestDto): Promise<FilterInfo> => {
  return axios.get('/style-master/get-filter', { params: params });
};

async function loadGetFilter(params: GetFilterRequestDto) {
  return await executeGetFilter(params);
}

export { loadGetFilter };