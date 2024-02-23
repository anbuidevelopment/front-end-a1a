import { Meta, StoryObj } from '@storybook/react';
import { MuiDialog } from './Dialog';
import React from 'react';
import { useArgs } from '@storybook/preview-api';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Typography,
} from '@mui/material';
import { DeleteSharp } from '@mui/icons-material';
import { DeleteForm } from '@/features/dashboard/components/Elements/DeleteForm';

const meta: Meta = {
  title: 'Components/Elements/Dialog',
  component: MuiDialog,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof MuiDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    isOpen: false,
  },

  render: function Render(args) {
    const [{ isOpen,setIsOpen }, updateArgs] = useArgs();

    function close() {
      updateArgs({ isOpen: false });
    }

    function open() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <>
        <Button variant={'outlined'} onClick={open}>
          Open Alert Dialog
        </Button>
        <MuiDialog open={isOpen}
                   setOpen={close}
                   percentScreenWidth={'50%'}
                   percentScreenHeight={'50%'}
                   content={<Typography> 123</Typography>}
        />
      </>
    );
  },
};
