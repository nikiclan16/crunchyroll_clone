import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const ButtonVerTodo = () => {
  return (
    <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/popular' target="_blank" rel="noopener noreferrer">
        <Button sx={{border:'2px solid',borderRadius:'0px',padding:'10px 22px',color:'#F47521',height:'2.5rem',textAlign:'center',transition: '.2s','&:hover':{color:'#ffb07b'}}}>
          <h1 style={{fontSize:'0.875rem',fontWeight:800,letterSpacing:'0px',opacity:'2'}}>VER TODO</h1>
        </Button>
    </Link>
  )
}
