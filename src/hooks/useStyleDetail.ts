import { useCallback, useEffect, useState } from 'react';
import { GetStyleDetailInfo, StyleDetailInfo } from '@/features/dashboard/types';
import { loadStyleDetail } from '@/features/dashboard/api/styledetail';

export const useStyleDetail = () => {
  const [styleDetailDto, setStyleDetailDto] = useState<StyleDetailInfo | null>(null);
  const [paramsStyleDetail, setParamsStyleDetail] = useState<GetStyleDetailInfo>({
    pStyleMasterId: 1,
  });

  const handleSetParamsStyleDetail = useCallback((id: number) => {
    setParamsStyleDetail({ pStyleMasterId: id });
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await loadStyleDetail(paramsStyleDetail);
        setStyleDetailDto(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [paramsStyleDetail]);

  return { styleDetailDto, handleSetParamsStyleDetail };
};