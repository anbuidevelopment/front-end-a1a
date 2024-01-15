import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  KeyOutlined,
  PersonOutline,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { InputField } from '@/components/Form';
import { useState } from 'react';
import { useLogin, useLogout } from '@/lib/auth';

type LoginFormProps = {
  onSuccess: () => void;
};

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [isShowPass, setIsShowPass] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const logout = useLogout();

  const onLogout = () => {
    logout.mutate({});
  };

  const login = useLogin();
  const onShowPassword = () => {
    setIsShowPass(!isShowPass);
  };

  const onMouseDownPass = (e: any) => {
    e.preventDefault();
  };

  const onSubmitLogin = () => {

    login.mutate({ username: username, password: password });
    setTimeout(() => {
      onSuccess();
    }, 3000);
  };

  // if (login.isSuccess) {
  //   onSuccess();
  // }

  return (
    <Grid item xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
      <Button onClick={onLogout}>Logout</Button>
      <Card>
        <CardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Stack spacing={2}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>

            <InputField
              fullWidth={true}
              id="outline-username"
              label="Username"
              value={username}
              onChange={event => setUsername(event.target.value.toUpperCase())}
              type="text"
              startAdornment={<PersonOutline sx={{ mr: 1 }} />}
            />

            <InputField
              fullWidth={true}
              id="outline-password"
              label="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              type={isShowPass ? 'text' : 'password'}
              onEnterPress={onSubmitLogin}
              startAdornment={<KeyOutlined sx={{ mr: 1 }} />}
              endAdornment={
                <IconButton onClick={onShowPassword} onMouseDown={onMouseDownPass} edge={'end'}>
                  {isShowPass ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                </IconButton>
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={login.isPending}
              onClick={onSubmitLogin}
            >
              {login.isPending ? <CircularProgress sx={{ color: 'white' }} size={25} /> : 'Login'}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
