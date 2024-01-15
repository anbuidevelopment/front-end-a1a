import { Stack } from '@mui/material';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { DashboardFilter } from '@/features/dashboard/components/Dashboard';
import { useOverView } from '@/hooks/useOverView';
import { useStyleDetail } from '@/hooks/useStyleDetail';

export const DashBoard = () => {

  const {
    paramsGetOverView,
    handleChangePaginationModel,
    gridDataInfo,
    handleSetParamsSearch,
  } = useOverView();
  const {handleSetParamsStyleDetail,styleDetailDto}=useStyleDetail()
  return (
    <Stack direction={'column'}>
      <MainLayout>
        <ContentLayout title={'Dashboard'}>
          <DashboardFilter
            paginationModelOnChange={handleChangePaginationModel}
            handleSetParamsSearch={handleSetParamsSearch}
            gridDataInfo={gridDataInfo}
            paramsGrid={paramsGetOverView}
            handleSetParamsStyleDetail={handleSetParamsStyleDetail}
            styleDetailDto={styleDetailDto}
          />
        </ContentLayout>
      </MainLayout>
    </Stack>
  );
};
