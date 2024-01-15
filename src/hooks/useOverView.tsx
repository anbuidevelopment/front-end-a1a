import { useCallback, useEffect, useState } from 'react';
import {
  GetFilterInfo,
  GetOverViewInfo,
  GridDataInfo,
  TableInfo,
} from '@/features/dashboard/types';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { loadDashBoard } from '@/features/dashboard/api/dashboard';
import dayjs from 'dayjs';
import { loadSearchDashBoard } from '@/features/dashboard/api/searchoverview';

export const useOverView = () => {

  const [searchStatus, setSearchStatus] = useState<boolean>(false);

  const [dashBoardDto, setDashBoardDto] = useState<TableInfo | null>(null);

  const [gridDataInfo, setGridDataInfo] = useState<GridDataInfo>({
    rows: [],
    columns: [],
    totalElements: 0,
  });

  const [paramsGetOverView, setParamsGetOverView] = useState<GetOverViewInfo>({
    pStyleMasterCode: '',
    pSeason: '',
    pStage: '',
    pCustomerCode: 'AD',
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
          pCustomerCode: 'AD',
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
          pCustomerCode: 'AD',
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
          pCustomerCode: 'AD',
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
          pCustomerCode: 'AD',
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
          pCustomerCode: 'AD',
          pProductType: '',
          pStyleMasterCode: '',
          pMerAccountName: '',
        }));
        break;
      default:
        setParamsGetOverView((prevState) => ({
          ...prevState,
          pFactoryAllocation: '',
          pSeason: '',
          pStage: '',
          pCustomerCode: 'AD',
          pProductType: '',
          pStyleMasterCode: '',
          pMerAccountName: '',
        }));
    }
    setSearchStatus(true)
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
        const result = searchStatus ? await loadSearchDashBoard(paramsGetOverView): await loadDashBoard(paramsGetOverView);
        setDashBoardDto(result);
        setGridDataInfo((prevState) => ({
          ...prevState,
          rows: result?.content.dataList,
          totalElements: result?.content.totalElements,
        }));
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [paramsGetOverView,searchStatus]);

  useEffect(() => {
    const columnsHeader: GridColDef[] = (dashBoardDto?.headers || []).map((header) => ({
      field: header,
      headerName: header,
      maxWidth:
        header === 'styleMasterId' || header === 'season' || header === 'stage' || header === 'optionNo'
          ? 100
          : header === 'tacRouteNumber' || header === 'a1aRouteNumber'
            ? 130
            : 1000,
      flex: 1,
      headerClassName: 'col-header',
      renderCell: (params) => (
        <>
          {params.colDef.field === 'createdDate'
            ? new Date(params.value).toISOString().replace('T', ' ').substring(0, 19)
            : params.value}
        </>
      ),
      hideable: header === 'id' || header === 'status' || header === 'totalRowNum' || header === 'styleMasterId',
    }));

    // setColumns(columnsHeader);
    setGridDataInfo((prevState) => ({
      ...prevState,
      columns: columnsHeader,
    }));
  }, [dashBoardDto]);

  return {
    gridDataInfo,
    paramsGetOverView,
    handleChangePaginationModel,
    handleSetParamsSearch,

  };
};
