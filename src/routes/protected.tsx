import { Navigate } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');

export const protectedRoutes = [
  {
    path: '/',
    element: <Dashboard />,
    children: [{ path: '*', element: <Navigate to="." /> }],
  },
];
