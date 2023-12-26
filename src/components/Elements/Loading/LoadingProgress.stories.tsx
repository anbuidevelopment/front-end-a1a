import { Meta, StoryObj } from '@storybook/react';

import { LoadingProgress } from './LoadingProgress';

const meta: Meta = {
  title: 'Components/Elements/LoadingProgress',
  component: LoadingProgress,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof LoadingProgress>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => <LoadingProgress />,
};
