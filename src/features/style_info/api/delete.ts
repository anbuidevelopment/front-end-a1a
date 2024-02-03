import { UpdateRequestDto } from '@/features/style_info/api/update';
import { ResponseAPI } from '@/utils/responseType';
import { UpdateResponse } from '@/features/style_info';
import { axios } from '@/lib/axios';
export interface requestDto {
  styleMasterId:number,
  isActive:0
}

export const executeDeleteStyleMaster=(params:UpdateRequestDto,request:requestDto[]):Promise<ResponseAPI<UpdateResponse>> =>{
  return axios.post('/style-master/config-data', request, { params: params });
}

async function deleteStyleMaster(params:UpdateRequestDto,request:requestDto[]){
  return await  executeDeleteStyleMaster(params,request)
}

export {deleteStyleMaster}
