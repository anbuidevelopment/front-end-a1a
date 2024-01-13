import * as React from 'react';
import { Head } from '@/components/Head';

import { Avatar, Grid } from '@mui/material';
import * as process from 'process';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title}></Head>
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        alignItems={'stretch'}
        sx={{ height: '100vh' }}
        spacing={1}
      >
        <Grid item xs={12} md={4} alignItems={'center'}>
          <Grid
            container
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ height: '100vh' }}
          >
            {children}
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Avatar
            variant={'square'}
            alt={'Login'}
            src={process.env.PUBLIC_URL + '/static/images/avatars/office.JPG'}
            sx={{ height: '100%', width: '100%', borderRadius: '16px 0 0 10px' }}
          />
        </Grid>
      </Grid>
    </>
  );
};
