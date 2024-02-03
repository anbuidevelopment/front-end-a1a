import { GetOverViewInfo, TableInfo } from '@/features/dashboard/types';
import { axios } from '@/lib/axios';
import { ResponseAPI } from '@/utils/responseType';

export const executeSearchDashBoard = (params:GetOverViewInfo):Promise<ResponseAPI<TableInfo>> => {
  return axios.get('/style-master/search-over-view',{params:params})
}
async function loadSearchDashBoard(params:GetOverViewInfo) {
  return await executeSearchDashBoard(params)
}

export {loadSearchDashBoard}