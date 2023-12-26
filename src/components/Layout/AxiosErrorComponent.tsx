import { useDispatch } from 'react-redux';
import { addNotification } from '@/store/notifications';
import { axios } from '@/lib/axios';

export const AxiosErrorComponent = () => {
  const dispatch = useDispatch();

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
        })
      );
      return Promise.reject(error);
    }
  );
  return <></>;
};
