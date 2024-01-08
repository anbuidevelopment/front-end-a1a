import { GetOverViewInfo, TableInfo } from '@/features/dashboard/types';
import { axios } from '@/lib/axios';

// export interface DashboardRequestDto {
//   pPageIndex: number,
//   pPageSize: number,
//   pCustomerCode: string
// }

export const executeDashboard = (params: GetOverViewInfo): Promise<TableInfo> => {
  return axios.get('/style-master', {params:params});
};

async function loadDashBoard(params: GetOverViewInfo) {
  return await executeDashboard(params);
}

export { loadDashBoard };