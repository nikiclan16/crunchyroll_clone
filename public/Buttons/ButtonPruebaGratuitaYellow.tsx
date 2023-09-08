import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export const ButtonPruebaGratuitaYellow = () => {

  const {push} = useRouter();


  return (
    <Button onClick={()=> push('/offer')} sx={{display:'flex',backgroundColor:'#FAB818',borderRadius:'0px',padding:'8px 40px','&:hover':{transitionDuration:'.5s',backgroundColor:'#FFC94D'}}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-crown"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
        </svg>
        <Typography sx={{color:'#000000',fontSize:'.875rem',fontWeight:'800',ml:'5px'}}>PRUEBA GRATUITA DE 14 DÍAS</Typography>
    </Button>
  )
}
