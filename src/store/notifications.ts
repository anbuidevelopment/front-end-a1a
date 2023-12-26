import { createSlice, nanoid } from '@reduxjs/toolkit';

export type Notification = {
  id: string;
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
  duration: number;
};

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = { notifications: [] };

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    addNotification(state, action: { payload: Omit<Notification, 'id'> }) {
      state.notifications.push({ id: nanoid(), ...action.payload });
    },
    dismissNotification(state, action: { payload: string }) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { addNotification, dismissNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
