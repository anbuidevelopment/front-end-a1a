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
}

export interface FormStyleDetailDto {
  styleDetailDto:StyleDetailInfo|null
}

export interface StyleInfoDataInputText {
  cuttingSMV: number | undefined,
  press: number | undefined,
  sewing: number | undefined,
  finishing: number | undefined,
  inspect: number | undefined,
  totalSewIPFSMV: number | undefined,
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
  htEmbBacking: number | undefined,
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
  smCode: FilterFormat | null,
  stage: FilterFormat | null,
  merName: FilterFormat | null,
  status: FilterFormat | null,
  options: FilterFormat | null,
  productType: FilterFormat | null,
  cuspCode: FilterFormat | null,
  a1aRouteNum: FilterFormat | null,
  season: FilterFormat | null,
  tacRouteNum: FilterFormat | null,
  facAllocation: FilterFormat | null,
}
