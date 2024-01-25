import { Stack } from '@mui/material';
import { MainLayout } from '@/components/Layout';
import { ContentLayout } from '@/components/Layout';
import { DashboardTable } from '@/features/dashboard/component';

export const Dashboard = () => {
  return (
    <Stack direction={'column'}>
      <MainLayout>
        <ContentLayout title={'TPM Dashboard'}>
          <DashboardTable />
        </ContentLayout>
      </MainLayout>
    </Stack>
  );
};
