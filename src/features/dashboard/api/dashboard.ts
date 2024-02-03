import { GetOverViewInfo, TableInfo } from '@/features/dashboard/types';
import { axios } from '@/lib/axios';
import { ResponseAPI } from '@/utils/responseType';

// export interface DashboardRequestDto {
//   pPageIndex: number,
//   pPageSize: number,
//   pCustomerCode: string
// }

export const executeDashboard = (params: GetOverViewInfo): Promise<ResponseAPI<TableInfo>> => {
  return axios.get('/style-master', {params:params});
};

async function loadDashBoard(params: GetOverViewInfo) {
  return await executeDashboard(params);
}

export { loadDashBoard };