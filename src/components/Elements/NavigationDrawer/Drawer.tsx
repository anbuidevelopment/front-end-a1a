import { CSSObject, styled, Theme } from '@mui/material/styles';
import HomeDrawer from '@mui/material/Drawer';
import React from 'react';

const drawerWidth = 240;

const openedDrawer = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'hidden',
});

const closeDrawer = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerStyle = styled(HomeDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedDrawer(theme),
    '& .MuiDrawer-paper': openedDrawer(theme),
  }),
  ...(!open && { ...closeDrawer(theme), '& .MuiDrawer-paper': closeDrawer(theme) }),
}));

export type DrawerProps = {
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Drawer = ({ variant, isOpen, onClose, children }: DrawerProps) => {
  return (
    <DrawerStyle variant={variant} open={isOpen} onClose={onClose}>
      {children}
    </DrawerStyle>
  );
};
