import React, { createContext, useMemo, useState } from 'react';
import { AppProvider } from '@/provider/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { AppRoutes } from '@/routes';
import { AxiosErrorComponent } from '@/components/Layout';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import { SnackbarProvider } from 'notistack';

export const ColorModeContext = createContext({
  toggleColorMode: () => {
  },
});

function App() {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
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
            main: blue[500],
          },
          mode,
          ...(mode === 'dark'
            ? {
              primary: {
                main: '#2196F5',
              },
              text: {
                primary: '#D7D7D9',
              },
              background: {
                default: '#444444',
                paper: '#333333',
              },
            }
            : {}),
        },
        typography: {
          fontSize: 13,
          htmlFontSize: 16,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: '#2E8364',
                  color: 'white',
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: '#2E8364',
                },
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: '#3C7363',
                  color: 'black',
                },

              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                fontSize: 16,
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <CssBaseline />
            <AppProvider>
              <AppRoutes />
            </AppProvider>
          </SnackbarProvider>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
