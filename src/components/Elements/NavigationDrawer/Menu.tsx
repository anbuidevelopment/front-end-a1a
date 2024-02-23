import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { EditNoteSharp } from '@mui/icons-material';
import { customStyles, extractLastName } from '@/utils/format';
import { LogoClothes } from '@/assets/clothes';
import { LogoProcess } from '@/assets/process';


type MenuProps = {
  open?: boolean
}

export const Menu = ({ open }: MenuProps) => {
  const menuItems = [
    {
      text: 'Style Master',
      icon: <Avatar variant={'circular'} sx={{ backgroundColor: customStyles['colorMenu'] }}> <LogoClothes /></Avatar>,
      to: '/',
    },
    {
      text: 'Style Info',
      icon: <Avatar variant={'circular'} sx={{ backgroundColor: customStyles['colorMenu'] }}>
        <EditNoteSharp /></Avatar>,
      to: '/info',
    },
    {
      text: 'Production Process',
      icon: <Avatar variant={'circular'} sx={{ backgroundColor: customStyles['colorMenu'] }}> <LogoProcess /></Avatar>,
      to: '/process',
    },
  ];

  return (
    <List sx={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
      {menuItems.map((item, index) => (
        <Fragment key={index}>
          <ListItem key={item.text} disablePadding>
            <Tooltip title={<Typography variant={'h3'} sx={{
              backgroundColor: customStyles['colorBackground'],
              color: customStyles['colorIcon'],
            }}> {item.text} </Typography>} placement={'right-start'}>
              <Link to={item.to}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                    }}
              >
                <ListItemButton
                  key={item.text}
                  sx={{
                    display: open ? 'flex' : 'grid',
                    justifyContent: 'center',
                    paddingLeft: 1,
                    paddingRight: 1,
                    paddingBottom: open ? 1 : 0,
                    paddingTop: 1,
                  }}>
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>{item.icon}</ListItemIcon>
                  <ListItemText sx={{
                    display: 'flex',
                    alignItems: open ? 'left' : 'center',
                    justifyContent: open ? 'left' : 'center',
                  }} primary={open ? item.text : extractLastName(item.text)}
                                primaryTypographyProps={{
                                  fontWeight: open ? 'normal' : 'normal',
                                  fontSize: open ? '1rem' : '0.7rem',
                                  variant: 'h5',
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