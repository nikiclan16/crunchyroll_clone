import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const Juegos = () => {
  return (
    <Link href='https://www.crunchyroll.com/games/' className='no-decoration' target="_blank" rel="noopener noreferrer">
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',
            color:'#dadada',
            cursor:'pointer',
            padding:'18px',
            "&:hover": {
                backgroundColor: "#141519",
                color:'#ffffff'
              },
              }}>
                <Typography style={{fontSize:'1rem',fontWeight:'500'}}>Juegos</Typography>
        </Box>
    </Link>
  )
}
