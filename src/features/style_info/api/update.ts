import { axios } from '@/lib/axios';
import { StyleMasterConfigData, UpdateResponse } from '@/features/style_info';

export interface UpdateRequestDto {
  pAction: number,
  pCreatedBy: number,
  pOutput: number
}

export const executeUpdateStyleMasterCode = (params: UpdateRequestDto, request: StyleMasterConfigData[]):Promise<UpdateResponse> => {
  return axios.post('/style-master/config-data', request, { params: params });
};

async function updateStyleMaster(params: UpdateRequestDto, request: StyleMasterConfigData[]) {
  return await executeUpdateStyleMasterCode(params,request)
}

export {updateStyleMaster}
