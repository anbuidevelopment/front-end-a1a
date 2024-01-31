import { useState, useEffect, useContext, useCallback } from 'react';
import { useSelector } from 'react-redux';
import storage from '@/utils/storage';
import { ColorModeContext } from '@/context/color-mode-context';
import { loadDownTime } from '@/features/downtime/api/downtime';

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

type Status = 'Chờ Sửa' | 'Sửa Xong' | 'Đang Sửa';

interface Item {
  location: string;
  status: Status;
}

export function Charts() {
  const factory = storage.getToken(`factory-summary`) || null;

  const [data, setData] = useState<[]>([]);

  const [charts, setCharts] = useState<any[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [downTimeData, setDownTimeData] = useState<any>({
    rows: [],
    columns: [],
    totalElements: 0,
  });

  const { page, pageSize, startDate, endDate } = useSelector(
    (state: any) => state.downtime.chartData
  );

  const getData = useCallback(async (data: any) => {
    let loadData: any = {
      p: data.page || 0,
      s: data.pageSize || 100,
      f: data.factory,
      start: data.startDate,
      end: data.endDate,
    };

    try {
      const result = await loadDownTime(loadData);
      setDownTimeData(result);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => getData(data), 5 * 60 * 1000);
  }, []);

  useEffect(() => {
    if (factory) {
      getData({ page, pageSize, factory, startDate, endDate });
    }
  }, [page, pageSize, factory, startDate, endDate, getData]);

  useEffect(() => {
    if (downTimeData && downTimeData.headers && downTimeData.contents) {
      if (downTimeData.contents.totalElements === 0) {
        return;
      }

      const chartData = downTimeData.contents.dataList?.map((item: any) => {
        return {
          location: item.location,
          status: item.status,
        };
      });

      setData(chartData);
    }
  }, [downTimeData]);

  const ctx = useContext(ColorModeContext);

  const handle = useFullScreenHandle();

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement != null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const groupedData: Record<string, Record<Status, number>> = {};

    data.forEach((item: Item) => {
      if (data.length === 0) {
        return;
      }

      const { location, status } = item;

      if (!groupedData[location]) {
        groupedData[location] = { 'Đang Sửa': 0, 'Sửa Xong': 0, 'Chờ Sửa': 0 };
      }
      if (status === 'Đang Sửa' || status === 'Sửa Xong' || status === 'Chờ Sửa') {
        groupedData[location][status]++;
      } else {
        console.error(`Invalid status: ${status}`);
      }
    });

    const chartsArray = Object.keys(groupedData).map((location) => ({
      location,
      ...groupedData[location],
    }));

    setCharts(chartsArray);
  }, [data]);

  // console.log(charts);

  const chartSetting = {
    height: isFullscreen ? 700 : 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  const valueFormatter = (value: number) => `${value} máy`;

  return (
    <>
      {factory ? (
        <div>
          <button
            onClick={handle.enter}
            style={{
              position: 'fixed',
              right: '16px',
              border: 'none',
              padding: '12px 16px',
              backgroundColor: '#FEDEFF',
              zIndex: 10000,
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Fullscreen
          </button>
          <FullScreen handle={handle} className={ctx.mode === 'light' ? 'lightMode' : ''}>
            <h1>{factory || ''}</h1>
            <>
              {charts.length > 0 ? (
                <BarChart
                  dataset={charts}
                  xAxis={[{ scaleType: 'band', dataKey: 'location' }]}
                  colors={['#D04848', '#E9B824', '#597E52']}
                  series={[
                    { dataKey: 'Chờ Sửa', label: 'Chờ Sửa', type: 'bar', valueFormatter },
                    { dataKey: 'Đang Sửa', type: 'bar', label: 'Đang Sửa', valueFormatter },
                    { dataKey: 'Sửa Xong', type: 'bar', label: 'Sửa Xong', valueFormatter },
                  ]}
                  {...chartSetting}
                />
              ) : (
                <h3
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '200px',
                  }}
                >
                  Not Found
                </h3>
              )}
            </>

            <button
              onClick={handle.exit}
              style={{
                position: 'fixed',
                right: '16px',
                top: '16px',
                border: 'none',
                padding: '12px 16px',
                backgroundColor: '#FEDEFF',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Exit Fullscreen
            </button>
          </FullScreen>
        </div>
      ) : (
        <h1>Factory Not Found</h1>
      )}
    </>
  );
}
