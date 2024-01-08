import { useDispatch } from 'react-redux';
import { addNotification } from '@/store/notifications';
import { axios } from '@/lib/axios';
import { useLogout, useUser } from '@/lib/auth';

export const AxiosErrorComponent = () => {
  const dispatch = useDispatch();
const logout=useLogout()
  axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const message = error.response?.data?.message || error.message;
      dispatch(
        addNotification({
          duration: 2000,
          type: 'error',
          message,
        }),
      );
      if (error.response.status == 403) {
        logout.mutate({})
      }
      return Promise.reject(error);
    },
  );
  return <></>;
};
