import { CircularProgress, Stack } from '@mui/material';

export const LoadingProgress = () => {
  return (
    <Stack spacing={2} direction={'column'}>
      <CircularProgress />
    </Stack>
  );
};
