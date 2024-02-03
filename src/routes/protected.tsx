
import { lazyImport } from '@/utils/lazyImport';
// import { element } from 'prop-types';

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');

// const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound');

const { StyleInfo } = lazyImport(() => import('@/features/style_info'), 'StyleInfo');

const { ProductionProcess } = lazyImport(() => import('@/features/production_process'), 'ProductionProcess');



export const protectedRoutes = [
  { path: '/', element: <Dashboard /> },
  { path: '/info', element: <StyleInfo /> },
  { path: '/process', element: <ProductionProcess /> },
];
