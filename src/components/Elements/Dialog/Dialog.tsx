// import * as React from 'react';
// import { Dialog as UIDialog } from '@mui/material';
//
// type DialogProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// };
//
// export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
//   return (
//     <>
//       <UIDialog
//         open={isOpen}
//         onClose={onClose}
//         sx={{
//           width: '75%',
//           height: '75%',
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%,-50%)'
//         }}
//         fullScreen
//       >
//         {children}
//       </UIDialog>
//     </>
//   );
// };
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { CloseSharp } from '@mui/icons-material';
import { useState } from 'react';

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  content?: any;
  percentScreenW?: string;
  percentScreenH?: string;
  buttonAccept?: boolean;
  buttonName?: string;
  buttonColor?: string;
  buttonColorBackground?: string;
  buttonStartIcon?: React.ReactNode;
  handleClickAccept?: () => void;
}

export function MuiDialog({
                            open,
                            setOpen,
                            title,
                            content,
                            percentScreenW,
                            percentScreenH,
                            buttonAccept,
                            buttonName,
                            handleClickAccept,
                            buttonColor,
                            buttonStartIcon,
                            buttonColorBackground,
                          }: DialogProps) {

  const [isAccepting, setIsAccepting] = useState(false);

  const handleAcceptClick = () => {
    setIsAccepting(true);

    setTimeout(() => {
      setOpen(false);

      setIsAccepting(false);
    }, 2000);

    if (handleClickAccept) {
      handleClickAccept();
    }
  };


  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: percentScreenW, height: percentScreenH } }}
      fullScreen
      open={open} onClose={()=>setOpen(false)} aria-labelledby='dialog-title'
      aria-describedby='dialog-description'>
      <DialogTitle id='dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='dialog-description'>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: '#F25E7A',backgroundColor:'#FFFFFF' }}
                startIcon={<CloseSharp />}
                variant={'outlined'}
                onClick={() => setOpen(false)}>Cancel</Button>
        {buttonAccept ? <Button
          sx={{ backgroundColor: buttonColorBackground, color: buttonColor }}
          startIcon={buttonStartIcon} variant={'contained'}
          onClick={handleAcceptClick}>{buttonName}</Button> : null}
      </DialogActions>
    </Dialog>
  );
}

