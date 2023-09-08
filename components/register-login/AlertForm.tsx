import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';


interface AlertFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertForm = ({ open, setOpen}: AlertFormProps) => {

  const {errorMessage} = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [open, setOpen]);

  return (
    <Box sx={{ width: '100%', position: 'absolute', top: '0px', zIndex: '3' }}>
      <Collapse in={open}>
        <Alert
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '0px',
            justifyContent: 'center',
            color: '#000',
            fontSize: '1rem',
            fontWeight: '500',
            backgroundColor:'#EF4323'
          }}
          variant="filled"
          severity='error'
          action={
            <IconButton
              aria-label="close"
              color="default"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Typography>{errorMessage}</Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}
