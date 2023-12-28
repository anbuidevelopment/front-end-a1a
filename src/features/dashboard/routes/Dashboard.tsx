import {useLogout, useUser} from '@/lib/auth';
import { Button, Stack } from '@mui/material';
import { MainLayout } from '@/components/Layout';

export const Dashboard = () => {
  const logout = useLogout();
  const user = useUser();

  const onLogout = () => {
    logout.mutate({});
  };

  return (
    <Stack direction={'column'}>
      <p>Dashboard</p>
      <MainLayout>
        <p>{user.data?.fullName}</p>
      </MainLayout>
      <Button onClick={onLogout}>Logout</Button>
    </Stack>
  );
};
