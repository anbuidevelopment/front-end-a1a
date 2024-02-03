import React, { createContext, useMemo, useState } from 'react';
import { AppProvider } from '@/provider/app';
import { AppRoutes } from '@/routes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';


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
            main: mode==='dark' ? '#444444' : '#FCEEFC',
          },
          text: {
            primary: mode === 'dark' ? '#FFFFFF' : '#2F3659'
          },
          background:{
            default: mode==='dark' ? '#444444' : '#FCEEFC',
            paper: mode==='dark' ? '#333333' : '#FCEFFC',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: '#E0B0FF',
                  color: '#FFFFFF',
                },

              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: mode === 'dark' ? '#FFFFFF' : '#D5CACE',
                },
                '&:hover': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? '#FFFFFF' : '#D5CACE',
                  },
                },
                '&.Mui-disabled': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? '#FFFFFF' : '#D5CACE',
                  },
                },
                '&.Mui-focused':{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? '#FFFFFF' : '#D5CACE',
                  },
                }
              },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                fontWeight: 'normal',
                color: mode === 'dark' ? '#FFFFFF' : '#444444',
                '&.Mui-disabled': {
                  fontWeight: 500,
                  color: mode === 'dark' ? '#FFFFFF' : '#444444',
                },
                '&.Mui-focused': {
                  fontWeight: 500,
                  color: mode === 'dark' ? '#FFFFFF' : '#444444',
                },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                fontWeight: 'normal',
                color: '#555555',
                backgroundColor:'#FCEEFC',
                '&.Mui-selected': {
                  color: '#FFFFFF',
                  backgroundColor:'#8E54E9'
                },
              },
            },
          },
          MuiFormLabel: {
            styleOverrides: {
              root: {
                fontWeight: 500,
                color: mode === 'dark' ? '#FFFFFF' : '#5A56BF',
                '&.Mui-disabled': {
                  fontWeight: 500,
                  color: mode === 'dark' ? '#FFFFFF' : '#5A56BF',
                },
                '&.Mui-focused': {
                  fontWeight: 500,
                  color: mode === 'dark' ? '#FFFFFF' : '#B985D7',
                },
              },
            },
          },
          MuiTypography:{
            styleOverrides:{
              root:{
                color:mode === 'dark' ? '#FFFFFF' : '#2F3659'
              }
            }
          },
        },
      }),
    [mode],
  );
  const sharedTypography = {
    fontSize: '1rem',
    color:mode === 'dark' ? '#FFFFFF' : '#2F3659',
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
    backgroundColor:'#8E54E9',
    textColor:'#FFFFFF',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.25rem',
      fontWeight: 500,
      borderRadius:'50px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
      fontWeight: 500,
      borderRadius:'50px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.75rem',
      fontWeight: 500,
      borderRadius:'50px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius:'50px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.125rem',
      fontWeight: 500,
      borderRadius:'50px',
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
