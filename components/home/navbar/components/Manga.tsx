import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const Manga = () => {
  return (
    <Link href='https://www.crunchyroll.com/es/comics/manga' className='no-decoration' target="_blank" rel="noopener noreferrer">
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',
            color:'#dadada',
            cursor:'pointer',
            padding:'20.5px',
            "&:hover": {
                backgroundColor: "#000000",
                color:'#ffffff'
              },
              }}>
                <Typography sx={{fontSize:'1rem',fontWeight:'500'}}>Manga</Typography>
        </Box>
    </Link>
  )
}
