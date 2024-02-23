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
  KeySharp,
  PersonSharp,
  VisibilityOffSharp,
  VisibilitySharp,
} from '@mui/icons-material';
import { InputField } from '@/components/Form';
import { useState } from 'react';
import { useLogin, useLogout } from '@/lib/auth';
import { customStyles } from '@/utils/format';

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

      <Card>
        <CardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Stack spacing={2}>
            <Typography variant='h3' gutterBottom sx={{ color: customStyles['colorIcon'] }}>
              Login
            </Typography>

            <InputField
              fullWidth={true}
              id='outline-username'
              label='Username'
              value={username}
              onChange={event => setUsername(event.target.value.toUpperCase())}
              type='text'
              startAdornment={<PersonSharp sx={{ mr: 1, color: customStyles['colorIcon'] }} />}
            />

            <InputField
              fullWidth={true}
              id='outline-password'
              label='Password'
              value={password}
              onChange={event => setPassword(event.target.value)}
              type={isShowPass ? 'text' : 'password'}
              onEnterPress={onSubmitLogin}
              startAdornment={<KeySharp sx={{ mr: 1, color: customStyles['colorIcon'] }} />}
              endAdornment={
                <IconButton onClick={onShowPassword} onMouseDown={onMouseDownPass} edge={'end'}>
                  {isShowPass ? <VisibilityOffSharp sx={{ color: customStyles['colorIcon'] }} /> :
                    <VisibilitySharp sx={{ color: customStyles['colorIcon'] }} />}
                </IconButton>
              }
            />
            <Button
              type='submit'
              variant='contained'
              sx={{ backgroundColor: customStyles['colorBackgroundText']}}
              fullWidth
              disabled={login.isPending}
              onClick={onSubmitLogin}
              className='text-2xl'>
              {login.isPending ? <CircularProgress sx={{ color: 'white' }} size={25} /> : 'Login'}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
