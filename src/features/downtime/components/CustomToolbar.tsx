import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  // GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import { formatYYMMDD } from '@/utils/format';
import { LoaderData } from '../types';

import { Button, Grid, Autocomplete, TextField } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SearchOutlined } from '@mui/icons-material';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import RefreshIcon from '@mui/icons-material/Refresh';
import dayjs from 'dayjs';
import storage from '@/utils/storage';

import { executeGetFilter } from '@/features/downtime/api/filter';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export function CustomToolbar({
  sendSearchedData,
  id,
}: {
  sendSearchedData: (loadedData: LoaderData | []) => void;
  id: string;
}) {
  const [selectedDate, handleDateChange] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null]>([
    dayjs(),
    dayjs(),
  ]);

  const [data, setData] = useState<any>({});
  const [factoryKeys, setFactoryKeys] = useState<string[]>([]);
  const [factory, setFactory] = useState<string | null>(storage.getToken(`factory-${id}`) || null);
  const [lineOptions, setLineOptions] = useState<string[]>(
    storage.getToken(`setLineOptions-${id}`) || []
  );
  const [line, setLine] = useState<string | null>(storage.getToken(`line-${id}`) || null);

  useEffect(() => {
    getData()
      .then((data: any) => {
        setData(data);
        if (data && data.contents && data.contents.dataList) {
          const keys = Object.keys(data.contents.dataList[0]);
          setFactoryKeys(keys);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function getData() {
    let result = await executeGetFilter();
    return result;
  }

  const handleLoadData = useCallback(() => {
    const dates = selectedDate.map((date: any) => formatYYMMDD(date));

    storage.setToken(`factory-${id}`, factory);
    storage.setToken(`line-${id}`, line);
    storage.setToken(`setLineOptions-${id}`, lineOptions);

    let loadedData: LoaderData = {};
    if (dates) {
      if (dates[0] !== 'Invalid Date') {
        loadedData.startDate = dates[0];
      }

      if (dates[1] !== 'Invalid Date') {
        loadedData.endDate = dates[1];
      }
    }
    if (factory) {
      loadedData.factory = factory;
    } else {
      storage.clearToken(`factory-${id}`);
    }
    if (line) {
      loadedData.line = line;
    } else {
      storage.clearToken(`line-${id}`);
    }

    sendSearchedData(loadedData);
  }, [factory, id, line, selectedDate, sendSearchedData, lineOptions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    handleLoadData();
  }, []);

  const handleRefresh = () => {
    handleDateChange([null, null]);
    setFactory(null);
    setLineOptions([]);
    setLine(null);
    sendSearchedData([]);
    storage.clearToken(`factory-${id}`);
    storage.clearToken(`line-${id}`);
    storage.clearToken(`setLineOptions-${id}`);
  };

  return (
    <GridToolbarContainer>
      <Grid container justifyContent={'left'} alignItems={'stretch'} spacing={1} direction={'row'}>
        <Grid item xs={12} md={12} mt={2} ml={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid
              container
              direction={'row'}
              spacing={1}
              justifyContent={'left'}
              gap={4}
              alignItems={'stretch'}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                  <DateRangePicker
                    disableFuture
                    format="DD/MM/YYYY"
                    localeText={{ start: 'Start Time', end: 'End Time' }}
                    value={selectedDate}
                    sx={{ width: 430 }}
                    onChange={(date) => handleDateChange(date)}
                  />

                  <Button
                    sx={{
                      margin: '0 !important',
                      padding: '0 !important',
                      color: ' #96B6C5 !important',
                    }}
                    onClick={() => handleDateChange([null, null])}
                  >
                    <i>
                      <EventBusyIcon fontSize="small" />
                    </i>
                  </Button>
                </DemoContainer>
              </LocalizationProvider>
              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={factory}
                  options={factoryKeys}
                  sx={{ width: 200 }}
                  onChange={(event, newValue) => {
                    setFactory(null);
                    setLineOptions([]);
                    setLine(null);

                    if (newValue !== null) {
                      setFactory(newValue);
                      // storage.setToken(`factory-${id}`, newValue);
                      const selectedOptions = data.contents.dataList[0][newValue];
                      // storage.setToken(`setLineOptions-${id}`, selectedOptions);
                      storage.clearToken(`line-${id}`);
                      if (selectedOptions) {
                        setLineOptions(selectedOptions);
                      }
                    }
                  }}
                  renderInput={(params) => <TextField {...params} label="Factory" />}
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={line}
                  options={lineOptions}
                  sx={{ width: 200 }}
                  onChange={(event, newValue) => {
                    setLine(null);
                    if (newValue !== null) {
                      setLine(newValue);
                      // storage.setToken(`line-${id}`, newValue);
                    }
                  }}
                  renderInput={(params) => <TextField {...params} label="Line" />}
                />
              </Grid>

              <Grid item xs={12} md={1.5}>
                <Button
                  onClick={handleLoadData}
                  sx={{ height: 55, width: 200, backgroundColor: '#D2E0FB', color: '#400D51' }}
                  variant={'contained'}
                  startIcon={<SearchOutlined />}
                >
                  Search
                </Button>
              </Grid>
              <Grid item xs={12} md={1.5}>
                <Button
                  onClick={handleRefresh}
                  sx={{ height: 55, width: 200, backgroundColor: '#99BC85', color: '#F4EEFF' }}
                  variant={'contained'}
                  startIcon={<RefreshIcon />}
                >
                  Refresh
                </Button>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Grid>
        <Grid mt={2} ml={1.5} mb={0.5} container direction={'row'} gap={1.8}>
          <GridToolbarColumnsButton sx={{ color: '#4E709D' }} />
          <GridToolbarDensitySelector sx={{ color: '#4E709D' }} />
          <GridToolbarExport sx={{ color: '#4E709D' }} />
          {/* <GridToolbarFilterButton
            sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: '0.5px solid #1976d2' }}
          /> */}
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
}
