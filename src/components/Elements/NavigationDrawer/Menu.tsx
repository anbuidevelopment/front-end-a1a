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
import { useDisclosure } from '@/hooks/useDisclosure';
import { Fragment } from 'react';
import { EditNoteSharp } from '@mui/icons-material';
import { customStyles, extractLastName } from '@/utils/format';
import { LogoClothes } from '@/assets/clothes';
import { LogoProcess } from '@/assets/process';


type MenuProps = {
  open?: boolean
}

export const Menu = ({ open }: MenuProps) => {
  const { open: openMenu } = useDisclosure();
  const menuItems = [
    {
      text: 'Style Master',
      icon: <Avatar variant={'circular'} sx={{ backgroundColor: customStyles['color1'] }}> <LogoClothes /></Avatar>,
      to: '/',
      onClick: openMenu,
    },
    {
      text: 'Style Info',
      icon: <Avatar variant={'circular'} sx={{ backgroundColor: customStyles['color1'] }}> <EditNoteSharp /></Avatar>,
      to: '/info',
      onClick: openMenu,
    },
    {
      text: 'Production Process',
      icon: <Avatar variant={'circular'} sx={{ backgroundColor: customStyles['color1'] }}> <LogoProcess /></Avatar>,
      to: '/process',
      onClick: openMenu,
    },
  ];

  return (
    <List sx={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
      {menuItems.map((item, index) => (
        <Fragment key={index}>
          <ListItem key={item.text} disablePadding>
            <Tooltip title={<Typography variant={'h3'} sx={{backgroundColor:'#FCEEFC',color:'#8E54E9'}}> {item.text} </Typography>} placement={'right-start'}>
              <Link to={item.to}
                    onClick={item.onClick}
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
                    display: open ? 'flex' : 'block',
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
                                  fontWeight: open ? 'normal' : 'bold',
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