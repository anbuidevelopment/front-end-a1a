export type AuthAccount = {
  id: number;
  username: string;
  fullName: string;
  position: string;
  department: string;
  email: string;
  customerCode:string;
  gender: string;
  active: boolean;
};

export type AccountResponse = {
  access_token: string;
  refresh_token: string;
};
