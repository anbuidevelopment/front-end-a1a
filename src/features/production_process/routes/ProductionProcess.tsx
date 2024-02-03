import { Stack } from '@mui/material';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { ProductionProcessDecoration } from '@/features/production_process/components/ProductionProcessDecoration';

export const ProductionProcess = () => {
  return(
    <Stack direction={'column'}>
      <MainLayout>
        <ContentLayout title={'Production Process'}>
          <ProductionProcessDecoration />
        </ContentLayout>
      </MainLayout>
    </Stack>
  )
}