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
  pPrintPosition: number | undefined,
  pPrinter: string | undefined,
  pItem: string | undefined,
  embPosition: number | undefined,
  embBadgeLogo: number | undefined,
  embTotalStitch: number | undefined,
  embTotalSMV: number | undefined,
  htSmall: number | undefined,
  htBig: number | undefined,
  htTotalPosition: number | undefined,
  htEmbBacking: number | undefined,
  bProcess: string | undefined,
  bPosition: number | undefined,
  bTotalSMV: number | undefined,
  lPosition: number | undefined,
  lTotalSMV: number | undefined,
  bondTotalSMV: number | undefined,
  pPadPosition: number | undefined,
  pPadTotalSMV: number | undefined,
  pSPosition: number | undefined,
  pSPrinter: string | undefined,
  pSItem: string | undefined,
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
