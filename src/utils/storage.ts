const storagePrefix = 'a1a_system_react_';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

const storageFilter = {
  getData: (name:string) => {
    return JSON.parse(window.sessionStorage.getItem(name) as string);
  },
  setData: (name:string,data:any) => {
    window.sessionStorage.setItem(name, JSON.stringify(data));
  },
  clearData: (name:string) => {
    window.sessionStorage.removeItem(name);
  },
};

export {storageFilter}
export default storage;
