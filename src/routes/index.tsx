import { useRoutes } from 'react-router-dom';

// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Login } from '@/features/auth/routes/Login';
import { useUser } from '@/lib/auth';
import { NotFound } from '@/features/misc';

export const AppRoutes = () => {
  const auth = useUser();

  const commonRoutes = [{ path: '/sm', element: <Login /> }];

  const otherRoutes = [{ path: '/*', element: <NotFound /> }];

  const routes = auth.data != null ? protectedRoutes : publicRoutes;

  return useRoutes([...routes, ...commonRoutes, ...otherRoutes]);
};
