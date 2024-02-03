import React from 'react';
import { FilterFormat } from '@/hooks/useStyleInfo';
import { StyleDetailInfo } from '@/features/dashboard/types';

export interface FormStyleDataInfo {
  formData: StyleInfoDataInputText,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export interface FormStyleDataInfoAutoComplete {
  formData: StyleInfoDataAutoComplete,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  action:number
}

export interface FormStyleDetailDto {
  styleDetailDto: StyleDetailInfo | null;
  action:number
}

export interface StyleInfoDataInputText {
  cuttingSMV: number | undefined,
  press: number | undefined,
  sewing: number | undefined,
  finishing: number | undefined,
  inspect: number | undefined,
  totalSIPFSMV: number | undefined,
  screenPrintPosition: number | undefined,
  screenPrintPrinter: string | undefined,
  screenPrintItem: string | undefined,
  embPosition: number | undefined,
  embBadgeLogo: number | undefined,
  embTotalStitch: number | undefined,
  embTotalSMV: number | undefined,
  htSmall: number | undefined,
  htBig: number | undefined,
  htTotalPosition: number | undefined,
  htEmbroideryBacking: number | undefined,
  bondingProcess: string | undefined,
  bondingPosition: number | undefined,
  bondingTotalSMV: number | undefined,
  laserPosition: number | undefined,
  laserTotalSMV: number | undefined,
  totalBondingSMV: number | undefined,
  padPrintPosition: number | undefined,
  padPrintTotalSMV: number | undefined,
  sublimationPosition: number | undefined,
  sublimationPrinter: string | undefined,
  screenSublimationItem: string | undefined,
  bondingItem: string | undefined,
}

export interface StyleInfoDataAutoComplete {
  styleMasterId: FilterFormat | null,
  styleMasterCode: FilterFormat | null,
  stage: FilterFormat | null,
  merAccountName: FilterFormat | null,
  status: FilterFormat | null,
  optionNo: FilterFormat | null,
  productType: FilterFormat | null,
  customerCode: FilterFormat | null,
  customerPatternCode: FilterFormat | null
  a1aRouteNumber: FilterFormat | null,
  season: FilterFormat | null,
  tacRouteNumber: FilterFormat | null,
  factoryAllocation: FilterFormat | null,
}

export interface StyleMasterConfigData {
  refStyleMasterId: number | undefined,
  isActive: number | undefined,
  styleMasterId: string | undefined,
  styleMasterCode: string | undefined,
  stage: string | undefined,
  merAccountName: string | undefined,
  status: string | undefined,
  optionNo: string | undefined,
  productType: string | undefined,
  customerCode: string | undefined,
  customerPatternCode: string | undefined,
  a1aRouteNumber: string | undefined,
  season: string | undefined,
  tacRouteNumber: string | undefined,
  factoryAllocation: string | undefined,
  cuttingSMV: number | undefined,
  press: number | undefined,
  sewing: number | undefined,
  finishing: number | undefined,
  inspect: number | undefined,
  totalSIPFSMV: number | undefined,
  screenPrintPosition: number | undefined,
  screenPrintPrinter: string | undefined,
  styleMasterScreenPrintItem: string | undefined,
  embPosition: number | undefined,
  embBadgeLogo: number | undefined,
  embTotalStitch: number | undefined,
  embTotalSMV: number | undefined,
  htSmall: number | undefined,
  htBig: number | undefined,
  htTotalPosition: number | undefined,
  htEmbroideryBacking: number | undefined,
  bondingProcess: string | undefined,
  bondingPosition: number | undefined,
  bondingTotalSMV: number | undefined,
  laserPosition: number | undefined,
  laserTotalSMV: number | undefined,
  totalBondingSMV: number | undefined,
  padPrintPosition: number | undefined,
  padPrintTotalSMV: number | undefined,
  sublimationPosition: number | undefined,
  sublimationPrinter: string | undefined,
  styleMasterScreenSublimationItem: string | undefined,
  styleMasterBondingItem: string | undefined,
}

export interface UpdateResponse {
  code: number,
  message: string,
  data: string | null,
}

