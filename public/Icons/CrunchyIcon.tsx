import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export const CrunchyIcon = () => {

    const {push} = useRouter();

  return (
    <Box onClick={() => push('/home')} style={{cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center',color:'#f47521'}}>
    <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#f47521" d="M2.933 13.467a10.55 10.55 0 1 1 21.067-.8V12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12h.8a10.617 10.617 0 0 1-9.867-10.533zM19.2 14a3.85 3.85 0 0 1-1.333-7.467A7.89 7.89 0 0 0 14 5.6a8.4 8.4 0 1 0 8.4 8.4a6.492 6.492 0 0 0-.133-1.6A3.415 3.415 0 0 1 19.2 14z"/>
    </svg>
    <Typography variant='h2' style={{fontSize:'18px',fontWeight:'600',marginLeft:'5px',letterSpacing:'.5px'}}>crunchyroll</Typography>
  </Box>
  )
}
