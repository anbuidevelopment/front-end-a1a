import DrawerAppBar, { AppBarProps as DrawerAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

interface AppBarProps extends DrawerAppBarProps {
  open?: boolean;
  position: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky' | undefined;
}

const AppBarStyle = styled(DrawerAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar = ({ position, open, children }: AppBarProps) => {
  return (
    <AppBarStyle position={position} open={open}>
      {children}
    </AppBarStyle>
  );
};
