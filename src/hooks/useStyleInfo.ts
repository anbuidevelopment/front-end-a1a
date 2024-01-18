import { ChangeEvent, useCallback, useState } from 'react';
import { StyleInfoDataAutoComplete, StyleInfoDataInputText } from '@/features/style_info';
import { StyleDetailInfo } from '@/features/dashboard/types';

export interface FilterFormat {
  id: number;
  columnName: string;
  value: string;
}

export const useStyleInfo = () => {

  const [styleInfoDataInputText, setStyleInfoDataInputText] = useState<StyleInfoDataInputText>({
    cuttingSMV:  undefined,
    press:  undefined,
    sewing:  undefined,
    finishing:  undefined,
    inspect:  undefined,
    totalSIPFSMV:  undefined,
    screenPrintPosition:  undefined,
    screenPrintPrinter:  undefined,
    screenPrintItem:  undefined,
    embPosition:  undefined,
    embBadgeLogo:  undefined,
    embTotalStitch:  undefined,
    embTotalSMV:  undefined,
    htSmall:  undefined,
    htBig:  undefined,
    htTotalPosition:  undefined,
    htEmbroideryBacking:  undefined,
    bondingProcess:  undefined,
    bondingPosition:  undefined,
    bondingTotalSMV:  undefined,
    laserPosition:  undefined,
    laserTotalSMV:  undefined,
    totalBondingSMV:  undefined,
    padPrintPosition:  undefined,
    padPrintTotalSMV:  undefined,
    sublimationPosition:  undefined,
    sublimationPrinter:  undefined,
    screenSublimationItem:  undefined,
    bondingItem:  undefined,
  });
  const handleChangeInputText = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setStyleInfoDataInputText((prevStyleInfoDataInputText) => ({
        ...prevStyleInfoDataInputText,
        [e.target.name]: e.target.value,
      }));
    },
    [setStyleInfoDataInputText],
  );

  const [styleInfoDataAutoComplete, setStyleInfoDataAutoComplete] = useState<StyleInfoDataAutoComplete>({
    styleMasterId:{
      id:1,
      columnName:'styleMasterId',
      value:''
    },
    styleMasterCode: {
      id: 1,
      columnName: 'styleMasterCode',
      value: '',
    },
    stage: {
      id: 1,
      columnName: 'stage',
      value: '',
    },
    merAccountName: {
      id: 1,
      columnName: 'merAccountName',
      value: '',
    },
    status: {
      id: 1,
      columnName: 'status',
      value: '',
    },
    optionNo: {
      id: 1,
      columnName: 'optionNo',
      value: '',
    },
    productType: {
      id: 1,
      columnName: 'productType',
      value: '',
    },
    customerCode: {
      id: 1,
      columnName: 'customerCode',
      value: '',
    },
    customerPatternCode:{
      id:1,
      columnName:'customerPatternCode',
      value:''
    },
    a1aRouteNumber: {
      id: 1,
      columnName: 'a1aRouteNumber',
      value: '',
    },
    season: {
      id: 1,
      columnName: 'season',
      value: '',
    },
    tacRouteNumber: {
      id: 1,
      columnName: 'tacRouteNumber',
      value: '',
    },
    factoryAllocation: {
      id: 1,
      columnName: 'factoryAllocation',
      value: '',
    },
  });

  const handleSetInputTextDto = useCallback((e: StyleDetailInfo) => {
    setStyleInfoDataInputText((prevState) => ({
      ...prevState,
      cuttingSMV: e?.content.cuttingSMV,
      press: e?.content.press,
      sewing: e?.content.sewing,
      finishing: e?.content.finishing,
      inspect: e?.content.inspect,
      totalSIPFSMV: e?.content.totalSIPFSMV,
      screenPrintPosition: e?.content.screenPrintPosition,
      screenPrintPrinter: e?.content.screenPrintPrinter,
      screenPrintItem: e?.content.screenPrintItem,
      embPosition: e?.content.embPosition,
      embBadgeLogo: e?.content.embBadgeLogo,
      embTotalStitch: e?.content.embTotalStitch,
      embTotalSMV: e?.content.embTotalSMV,
      htSmall: e?.content.htSmall,
      htBig: e?.content.htBig,
      htTotalPosition: e?.content.htTotalPosition,
      htEmbroideryBacking: e?.content.htEmbroideryBacking,
      bondingProcess: e?.content.bondingProcess,
      bondingPosition: e?.content.bondingPosition,
      bondingTotalSMV: e?.content.bondingTotalSMV,
      laserPosition: e?.content.laserPosition,
      laserTotalSMV: e?.content.laserTotalSMV,
      totalBondingSMV: e?.content.totalBondingSMV,
      padPrintPosition: e?.content.padPrintPosition,
      padPrintTotalSMV: e?.content.padPrintTotalSMV,
      sublimationPosition: e?.content.sublimationPosition,
      sublimationPrinter: e?.content.sublimationPrinter,
      screenSublimationItem: e?.content.screenSublimationItem,
      bondingItem:e?.content.bondingItem
    }));
  }, [styleInfoDataInputText]);

  const handleSetAutocompleteDto = useCallback((e: StyleDetailInfo) => {
    setStyleInfoDataAutoComplete((prevState) => ({
      ...prevState,
     styleMasterId:{
       id: 1,
       columnName: 'styleMasterCode',
       value: e?.content.styleMasterId.toString(),
     },
      styleMasterCode: {
        id: 1,
        columnName: 'styleMasterCode',
        value: e?.content.styleMasterCode,
      },
      stage: {
        id: 1,
        columnName: 'stage',
        value: e?.content.stage,
      },
      merAccountName: {
        id: 1,
        columnName: 'merAccountName',
        value: e?.content.merAccountName,
      },
      status: {
        id: 1,
        columnName: 'status',
        value: e?.content.status,
      },
      optionNo: {
        id: 1,
        columnName: 'optionNo',
        value: e?.content.optionNo,
      },
      productType: {
        id: 1,
        columnName: 'productType',
        value: e?.content.productType,
      },
      customerCode: {
        id: 1,
        columnName: 'customerCode',
        value: e.content.customerCode,
      },
      customerPatternCode:{
        id:1,
        columnName:'customerPatternCode',
        value:e.content.customerPatternCode
      },
      a1aRouteNumber: {
        id: 1,
        columnName: 'a1aRouteNumber',
        value: e?.content.a1aRouteNumber,
      },
      season: {
        id: 1,
        columnName: 'season',
        value: e?.content.season,
      },
      tacRouteNumber: {
        id: 1,
        columnName: 'tacRouteNumber',
        value: e?.content.tacRouteNumber,
      },
      facAllocation: {
        id: 1,
        columnName: 'facAllocation',
        value: e?.content.factoryAllocation,
      },
    }));
  }, [styleInfoDataAutoComplete]);

  const handleChangeAutoComplete = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const sName = e.currentTarget.id.substring(0, e.currentTarget.id.indexOf('-'));
      const value = {
        id: Math.floor(Math.random() * 100 + 1),
        columnName: sName,
        value: e.currentTarget.innerHTML,
      };
      setStyleInfoDataAutoComplete((prevStyleInfoDataAutoComplete) => ({
        ...prevStyleInfoDataAutoComplete,
        [sName]: value,
      }));
    },
    [styleInfoDataAutoComplete],
  );
  return {
    styleInfoDataInputText,
    handleChangeInputText,
    styleInfoDataAutoComplete,
    handleChangeAutoComplete,
    handleSetAutocompleteDto,
    handleSetInputTextDto,
  };

};