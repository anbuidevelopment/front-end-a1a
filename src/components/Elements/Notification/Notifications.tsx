import { useAppDispatch, useAppSelector } from '@/store/store';
import { dismissNotification } from '@/store/notifications';
import { Notification } from './Notification';

export const Notifications = () => {
  const notifications = useAppSelector((state) => state.notifications.notifications);
  const dispatch = useAppDispatch();

  function handleDismiss(id: string) {
    dispatch(dismissNotification(id));
  }

  return (
    <div aria-live={'assertive'}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} onDismiss={handleDismiss} />
      ))}
    </div>
  );
};
