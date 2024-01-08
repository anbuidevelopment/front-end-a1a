import { Stack } from '@mui/material';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { DashBoardFilter } from '@/features/dashboard/components/DashBoard';
import { useOverView } from '@/hooks/useOverView';

export const Dashboard = () => {

  const {
    paramsGetOverView,
    handleChangePaginationModel,
    gridDataInfo,
    handleSetParamsSearch,
  } = useOverView();
  return (
    <Stack direction={'column'}>
      <MainLayout>
        <ContentLayout title={'Dashboard'}>
          <DashBoardFilter
            paginationModelOnChange={handleChangePaginationModel}
            handleSetParamsSearch={handleSetParamsSearch}
            gridDataInfo={gridDataInfo}
            paramsGrid={paramsGetOverView}
          />
        </ContentLayout>
      </MainLayout>
    </Stack>
  );
};
