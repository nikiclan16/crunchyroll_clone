import { Box } from '@mui/material'
import React from 'react'

export const SearchRightNavbar = () => {
  return (
    <Box sx={{
        cursor:'pointer',
        padding:'17px',
        "&:hover": {
            backgroundColor: "#000000",
          },
        
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#DADADA" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
        </svg>
    </Box>
  )
}
