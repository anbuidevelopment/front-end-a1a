import React from 'react';
import { AppBar, Drawer, DrawerHeader } from '@/components/Elements/Drawer';
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
import { Menu } from '@/components/Elements/Drawer/Menu';

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
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
          <Typography variant="h6" noWrap component="div">
            Downtime
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant={'permanent'} isOpen={isOpen} onClose={close}>
        <DrawerHeader>
          <IconButton onClick={close}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Menu open={isOpen} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
