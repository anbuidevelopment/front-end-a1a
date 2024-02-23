import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button, IconButton,
} from '@mui/material';
import { CloseSharp } from '@mui/icons-material';
import { useState } from 'react';

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  content?: any;
  percentScreenWidth?: string;
  percentScreenHeight?: string;
  buttonAccept?: boolean;
  buttonName?: string;
  buttonColor?: string;
  buttonColorBackground?: string;
  buttonStartIcon?: React.ReactNode;
  handleClickAccept?: () => void;
}

export const MuiDialog = ((props: DialogProps) => {

    const [isAccepting, setIsAccepting] = useState(false);

    const handleAcceptClick = () => {
      setIsAccepting(true);

      setTimeout(() => {
        props.setOpen(false);

        setIsAccepting(false);
      }, 2000);

      if (props.handleClickAccept) {
        props.handleClickAccept();
      }
    };


    return (
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: props.percentScreenWidth, height: props.percentScreenHeight } }}
        fullScreen
        open={props.open} onClose={() => props.setOpen(false)} aria-labelledby='dialog-title'
        aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title' fontStyle={'italic'}>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            {props.content}
          </DialogContentText>
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8, borderColor: 'red' }}
            onClick={() => props.setOpen(false)}>
            <CloseSharp />
          </IconButton>
        </DialogContent>
        <DialogActions>
          {props.buttonAccept && (<Button
            sx={{
              backgroundColor: props.buttonColorBackground,
              color: props.buttonColor,
              borderColor: props.buttonColor,
            }}
            startIcon={props.buttonStartIcon}
            onClick={handleAcceptClick}>{props.buttonName}</Button>)}
        </DialogActions>
      </Dialog>
    );
  }
);

