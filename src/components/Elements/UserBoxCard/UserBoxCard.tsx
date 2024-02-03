import {
  Avatar,
  Box, ButtonGroup,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout, useUser } from '@/lib/auth';
import { useContext, useState } from 'react';
import { ColorModeContext } from '@/App';
import { DarkModeSharp, LightModeSharp, LogoutSharp, VerifiedUserSharp } from '@mui/icons-material';


export const UserBoxCard = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const user = useUser();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const logout = useLogout();

  const items = [
    {
      text: 'User Info',
      icon: <VerifiedUserSharp sx={{ color: '#0487D9' }} />,
      to: '/user',
      onClick: () => {
      },
    },
    {
      text: 'Log out',
      icon: <LogoutSharp sx={{ color: '#0487D9' }} />,
      to: '',
      onClick: () => {
        logout.mutate({});
      },
    },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Stack spacing={0.5} direction={'row'}>
      <Box>
        <ButtonGroup
          disableElevation
          variant='contained'
          aria-label='Disabled elevation buttons'>
          <IconButton sx={{
            backgroundColor: 'white',
            color: 'black',
            fontSize: 'small',
          }} onClick={() => {
            colorMode.toggleColorMode();
          }}>
            {theme.palette.mode === 'dark' ? <LightModeSharp sx={{ color: '#8E54E9' }} /> :
              <DarkModeSharp sx={{ color: '#8E54E9' }} />}
          </IconButton>
        </ButtonGroup>
      </Box>
      <Tooltip title='Open settings'>
        <Box>
          <Stack direction={'row'} spacing={1} onClick={handleOpenUserMenu}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt='Image'
                src={user.data?.gender === 'FEMALE' ? process.env.PUBLIC_URL + '/static/images/avatars/female.png' : process.env.PUBLIC_URL + '/static/images/avatars/male.png'} />
            </IconButton>
            <Typography variant={'h3'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
              {user.data?.fullName}
            </Typography>
          </Stack>
        </Box>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {items.map((setting) => (
          <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
            <Link
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
              to={setting.to}
              onClick={setting.onClick}>
              <ListItemIcon>
                {setting.icon}
              </ListItemIcon>
              <ListItemText
                primary={setting.text}
                onClick={() => navigate(setting.to)}
                primaryTypographyProps={{
                  fontWeight: 'lighter',
                  variant: 'body2',
                }} />
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};