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
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'
import { CloseSharp, DoneSharp } from '@mui/icons-material';

interface DialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  content?: any
  fullscreen?: boolean
  percentScreen?:string
  buttonAccept?:boolean
}

export function MuiDialog({open, setOpen, title, content, fullscreen,percentScreen,buttonAccept}: DialogProps) {


  return (
    <Dialog sx={{
      width: percentScreen,
      height: percentScreen,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    }}
            fullScreen open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title'
            aria-describedby='dialog-description'>
      <DialogTitle id='dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='dialog-description'>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttonAccept ? <Button  sx={{ backgroundColor: '#FDCF76', color: 'black' }} startIcon={<DoneSharp />} variant={'contained'} onClick={() => setOpen(false)}>Accept</Button> : null}
        <Button startIcon={<CloseSharp />} variant={'outlined'} onClick={() => setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

