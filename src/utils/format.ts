import { default as dayjs } from 'dayjs';
import { CSSProperties } from 'react';

export const formatDate = (date: number) => dayjs(date).format('dd/MM/yyyy HH:mm:ss');

export const splitItem = (item: string) => item.split(/\||\n/);
export const splitItemJoin = (item: string) => item.split('|').join('\n');

export function extractLastName(fullName: string): string | null {
  const names = fullName.split(' ');
  if (names.length > 0) {
    return names[names.length - 1];
  }
  return null;
}


export const customStyles: Record<string, CSSProperties> = {
  colorMenu: { background: 'linear-gradient(132deg,#4776E6 0%, #8E54E9 100%)' },
  colorButtonHover: { background: 'linear-gradient(132deg, #1D976C 0%, #93F9B9 100%)', color: '#FFFFFF' },
  colorBackground: { backgroundColor: '#F1F1F1' },
  colorHover: { backgroundColor: '#D5F2E5', color: '#555555' },
  colorIcon: { color: '#24A338' },
  colorBackgroundText: { backgroundColor: '#24A338', color: '#FFFFFF' },
  colorTableHeader: { backgroundColor: '#D5F2E5', color: '#555555' },
  colorButtonDelete: { backgroundColor: '#F25E7A', color: '#FFFFFF' },
  colorDataGridHover: { backgroundColor: '#FFF5DD', color: '#7A4100' },
  color1: { backgroundColor: '#DBFAFB', color: '#1A4E7A' },
  color2: { backgroundColor: '#FFEBE3', color: '#1A4E7A' },
};

export const customColorDefault = {
  ColorButtonDelete: { backgroundColor: '#F25E7A', color: '#FFFFFF' },
  ColorMuiTab: { backgroundColor: '#F7F8f9', color: '#555555' },
  ColorMuiTabSelected: { color: '#555555', backgroundColor: '#D5F2E5' },
  ColorMuiFormLabel: { color: '#5A56BF' },
  ColorMuiFormLabelDark: { color: '#FFFFFF' },
  ColorMuiFormLabelDisabled: { color: '#5A56BF' },
  ColorMuiFormLabelDarkDisabled: { color: '#FFFFFF' },
  ColorMuiFormLabelFocused: { color: '#B985D7' },
  ColorMuiFormLabelDarkFocused: { color: '#FFFFFF' },
  ColorMuiTypography: { color: '#2F3659' },
  ColorMuiTypographyDark: { color: '#FFFFFF' },
  ColorMuiTooltip: { backgroundColor: '#FCEEFC' },
  ColorDataGridSelected: { backgroundColor: '#FFEBE3', color: '#1A4E7A' },
  ColorDataGridHover: { backgroundColor: '#FFF5DD', color: '#7A4100' },
  ColorMuiInputBase: { color: '#444444' },
  ColorMuiInputBaseDark: { color: '#FFFFFF' },
  ColorMuiOutlinedInput: { borderColor: '#D5CACE' },
  ColorMuiOutlinedInputDark: { borderColor: '#FFFFFF' },
  ColorMuiButtonHover: { backgroundColor: '#D5F2E5', color: '#555555' },
  ColorMuiButton: { backgroundColor: '#24A338', textColor: '#FFFFFF' },
  ColorBackground: { default: '#F1F1F1', paper: '#F7F8F9' },
  ColorBackgroundDark: { default: '#444444', paper: '#333333' },
  ColorMainPrimary: { color: '#F1F1F1' },
  ColorMainPrimaryDark: { color: '#444444' },
  ColorTextPrimary: { color: '#2F3659' },
  ColorTextPrimaryDark: { color: '#FFFFFF' },
};

