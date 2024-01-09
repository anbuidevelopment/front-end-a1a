import { Navigate } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');

const { Sewing } = lazyImport(() => import('@/features/sewing'), 'Sewing');

const { NoSewing } = lazyImport(() => import('@/features/no-sewing'), 'NoSewing');

export const protectedRoutes = [
  {
    path: '/',
    element: <Dashboard />,
    children: [{ path: '*', element: <Navigate to="." /> }],
  },
  { index: true, element: <Sewing /> },
  { path: '/non', element: <NoSewing /> },
];
