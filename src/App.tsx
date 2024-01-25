import { AppProvider } from '@/provider/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { AppRoutes } from '@/routes';
import { AxiosErrorComponent } from '@/components/Layout';
import ToggleColorModeProvider from './context/color-mode-context';

function App() {
  return (
    <ToggleColorModeProvider>
      <Provider store={store}>
        <AxiosErrorComponent />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </Provider>
    </ToggleColorModeProvider>
  );
}

export default App;
