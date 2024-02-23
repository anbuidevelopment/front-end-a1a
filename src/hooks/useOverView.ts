import { useCallback, useEffect, useState } from 'react';
import {
  GetFilterInfo,
  GetOverViewInfo,
  GridDataInfo,
  TableInfo,
} from '@/features/dashboard/types';
import { GridPaginationModel } from '@mui/x-data-grid';
import { loadDashBoard } from '@/features/dashboard/api/dashboard';
import dayjs from 'dayjs';
import { loadSearchDashBoard } from '@/features/dashboard/api/searchoverview';
import { useUser } from '@/lib/auth';

export const useOverView = () => {

  const user = useUser();
  let customerCode = user?.data?.customerCode === undefined ? 'AD' : user.data.customerCode;
  const [searchStatus, setSearchStatus] = useState<boolean>(false);

  const [dashBoardDto, setDashBoardDto] = useState<TableInfo | null>(null);

  const [gridDataInfo, setGridDataInfo] = useState<GridDataInfo>({
    rows: [],
    totalElements: 0,
  });

  const [paramsGetOverView, setParamsGetOverView] = useState<GetOverViewInfo>({
    pStyleMasterCode: '',
    pSeason: '',
    pStage: '',
    pCustomerCode: customerCode,
    pProductType: '',
    pFactoryAllocation: '',
    pMerAccountName: '',
    pFromDate: dayjs().subtract(2, 'months').format('YYYY-MM-DD'),
    pToDate: dayjs().format('YYYY-MM-DD'),
    pPageIndex: 0,
    pPageSize: 10,
  });

  const handleSetParamsSearch = useCallback((searchValue: GetFilterInfo) => {
    switch (searchValue?.columnName) {
      case 'FactoryAllocation':
        setParamsGetOverView((prevState) => ({
          ...prevState,
          pFactoryAllocation: searchValue.value,
          pSeason: '',
          pStage: '',
          pCustomerCode: customerCode,
          pProductType: '',
          pStyleMasterCode: '',
          pMerAccountName: '',
        }));
        break;
      case 'MerAccountName':
        setParamsGetOverView((prevState) => ({
          ...prevState,
          pFactoryAllocation: '',
          pSeason: '',
          pStage: '',
          pCustomerCode: customerCode,
          pProductType: '',
          pStyleMasterCode: '',
          pMerAccountName: searchValue.value,
        }));
        break;
      case 'ProductType':
        setParamsGetOverView((prevState) => ({
          ...prevState,
          pFactoryAllocation: '',
          pSeason: '',
          pStage: '',
          pCustomerCode: customerCode,
          pProductType: searchValue.value,
          pStyleMasterCode: '',
          pMerAccountName: '',
        }));
        break;
      case 'StyleMasterCode':
        setParamsGetOverView((prevState) => ({
          ...prevState,
          pFactoryAllocation: '',
          pSeason: '',
          pStage: '',
          pCustomerCode: customerCode,
          pProductType: '',
          pStyleMasterCode: searchValue.value,
          pMerAccountName: '',
        }));
        break;
      case 'Stage':
        setParamsGetOverView((prevState) => ({
          ...prevState,
          pFactoryAllocation: '',
          pSeason: '',
          pStage: searchValue.value,
          pCustomerCode: customerCode,
          pProductType: '',
          pStyleMasterCode: '',
          pMerAccountName: '',
        }));
        break;
      case 'pFromDate':
        setParamsGetOverView((prevState)=>({
          ...prevState,
          pFromDate:searchValue.value,
        }));
        break;
      case 'pToDate':
        setParamsGetOverView((prevState)=>({
          ...prevState,
          pToDate:searchValue.value,
        }));
        break;
      default:
        setParamsGetOverView((prevState) => ({
          ...prevState,
          pFactoryAllocation: '',
          pSeason: '',
          pStage: '',
          pCustomerCode: customerCode,
          pProductType: '',
          pStyleMasterCode: '',
          pMerAccountName: '',
        }));
    }
    setSearchStatus(true);
  }, [paramsGetOverView]);

  const handleChangePaginationModel = useCallback((model: GridPaginationModel) => {
    setParamsGetOverView((prevParams) => ({
      ...prevParams,
      pPageIndex: model.page,
      pPageSize: model.pageSize,
    }));
  }, [paramsGetOverView]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = searchStatus ? await loadSearchDashBoard(paramsGetOverView) : await loadDashBoard(paramsGetOverView);
        if(result.message===null){
        setDashBoardDto(result.data);
        setGridDataInfo((prevState) => ({
          ...prevState,
          rows: result?.data?.content.dataList,
          totalElements: result?.data?.content.totalElements,
        }))}
       else {
         setDashBoardDto(null)
         setGridDataInfo({
           rows:[],totalElements:0
         })
       }

      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [paramsGetOverView, searchStatus]);

  return {
    dashBoardDto,
    gridDataInfo,
    paramsGetOverView,
    handleChangePaginationModel,
    handleSetParamsSearch,
  };
};
