import { GetOverViewInfo, TableInfo } from '@/features/dashboard/types';
import { axios } from '@/lib/axios';

export const executeSearchDashBoard = (params:GetOverViewInfo):Promise<TableInfo> => {
  return axios.get('/style-master/search-over-view',{params:params})
}
async function loadSearchDashBoard(params:GetOverViewInfo) {
  return await executeSearchDashBoard(params)
}

export {loadSearchDashBoard}