import { Alert, Snackbar, Stack } from '@mui/material';
import { useState } from 'react';

export type NotificationProps = {
  notification: {
    id: string;
    type: 'error' | 'warning' | 'info' | 'success';
    message: string;
    duration: number;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({
  notification: { id, type, message, duration = 2000 },
  onDismiss,
}: NotificationProps) => {
  const [open, setOpen] = useState(true);

  function onClose() {
    setOpen(false);
    onDismiss(id);
  }

  return (
    <Stack>
      <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
        <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
