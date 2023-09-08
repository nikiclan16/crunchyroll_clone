import { Box } from '@mui/material'
import React from 'react'

export const ListRightNavbar = () => {
  return (
    <Box 
      className="display-none-567"
      sx={{
        cursor:'pointer',
        padding:'17px',
        "&:hover": {
            backgroundColor: "#000000",
          },
        
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#DADADA" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
        </svg>
    </Box>
  )
}
