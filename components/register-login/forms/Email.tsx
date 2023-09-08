import { Box, TextField } from '@mui/material';
import React from 'react'

interface EmailNameProps {
    email: string;
    onInputChange:(e: any) => void;
    emailValid: any;
    formSubmitted:boolean;
}

export const Email = ({email,onInputChange,emailValid,formSubmitted}:EmailNameProps) => {
  return (
    <Box sx={{ width: "100%", mb: "30px" }}>
        <TextField
            error={!!emailValid && formSubmitted}
            color="warning"
            fullWidth
            id="standard-basic"
            label="Dirección de email"
            variant="standard"

            name="email"
            value={email}
            onChange={onInputChange}
        />
    </Box>
  )
}
