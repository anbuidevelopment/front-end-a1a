import { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta = {
  title: 'Components/Elements/Notifications',
  component: Notification,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    notification: {
      id: '1',
      type: 'info',
      message: 'This is info notification',
      duration: 2000,
    },
    onDismiss: (id: string) => alert(`Dismissing Notification with id: ${id}`),
  },
};

export const Warning: Story = {
  args: {
    notification: {
      id: '1',
      type: 'warning',
      message: 'This is warning notification',
      duration: 2000,
    },
    onDismiss: (id: string) => alert(`Dismissing Notification with id: ${id}`),
  },
};

export const Success: Story = {
  args: {
    notification: {
      id: '1',
      type: 'success',
      message: 'This is success notification',
      duration: 2000,
    },
    onDismiss: (id: string) => alert(`Dismissing Notification with id: ${id}`),
  },
};

export const Error: Story = {
  args: {
    notification: {
      id: '1',
      type: 'error',
      message: 'This is error notification',
      duration: 2000,
    },
    onDismiss: (id: string) => alert(`Dismissing Notification with id: ${id}`),
  },
};
