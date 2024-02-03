import { GetStyleDetailInfo, StyleDetailInfo } from '@/features/dashboard/types';
import { axios } from '@/lib/axios';
import { ResponseAPI } from '@/utils/responseType';

export const executeStyleDetail = (params:GetStyleDetailInfo):Promise<ResponseAPI<StyleDetailInfo>> => {
  return axios.get('/style-master/style-details',{params:params})
}

async function loadStyleDetail(params: GetStyleDetailInfo) {
  return await executeStyleDetail(params)
}
export {loadStyleDetail}