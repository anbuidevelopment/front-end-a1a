import storage from '@/utils/storage';
import {
  AccountResponse,
  AuthAccount,
  executeLogin, executeRegister,
  LoginRequestDTO,
  RegisterCredentialsDTO,
} from '@/features/auth';
import { configureAuth } from 'react-query-auth';


function _b64DecodeUnicode(str: string) {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
}
function _mapAccountFromToken(): AuthAccount {
  return JSON.parse(_b64DecodeUnicode(storage.getToken().split('.')[1]))["account"];
}

async function handleUserResponse(data: AccountResponse) {
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
    await executeRegister(data);
  // const user = await handleUserResponse(response);
  return null;
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth({
  userFn: loadUser,
  loginFn: loginFn,
  registerFn: registerFn,
  logoutFn: logoutFn,
});