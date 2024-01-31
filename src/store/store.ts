import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notifications';
import downtimeReducer from './downtime';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    downtime: downtimeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
