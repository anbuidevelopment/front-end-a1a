import { useEffect, useState } from 'react';
import { GetStyleDetailInfo, StyleDetailInfo } from '@/features/dashboard/types';
import { loadStyleDetail } from '@/features/dashboard/api/styledetail';

export const useStyleDetail = () => {
  const [styleDetailDto,setStyleDetailDto]=useState<StyleDetailInfo|null>(null)
  const [paramsStyleDetail,setParamsStyleDetail]=useState<GetStyleDetailInfo>({
    pStyleMasterId:1
  })

  useEffect(()=>{
    const getData=async () => {
      try {
        let result = await loadStyleDetail(paramsStyleDetail)
        setStyleDetailDto(result)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  },[paramsStyleDetail])


  return{styleDetailDto}
}