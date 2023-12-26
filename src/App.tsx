import React from 'react';
import { AppProvider } from '@/provider/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { AppRoutes } from '@/routes';
import { AxiosErrorComponent } from '@/components/Layout';

function App() {
  return (
    <Provider store={store}>
      <AxiosErrorComponent />
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </Provider>
  );
}

export default App;
