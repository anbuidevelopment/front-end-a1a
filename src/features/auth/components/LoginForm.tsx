import {Button, Card, CardContent, CircularProgress, Grid, IconButton, Stack, Typography,} from '@mui/material';
import {KeyOutlined, PersonOutline, VisibilityOffOutlined, VisibilityOutlined,} from '@mui/icons-material';
import {InputField} from '@/components/Form';
import {useState} from 'react';
import {useLogin} from '@/lib/auth';

type LoginFormProps = {
  onSuccess: () => void;
};

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [isShowPass, setIsShowPass] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const login = useLogin();

  const onShowPassword = () => {
    setIsShowPass(!isShowPass);
  };

  const onMouseDownPass = (e: any) => {
    e.preventDefault();
  };

  const onSubmitLogin = () => {
    login.mutate({ username: username, password: password });
  };

  if (login.isSuccess) {
    onSuccess()
  }

  return (
    <Grid item xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
      <Card>
        <CardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Stack spacing={2}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>

            <InputField
              fullwidth={true}
              id="outline-username"
              labelName="Username"
              valueName={username}
              setValue={setUsername}
              type="text"
              startAdornment={<PersonOutline sx={{ mr: 1 }} />}
            />

            <InputField
              fullwidth={true}
              id="outline-password"
              labelName="Password"
              valueName={password}
              setValue={setPassword}
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
