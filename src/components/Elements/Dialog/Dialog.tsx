import * as React from 'react';
import { Dialog as UIDialog } from '@mui/material';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <>
      <UIDialog
        open={isOpen}
        onClose={onClose}
        fullWidth={true}
      >
        {children}
      </UIDialog>
    </>
  );
};
