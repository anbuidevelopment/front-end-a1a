import React from 'react';
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Menu } from '@/components/Elements/NavigationDrawer/Menu';
import { UserBoxCard } from '@/components/Elements/UserBoxCard/UserBoxCard';
import { AppBar, Drawer, DrawerHeader } from '@/components/Elements/NavigationDrawer';

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout =({ children }: MainLayoutProps) => {
  const { close, open, isOpen } = useDisclosure();
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position={'fixed'} open={isOpen}>
        <Toolbar>
          <IconButton
            color={'inherit'}
            aria-label={'open drawer'}
            edge={'start'}
            sx={{
              ml: 2,
              marginRight: 5,
              ...(isOpen && { display: 'none' }),
            }}
            onClick={open}
          >
            <MenuIcon />
          </IconButton>
          {/*<Typography variant='h6' noWrap component='div'>*/}
          {/*  Mini variant drawer*/}
          {/*</Typography>*/}
          <Box sx={{ flexGrow: 0, ml: 'auto' }}>
            <UserBoxCard />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant={'permanent'} isOpen={isOpen} onClose={isOpen ? open : close}>
        <DrawerHeader>
          <IconButton onClick={close}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Menu open={isOpen} />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
