import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DeleteOutline,
  FileDownloadOutlined,
  FileUploadOutlined,
  RefreshOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import dayjs, { Dayjs } from 'dayjs';
import { CustomToolbarStatus, FilterInfo, GetFilterInfo } from '@/features/dashboard/types';
import { loadGetFilter } from '@/features/dashboard/api/getfilter';
import { MuiAutocompleteGetFilter } from '@/features/dashboard/components/Elements/AutoCompleteGetFilter';
import { storageFilter } from '@/utils/storage';
import { useUser } from '@/lib/auth';


export const CustomToolbar = ({ deleteStatus, idDelete, handleSetParamsSearch }: CustomToolbarStatus) => {

  const user = useUser();
  let customerCode = user?.data?.customerCode === undefined ? 'AD' : user.data.customerCode;
  const [pFromDate, setPFromDate] = useState<Dayjs | null>(dayjs().subtract(2, 'months'));
  const [pToDate, setPToDate] = useState<Dayjs | null>(dayjs());
  const [isNeedLoading, setLoading] = useState(true);
  const [filterDataDto, setFilterDataDto] = useState<FilterInfo>();
  const [searchValue, setSearchValue] = useState<GetFilterInfo | null>(null);

  function handleClickDelete() {
    idDelete.map((id: any) => {
      console.log(id.styleMasterCode);
    });
  }

  useEffect(() => {
    if (isNeedLoading) {
      getData()
        .then((value: FilterInfo) => {
          setFilterDataDto(value);
        })
        .catch(console.error);
    }
  }, []);

  async function getData() {
    let result = await loadGetFilter({
      pCustomerCode: customerCode,
    });
    setLoading(false);

    const mapColumns = ['Season', 'ProductType', 'FactoryAllocation', 'Stage', 'MerAccountName', 'StyleMasterCode', 'Status', 'OptionNo', 'BondingProcess', 'A1ARouteNumber', 'CustomerPatternCode', 'TACRouteNumber', 'CustomerCode'];
    const mapToDto = (column: string) =>
      (result?.content || [])
        .filter((filter: GetFilterInfo) => filter.columnName === column)
        .map((filter) => ({
          id: filter.id,
          columnName: filter.columnName,
          value: filter.value,
        }));
    mapColumns.forEach((column) => {
      const dataDto = mapToDto(column);
      storageFilter.setData(column, dataDto);
    });

    return result;
  }

  function handleClickSearch() {
    if (searchValue) {
      handleSetParamsSearch(searchValue);
    }
  }

  function handleClickRefresh() {
    console.log('refresh');
    handleSetParamsSearch({
      id: 1,
      columnName: 'pCustomerCode',
      value: customerCode,
    });
  }

  return (
    <GridToolbarContainer>
      <Grid container
            justifyContent={'left'}
            alignItems={'stretch'}
            spacing={1}
            direction={'row'}>
        <Grid item xs={12} md={12}>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container
                  direction={'row'}
                  spacing={1}
                  justifyContent={'left'}
                  alignItems={'stretch'}>
              <Grid item xs={12} md={1.5}>
                <DatePicker
                  value={pFromDate}
                  onChange={(newValue) => setPFromDate(newValue)}
                  className={'w-64'}
                  format={'YYYY-MM-DD'}
                  slotProps={{ textField: { size: 'small' } }}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <DatePicker
                  value={pToDate}
                  onChange={(newValue) => setPToDate(newValue)}
                  className={'w-64'}
                  format={'YYYY-MM-DD'}
                  slotProps={{ textField: { size: 'small' } }}
                />
              </Grid></Grid>
          </LocalizationProvider>

        </Grid>
        <Grid item xs={12} md={2}>
          <MuiAutocompleteGetFilter labelname={'Search'}
                                    data={filterDataDto}
                                    value={searchValue}
                                    setValue={(newValue) => setSearchValue(newValue)} />
        </Grid>
        <Grid item xs={12} md={1.2}>
          <Button onClick={handleClickSearch}
                  fullWidth
                  sx={{ height: '54px', backgroundColor: '#FDCF76', color: 'black' }}
                  variant={'contained'}
                  startIcon={<SearchOutlined />}>search</Button>
        </Grid>
        <Grid item xs={12} md={1.3}>
          <Button onClick={handleClickRefresh}
                  fullWidth sx={{ height: '54px', backgroundColor: '#FDCF76', color: 'black' }}
                  variant={'contained'}
                  startIcon={<RefreshOutlined />}>refresh</Button>
        </Grid>
        <Grid item xs={12} md={1.8}>
          <Button fullWidth
                  sx={{ height: '54px', backgroundColor: '#FDCF76', color: 'black' }}
                  variant={'contained'}
                  startIcon={<FileUploadOutlined />}>Import excel</Button>
        </Grid>
        <Grid item xs={12} md={1.8}>
          <Button fullWidth
                  sx={{ height: '54px', backgroundColor: '#FDCF76', color: 'black' }}
                  variant={'contained'}
                  startIcon={<FileDownloadOutlined />}>Export excel</Button>
        </Grid>
        <Grid item xs={12} md={1.3}>
          <Button onClick={handleClickDelete} disabled={deleteStatus} fullWidth
                  sx={{ height: '54px', color: 'white', backgroundColor: 'red' }}
                  variant={'contained'} startIcon={<DeleteOutline />}>delete</Button>
        </Grid>
      </Grid>

    </GridToolbarContainer>
  );
};