import { Notification } from './Notification';
import { useNotificationStore } from '@/store/notifications';

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <div>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  );
};
