import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'


interface PasswordNameProps {
    password: string;
    onInputChange:(e: any) => void;
    passwordValid: any;
    formSubmitted:boolean;
}

export const Password = ({password,onInputChange,passwordValid,formSubmitted}:PasswordNameProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (
      event:any
    ) => {
      event.preventDefault();
    };

  return (
    <Box style={{ width: "100%" }}>
        <form>
          <FormControl fullWidth variant="standard" color="warning">
            <InputLabel error={!!passwordValid && formSubmitted} htmlFor="standard-adornment-password">
              Contraseña
            </InputLabel>
            <Input
              error={!!passwordValid && formSubmitted}
              name="password"
              value={password}
              onChange={onInputChange}

              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>
    </Box>
  )
}
