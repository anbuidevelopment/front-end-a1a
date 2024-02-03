import { ContentLayout, MainLayout } from '@/components/Layout';
import { StyleInfoForm } from '@/features/style_info/components/StyleInfoForm';
import { useStyleDetail } from '@/hooks/useStyleDetail';


export const StyleInfo = () => {
const {styleDetailDto}=useStyleDetail()
  return (
    <MainLayout>
      <ContentLayout title={'Style Info'}>
        <StyleInfoForm styleDetailDto={styleDetailDto} action={1}/>
      </ContentLayout>
    </MainLayout>
  );
};