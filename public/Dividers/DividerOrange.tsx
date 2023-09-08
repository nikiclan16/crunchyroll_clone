import { Box, Divider } from '@mui/material'
import React from 'react'

export const DividerOrange = () => {
  return (
    <Box sx={{display:'flex',alignItems:'center',height:'4px',mb:'10px',width:'100%',justifyContent:'center',backgroundImage: 'linear-gradient(to left , #fab818, #ef4323)'}}>
        <Divider/>
    </Box>
  )
}
