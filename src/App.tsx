import React, { createContext, useMemo, useState } from 'react';
import { AppProvider } from '@/provider/app';
import { AppRoutes } from '@/routes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import {} from '@mui/x-data-grid/themeAugmentation';
import { customColorDefault } from '@/utils/format';

export const ColorModeContext = createContext({
  toggleColorMode: () => {
  },
});

function App() {

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: mode === 'dark' ? customColorDefault.ColorMainPrimaryDark.color : customColorDefault.ColorMainPrimary.color,
          },
          text: {
            primary: mode === 'dark' ? customColorDefault.ColorTextPrimaryDark.color : customColorDefault.ColorTextPrimary.color,
          },
          background: {
            default: mode === 'dark' ? customColorDefault.ColorBackgroundDark.default : customColorDefault.ColorBackground.default,
            paper: mode === 'dark' ? customColorDefault.ColorBackgroundDark.paper : customColorDefault.ColorBackground.paper,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: customColorDefault.ColorMuiButtonHover.backgroundColor,
                  color: customColorDefault.ColorMuiButtonHover.color,
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: mode === 'dark' ? customColorDefault.ColorMuiOutlinedInputDark.borderColor : customColorDefault.ColorMuiOutlinedInput.borderColor,
                },
                '&:hover': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? customColorDefault.ColorMuiOutlinedInputDark.borderColor : customColorDefault.ColorMuiOutlinedInput.borderColor,
                  },
                },
                '&.Mui-disabled': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? customColorDefault.ColorMuiOutlinedInputDark.borderColor : customColorDefault.ColorMuiOutlinedInput.borderColor,
                  },
                },
                '&.Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? customColorDefault.ColorMuiOutlinedInputDark.borderColor : customColorDefault.ColorMuiOutlinedInput.borderColor,
                  },
                },
              },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                fontWeight: 'normal',
                color: mode === 'dark' ? customColorDefault.ColorMuiInputBaseDark.color : customColorDefault.ColorMuiInputBase.color,
                '&.Mui-disabled': {
                  fontWeight: 500,
                  color: mode === 'dark' ? customColorDefault.ColorMuiInputBaseDark.color : customColorDefault.ColorMuiInputBase.color,
                },
                '&.Mui-focused': {
                  fontWeight: 500,
                  color: mode === 'dark' ? customColorDefault.ColorMuiInputBaseDark.color : customColorDefault.ColorMuiInputBase.color,
                },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                fontWeight: 'normal',
                color: 'customColorDefault.ColorMuiTab.color',
                backgroundColor: customColorDefault.ColorMuiTab.backgroundColor,
                '&.Mui-selected': {
                  color: customColorDefault.ColorMuiTabSelected.color,
                  backgroundColor: customColorDefault.ColorMuiTabSelected.backgroundColor,
                  borderRadius: '10px',
                },
              },
            },
          },
          MuiFormLabel: {
            styleOverrides: {
              root: {
                fontWeight: 500,
                color: mode === 'dark' ? customColorDefault.ColorMuiFormLabelDark.color : customColorDefault.ColorMuiFormLabel.color,
                '&.Mui-disabled': {
                  fontWeight: 500,
                  color: mode === 'dark' ? customColorDefault.ColorMuiFormLabelDarkDisabled.color : customColorDefault.ColorMuiFormLabelDisabled.color,
                },
                '&.Mui-focused': {
                  fontWeight: 500,
                  color: mode === 'dark' ? customColorDefault.ColorMuiFormLabelDarkFocused.color : customColorDefault.ColorMuiFormLabelFocused.color,
                },
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                color: mode === 'dark' ? customColorDefault.ColorMuiTypographyDark.color : customColorDefault.ColorMuiTypography.color,
              },
            },
          },
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                backgroundColor: customColorDefault.ColorMuiTooltip.backgroundColor,
              },
            },
          },
          MuiDataGrid: {
            styleOverrides: {
              row: {
                '&.Mui-selected': {
                  backgroundColor: customColorDefault.ColorDataGridSelected.backgroundColor,
                  color: customColorDefault.ColorDataGridSelected.color,
                  '&:hover': {
                    backgroundColor: customColorDefault.ColorDataGridHover.backgroundColor,
                    color: customColorDefault.ColorDataGridHover.color,
                  },
                },
                '&:hover': {
                  backgroundColor: customColorDefault.ColorDataGridHover.backgroundColor,
                  color: customColorDefault.ColorDataGridHover.color,
                },
              },
            },
          },
          MuiToolbar:{
            styleOverrides:{
              root:{
                minHeight:'50px',
                '& .MuiToolbar-gutters': {
                  padding: 0,
                }
              }
            }
          }
        },
      }),
    [mode],
  );
  const sharedTypography = {
    fontSize: '1rem',
    color: mode === 'dark' ? '#FFFFFF' : '#2F3659',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1rem',
    },
  };
  const sharedButton = {
    fontSize: '0.75rem',
    fontWeight: 300,
    disableRipple: true,
    backgroundColor: customColorDefault.ColorMuiButton.backgroundColor,
    textColor: customColorDefault.ColorMuiButton.textColor,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius: '25px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius: '25px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.75rem',
      fontWeight: 500,
      borderRadius: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius: '25px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius: '25px',
    },
  };
  theme.typography.h3 = { ...sharedTypography };
  theme.typography.h4 = { ...sharedTypography };
  theme.typography.body1 = { ...sharedTypography };
  theme.typography.body2 = { ...sharedTypography };
  theme.typography.button = { ...sharedButton };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <CssBaseline />
          <AppProvider>
            <AppRoutes />
          </AppProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
