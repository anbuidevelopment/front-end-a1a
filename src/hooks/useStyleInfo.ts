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
    totalSewIPFSMV:  undefined,
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
    htEmbBacking:  undefined,
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
    smCode: {
      id: 1,
      columnName: 'smCode',
      value: '',
    },
    stage: {
      id: 1,
      columnName: 'stage',
      value: '',
    },
    merName: {
      id: 1,
      columnName: 'merName',
      value: '',
    },
    status: {
      id: 1,
      columnName: 'status',
      value: '',
    },
    options: {
      id: 1,
      columnName: 'options',
      value: '',
    },
    productType: {
      id: 1,
      columnName: 'productType',
      value: '',
    },
    cuspCode: {
      id: 1,
      columnName: 'cuspCode',
      value: '',
    },
    a1aRouteNum: {
      id: 1,
      columnName: 'a1aRouteNum',
      value: '',
    },
    season: {
      id: 1,
      columnName: 'season',
      value: '',
    },
    tacRouteNum: {
      id: 1,
      columnName: 'tacRouteNum',
      value: '',
    },
    facAllocation: {
      id: 1,
      columnName: 'facAllocation',
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
      totalSewIPFSMV: e?.content.totalSIPFSMV,
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
      htEmbBacking: e?.content.htEmbroideryBacking,
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
      smCode: {
        id: 1,
        columnName: 'smCode',
        value: e?.content.styleMasterCode,
      },
      stage: {
        id: 1,
        columnName: 'stage',
        value: e?.content.stage,
      },
      merName: {
        id: 1,
        columnName: 'merName',
        value: e?.content.merAccountName,
      },
      status: {
        id: 1,
        columnName: 'status',
        value: e?.content.status,
      },
      options: {
        id: 1,
        columnName: 'options',
        value: e?.content.optionNo,
      },
      productType: {
        id: 1,
        columnName: 'productType',
        value: e?.content.productType,
      },
      cuspCode: {
        id: 1,
        columnName: 'cuspCode',
        value: '',
      },
      a1aRouteNum: {
        id: 1,
        columnName: 'a1aRouteNum',
        value: e?.content.a1aRouteNumber,
      },
      season: {
        id: 1,
        columnName: 'season',
        value: e?.content.season,
      },
      tacRouteNum: {
        id: 1,
        columnName: 'tacRouteNum',
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