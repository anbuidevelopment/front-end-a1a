import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { AddCircleSharp, HomeSharp } from '@mui/icons-material';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Fragment } from 'react';


type MenuProps = {
  open?: boolean
}

export const Menu = ({ open }: MenuProps) => {
  const theme = useTheme();
  const { open: openMenu } = useDisclosure();
  const menuItems = [
    {
      text: 'Style Master',
      icon: <Avatar sx={{ width: 45, height: 45 }} variant={'square'}
                    src={process.env.PUBLIC_URL + '/static/images/menu/home.png'} />,
      to: '/',
      onClick: openMenu,
    },
    {
      text: 'Style Info',
      icon: <Avatar sx={{ width: 45, height: 45 }} variant={'square'}
                    src={process.env.PUBLIC_URL + '/static/images/menu/preview.png'} />,
      to: '/info',
      onClick: openMenu,
    },
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <Fragment key={index}>
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={item.text} placement={'right-start'}>
              <Link to={item.to}
                    onClick={item.onClick}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
              >
                <ListItemButton
                  key={item.text}
                  sx={{
                    maxHeight: 49,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    m: 1,
                  }}>
                  <ListItemIcon sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                  }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}
                                sx={{ opacity: open ? 1 : 0 }}
                                primaryTypographyProps={{
                                  fontWeight: 'normal',
                                  variant: 'body2',
                                  color: theme.palette.mode === 'dark' ? '#FDCF76' : '#333333',
                                }} />
                </ListItemButton>

              </Link>
            </Tooltip>
          </ListItem>
          {index < menuItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </List>
  );
};