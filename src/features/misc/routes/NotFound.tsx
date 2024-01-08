import { MainLayout } from '@/components/Layout';
import Status404 from '@/features/misc/components/404Form';

export const NotFound = () => {
  return (
    <MainLayout>
      <Status404 />
    </MainLayout>
  );
};