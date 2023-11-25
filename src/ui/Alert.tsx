import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertData {
    title: string;
    content: string
}

interface Props {
    open: boolean;
    handleClose: () => void;
    handleAccept: () => void;
    data: AlertData;
    sx?: SxProps<Theme> | undefined
}

export function AlertDialog({open, data, sx,handleClose, handleAccept}: Props) {

  return (

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={sx}
      >
        <DialogTitle id="alert-dialog-title">
            {data.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAccept} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
  );
}
