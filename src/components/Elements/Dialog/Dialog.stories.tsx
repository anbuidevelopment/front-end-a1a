import { Meta, StoryObj } from '@storybook/react';
//import { MuiDialog:Dialog } from './Dialog';
import React from 'react';
import { useArgs } from '@storybook/preview-api';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const meta: Meta = {
  title: 'Components/Elements/Dialog',
  //component: MuiDialog,
  parameters: {
    controls: { expanded: true },
  },
} //satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    isOpen: false,
  },

  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function close() {
      updateArgs({ isOpen: false });
    }

    function open() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <>
        {/*<Button variant={'outlined'} onClick={open}>*/}
        {/*  Open Alert Dialog*/}
        {/*</Button>*/}
        {/*<Dialog isOpen={isOpen} onClose={close}>*/}
        {/*  <DialogTitle>This is the demo of App Dialog</DialogTitle>*/}
        {/*  <DialogContent>*/}
        {/*    <DialogContentText>*/}
        {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum risus eu*/}
        {/*      faucibus ullamcorper. Nullam faucibus sapien augue, a faucibus neque tincidunt ut.*/}
        {/*      Nullam viverra justo a lorem efficitur, ac ullamcorper dolor scelerisque. Nullam*/}
        {/*      egestas, odio auctor tristique ullamcorper, justo nunc venenatis urna, ac cursus*/}
        {/*      libero mauris vitae mauris.*/}
        {/*    </DialogContentText>*/}
        {/*  </DialogContent>*/}
        {/*  <DialogActions>*/}
        {/*    <Button onClick={close}>Cancel</Button>*/}
        {/*    <Button onClick={close} autoFocus>*/}
        {/*      Confirm*/}
        {/*    </Button>*/}
        {/*  </DialogActions>*/}
        {/*</Dialog>*/}
      </>
    );
  },
};
