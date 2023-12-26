import { styled } from '@mui/material/styles';
import React from 'react';

const DrawerHeaderStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export type DrawerHeaderProps = {
  children?: React.ReactNode;
};

export const DrawerHeader = ({ children }: DrawerHeaderProps) => {
  return <DrawerHeaderStyle>{children}</DrawerHeaderStyle>;
};
