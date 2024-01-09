import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import CheckroomIcon from '@mui/icons-material/Checkroom';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Fragment } from 'react';

type MenuProps = {
  open?: boolean;
};

export const Menu = ({ open }: MenuProps) => {
  const theme = useTheme();
  const { open: openMenu } = useDisclosure();
  const location = useLocation();

  const menuItems = [
    {
      text: 'Sewing',
      icon: <CheckroomIcon fontSize="large" />,
      to: '/',
      onClick: openMenu,
    },
    {
      text: 'No Sewing',
      icon: <OtherHousesIcon fontSize="large" />,
      to: '/non',
      onClick: openMenu,
    },
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <Fragment key={index}>
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              display: 'block',
              backgroundColor:
                location.pathname === item.to
                  ? theme.palette.mode === 'dark'
                    ? '#2E2E2E'
                    : '#f0f0f0'
                  : 'inherit',
            }}
          >
            <Tooltip title={item.text} placement={'right-start'}>
              <Link
                to={item.to}
                onClick={item.onClick}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemButton
                  key={item.text}
                  sx={{
                    maxHeight: 35,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    m: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontWeight: 'normal',
                      variant: 'body2',
                      color: theme.palette.mode === 'dark' ? '#f0f0f0' : '#909090',
                    }}
                  />
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
