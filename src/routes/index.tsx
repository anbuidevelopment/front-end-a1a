import { useRoutes } from 'react-router-dom';

// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Login } from '@/features/auth/routes/Login';
import { useUser } from '@/lib/auth';

export const AppRoutes = () => {
  const auth = useUser();

  const commonRoutes = [{ path: '/', element: <Login /> }];

  const routes = auth.data != null ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
