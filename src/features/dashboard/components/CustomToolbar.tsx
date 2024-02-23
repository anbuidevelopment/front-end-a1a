import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DeleteOutline, DeleteSharp,
  PlaylistAddSharp,
  RefreshSharp,
  SearchSharp, UpdateSharp,
} from '@mui/icons-material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import dayjs, { Dayjs } from 'dayjs';
import { CustomToolbarStatus, FilterInfo, GetFilterInfo } from '@/features/dashboard/types';
import { loadGetFilter } from '@/features/dashboard/api/getfilter';
import { MuiAutocompleteGetFilter } from '@/features/dashboard/components/Elements/AutoCompleteGetFilter';
import { storageFilter } from '@/utils/storage';
import { useUser } from '@/lib/auth';
import { StyleInfoForm } from '@/features/style_info/components/StyleInfoForm';
import { MuiDialog } from '@/components/Elements';
import { UpdateRequestDto } from '@/features/style_info/api/update';
import { DeleteForm } from '@/features/dashboard/components/Elements/DeleteForm';
import { enqueueSnackbar } from 'notistack';
import { deleteStyleMaster } from '@/features/style_info/api/delete';
import { customColorDefault, customStyles } from '@/utils/format';

export const CustomToolbar = ({
                                deleteStatus,
                                idDelete,
                                handleSetParamsSearch,
                                handleSetParamsStyleDetail,
                                styleDetailDto,
                              }: CustomToolbarStatus) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const user = useUser();
  let customerCode = user?.data?.customerCode === undefined ? 'AD' : user.data.customerCode;
  const [pFromDate, setPFromDate] = useState<Dayjs | null>(dayjs().subtract(2, 'months'));
  const [pToDate, setPToDate] = useState<Dayjs | null>(dayjs());
  const [isNeedLoading, setLoading] = useState(true);
  const [filterDataDto, setFilterDataDto] = useState<FilterInfo>();
  const [searchValue, setSearchValue] = useState<GetFilterInfo | null>(null);
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [isDialogDelete, setIsDialogDelete] = useState<boolean>(false);
  const [isAction, setIsAction] = useState<number>(1);

  type requestBody = { styleMasterId: number, isActive: 0 }
  const requestDto: requestBody[] = idDelete.map(({ styleMasterId, isActive = 0 }: any) => ({
    styleMasterId,
    isActive,
  }));
  const paramsDelete: UpdateRequestDto = {
    pAction: 3,
    pCreatedBy: user.data?.id != null ? user.data.id : 1,
    pOutput: 1,
  };

  function handleClickDelete() {
    setIsDialogDelete(true);
  }

  function handleClickUpdate() {
    if (idDelete.length == 1) {
      handleSetParamsStyleDetail(idDelete[0].styleMasterId);
      setIsAction(2);
      setIsDialog(true);
    }
  }

  function handleClickInsert() {
    // idDelete.map((id: any) => {
    //   console.log(id.styleMasterCode);
    // });
    handleSetParamsStyleDetail(idDelete[0].styleMasterId);
    setIsAction(1);
    setIsDialog(true);
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
      (result?.data?.content || [])
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

    return result?.data;
  }

  function handleClickSearch() {
    if (searchValue) {
      handleSetParamsSearch(searchValue);
    }
  }

  function handleClickRefresh() {
    handleSetParamsSearch({
      id: 1,
      columnName: 'pCustomerCode',
      value: customerCode,
    });
  }

  const handleClickDialogDelete = async () => {
    // console.log(paramsDelete)
    // console.log(requestDto);
    const response = await deleteStyleMaster(paramsDelete, requestDto);
    console.log(response.message);
    enqueueSnackbar(response.message === 'Error !' ? 'Error !' : 'Delete Complete',
      {
        variant: response.message === 'Error !' ? 'error' : 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      });
  };
  return (
    <GridToolbarContainer>
      <Grid container
            justifyContent={'left'}
            alignItems={'flex-end'}
            spacing={0.5}
            direction={'row'}>
        <Grid item xs={12} md={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container
                  direction={'row'}
                  spacing={1}
                  justifyContent={'left'}
                  alignItems={'stretch'}>
              <Grid item xs={12} md={1.8}>
                <DatePicker
                  sx={{ width: '100%' }}
                  value={pFromDate}
                  onChange={(newValue) => {setPFromDate(newValue);
                  handleSetParamsSearch({id:1,columnName:'pFromDate',value:newValue===null ? dayjs().subtract(2,'months').format('YYYY-MM-DD') : newValue.format('YYYY-MM-DD')})}}
                  format={'YYYY-MM-DD'}
                  slotProps={{ textField: { size: 'small' } }}
                />
              </Grid>
              <Grid item xs={12} md={1.8}>
                <DatePicker
                  sx={{ width: '100%'}}
                  value={pToDate}
                  onChange={(newValue) => {
                    setPToDate(newValue);
                    handleSetParamsSearch({id:1,columnName:'pToDate',value:newValue===null ? dayjs().format('YYYY-MM-DD') : newValue.format('YYYY-MM-DD')})
                  }}
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
        <Grid item xs={12} md={1.1} sx={{justifyContent:'flex-end',alignItems:'bottom',height:'100%'}}>
          <Button onClick={handleClickSearch}
                  fullWidth
                  size={'medium'}
                  startIcon={<SearchSharp />}>Search</Button>
        </Grid>
        <Grid item xs={12} md={1.1}>
          <Button onClick={handleClickRefresh}
                  fullWidth
                  size={'medium'}
                  variant={'outlined'}
                  startIcon={<RefreshSharp />}>Refresh</Button>
        </Grid>
        <Grid item xs={12} md={1.1} sx={{ display: idDelete.length === 1 ? null : 'none' }}>
          <Button onClick={handleClickUpdate} disabled={deleteStatus} fullWidth size={'medium'}
                  sx={{ display: idDelete.length === 1 ? null : 'none' }}
                  variant={'outlined'} startIcon={<UpdateSharp />}>Update</Button>
        </Grid>
        <Grid item xs={12} md={1.1} sx={{ display: idDelete.length === 1 ? null : 'none' }}>
          <Button onClick={handleClickInsert} disabled={deleteStatus} fullWidth size={'medium'}
                  sx={{ display: idDelete.length === 1 ? null : 'none' }}
                  variant={'outlined'} startIcon={<PlaylistAddSharp />}>Insert</Button>
        </Grid>
        <Grid item xs={12} md={1.1}>
          <Button onClick={handleClickDelete}
                  disabled={deleteStatus}
                  fullWidth
                  size={'medium'}
                  sx={{
                    display: idDelete.length >= 1 ? null : 'none',
                    backgroundColor:customStyles['colorButtonDelete'],
                    '&:hover': {
                      backgroundColor: customStyles['colorButtonDelete']
                    },
                  }}
                  variant={'outlined'}
                  startIcon={<DeleteOutline />}>Delete</Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <MuiDialog percentScreenWidth={'90%'}
                     percentScreenHeight={'auto'}
                     open={isDialog}
                     setOpen={setIsDialog}
                     title={'Style Master Description'}
                     content={<StyleInfoForm styleDetailDto={styleDetailDto} action={isAction} />} />
        </Grid>
        <Grid item xs={12} md={12}>
          <MuiDialog open={isDialogDelete}
                     setOpen={setIsDialogDelete}
                     percentScreenWidth={ fullScreen ? '100%' : '30%'}
                     percentScreenHeight={'auto'}
                     buttonName={'Delete'}
                     buttonAccept={true}
                     buttonColorBackground={customColorDefault.ColorButtonDelete.backgroundColor}
                     buttonColor={customColorDefault.ColorButtonDelete.color}
                     buttonStartIcon={<DeleteSharp />}
                     content={<DeleteForm />}
                     handleClickAccept={handleClickDialogDelete}
          />
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
};