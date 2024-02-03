
import { lazyImport } from '@/utils/lazyImport';
// import { element } from 'prop-types';

const { DashBoard } = lazyImport(() => import('@/features/dashboard'), 'DashBoard');

// const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound');

const { StyleInfo } = lazyImport(() => import('@/features/style_info'), 'StyleInfo');

const { ProductionProcess } = lazyImport(() => import('@/features/production_process'), 'ProductionProcess');



export const protectedRoutes = [
  { path: '/', element: <DashBoard /> },
  { path: '/info', element: <StyleInfo /> },
  { path: '/process', element: <ProductionProcess /> },
];
