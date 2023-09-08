import { Box } from '@mui/material'
import React from 'react'

export const CoronaOfferCards = () => {
  return (
    <Box sx={{border:'10px solid #FAB818', borderRadius:'50%',backgroundColor:'#FAB818'}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crown" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
        </svg>
    </Box>
  )
}
