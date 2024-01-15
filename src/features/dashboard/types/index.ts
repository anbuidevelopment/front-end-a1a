import { Dayjs } from 'dayjs';
import { GridColDef, GridPaginationModel, GridRowsProp } from '@mui/x-data-grid';

export type StyleMasterInfo = {
  id: number;
  styleMasterId: string;
  styleMasterCode: string;
  season: string;
  stage: string;
  optionNo: string;
  tacRouteNumber: string;
  a1aRouteNumber: string;
  productType: string;
  factoryAllocate: string;
  merAccountName: string;
  status: number;
  createdDate: Dayjs;
  totalRowNum: number;
};

type StyleMasterContent = {
  pageIndex: number;
  rowPerPage: number;
  totalElements: number;
  totalPages: number;
  dataList: StyleMasterInfo[];
};

export type TableInfo = {
  headers: string[];
  content: StyleMasterContent;
};

export interface CustomToolbarStatus {
  deleteStatus: boolean,
  idDelete: any,
  handleSetParamsSearch: (searchValue: GetFilterInfo) => void
}

export interface GetFilterInfo {
  id: number,
  columnName: string,
  value: string
}

export type FilterInfo = {
  header: string[],
  content: GetFilterInfo[]
}

export interface GridDataInfo {
  rows: GridRowsProp,
  columns: GridColDef[],
  totalElements: number
}

// export interface GetOverViewInfo {
//   pPageIndex: number,
//   pPageSize: number,
//   pCustomerCode: string,
// }
export interface GetOverViewInfo {
  pStyleMasterCode: string,
  pSeason: string,
  pStage: string,
  pCustomerCode: string,
  pProductType: string,
  pFactoryAllocation: string,
  pMerAccountName: string,
  pFromDate: string,
  pToDate: string,
  pPageIndex: number,
  pPageSize: number,
}

export interface GridDataGetOverViewInfo {
  paramsGrid: GetOverViewInfo,
  paginationModelOnChange: (model: GridPaginationModel) => void,
  gridDataInfo: GridDataInfo
  handleSetParamsSearch: (searchValue: GetFilterInfo) => void
  handleSetParamsStyleDetail:(id:number)=>void
  styleDetailDto:StyleDetailInfo|null
}

export interface StyleDetailContent {
  styleMasterId: number,
  styleMasterCode: string,
  season: string,
  stage: string,
  optionNo: string,
  customerPatternCode: string,
  tacRouteNumber: string,
  a1aRouteNumber: string,
  productType: string,
  factoryAllocation: string,
  merAccountName: string,
  status: string,
  cuttingSMV: number,
  sewing: number,
  inspect: number,
  press: number,
  finishing: number,
  totalSIPFSMV: number,
  bondingProcess: string,
  bondingPosition: number,
  bondingTotalSMV: number,
  laserPosition: number,
  laserTotalSMV: number,
  totalBondingSMV: number,
  htSmall: number,
  htBig: number,
  htTotalPosition: number,
  htEmbroideryBacking: number,
  embPosition: number,
  embBadgeLogo: number,
  embTotalStitch: number,
  embTotalSMV: number,
  padPrintPosition: number,
  padPrintTotalSMV: number,
  screenPrintPosition: number,
  screenPrintPrinter: string,
  sublimationPosition: number,
  sublimationPrinter: string,
  bondingItem: string,
  screenPrintItem: string,
  screenSublimationItem:string
}
export interface StyleDetailInfo{
  headers:string[],
  content:StyleDetailContent
}
export interface GetStyleDetailInfo{
  pStyleMasterId:number
}


