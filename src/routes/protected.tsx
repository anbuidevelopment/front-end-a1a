
import { lazyImport } from '@/utils/lazyImport';
import { element } from 'prop-types';

const { DashBoard } = lazyImport(() => import('@/features/dashboard'), 'DashBoard');

const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound');

const { StyleInfo } = lazyImport(() => import('@/features/style_info'), 'StyleInfo');



export const protectedRoutes = [
  { path: '/sm', element: <Dashboard /> },
  { path: '/info', element: <StyleInfo /> },
];
