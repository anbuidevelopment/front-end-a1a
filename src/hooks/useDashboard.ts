import { useEffect, useState } from 'react';

import { loadDashBoard } from '@/features/dashboard/api/dashboard';
import { FilterData, Data } from './types/index';

export const useDashboard = (filterData: FilterData) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [downTimeData, setDownTimeData] = useState<any>({
    rows: [],
    columns: [],
    totalElements: 0,
  });

  const [p, setP] = useState(filterData?.page || 0);
  const [s, setS] = useState(filterData?.pageSize || 15);
  const [position, setPosition] = useState(filterData?.position || null);
  const [location, setLocation] = useState(filterData?.location || null);

  useEffect(() => {
    setP(filterData?.page || 0);
    setS(filterData?.pageSize || 15);
    setPosition(filterData?.position || null);
    setLocation(filterData?.location || null);
  }, [filterData?.page, filterData?.pageSize, filterData?.position, filterData?.location]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      let data: Data = { p, s };
      if (position) {
        data = { ...data, position };
      }
      if (location) {
        data = { ...data, location };
      }
      try {
        const result = await loadDashBoard(data);
        setDownTimeData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      setTimeout(getData, 5 * 60 * 1000);
    };
    getData();
  }, [p, s, position, location]);

  return {
    loading,
    downTimeData,
  };
};
