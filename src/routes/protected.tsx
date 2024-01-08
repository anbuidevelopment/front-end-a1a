// import { Navigate } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');

const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound');

const { StyleInfo } = lazyImport(() => import('@/features/style_info'), 'StyleInfo');

export const protectedRoutes = [
  { path: '/', element: <Dashboard /> },
  { path: '*', element: <NotFound /> },
  { path: '/info', element: <StyleInfo /> },
];
