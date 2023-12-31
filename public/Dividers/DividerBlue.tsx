import { Box, Divider } from '@mui/material'
import React from 'react'

export const DividerBlue = () => {
  return (
    <Box style={{display:'flex',alignItems:'center',height:'4px',marginBottom:'10px',width:'100%',justifyContent:'center',backgroundImage: 'linear-gradient(to left , #213944, #2abdbb)'}}>
        <Divider/>
    </Box>
  )
}
