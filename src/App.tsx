import React from 'react';
import { AppProvider } from '@/provider/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { AppRoutes } from '@/routes';
import { AxiosErrorComponent } from '@/components/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <AxiosErrorComponent />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
