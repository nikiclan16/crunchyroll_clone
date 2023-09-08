import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loader = () => {
  return (
    <Box sx={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#000'}}>
        <CircularProgress color='warning'/>
    </Box>
  )
}
