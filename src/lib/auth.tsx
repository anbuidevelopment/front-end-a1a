import storage from '@/utils/storage';
import {
  AccountResponse,
  AuthAccount,
  executeLogin,
  LoginRequestDTO,
  RegisterCredentialsDTO,
} from '@/features/auth';
import { configureAuth } from 'react-query-auth';

function _mapAccountFromToken(): AuthAccount {
  return JSON.parse(atob(storage.getToken().split('.')[1]));
}

async function handleUserResponse(data: AccountResponse) {
  console.log('Testing: ', data);
  storage.setToken(data.access_token);
  return _mapAccountFromToken();
}

async function loadUser() {
  if (storage.getToken()) {
    return _mapAccountFromToken();
  }
  return null;
}

async function loginFn(data: LoginRequestDTO) {
  const response = await executeLogin(data);
  return await handleUserResponse(response);
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

async function registerFn(data: RegisterCredentialsDTO) {
  // const response = await executeRegister(data);
  // const user = await handleUserResponse(response);
  return null;
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth({
  userFn: loadUser,
  loginFn: loginFn,
  registerFn: registerFn,
  logoutFn: logoutFn,
});
