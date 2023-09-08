import { Box } from '@mui/material'
import React from 'react'
import SelectIdioms from './SelectIdioms'

export const IdiomsAndPolitics = () => {
  return (
    <footer style={{width:'100vw',display:'flex',flexDirection:'column',bottom:'20px',position:'relative'}}>
        <Box className="footer-idioms-politics" sx={{mb:'20px',display:'flex', justifyContent:'center', alignItems:'center'}}>

            <p className='enlace-naranja paragraph-1_125rem-responsive'>Términos de uso</p>

            <p className="dividerFooter" style={{margin:'0px 15px',fontSize:'15px',lineHeight:'1.625rem',color:'#B9B8B9'}}>|</p>

            <p className='enlace-naranja paragraph-1_125rem-responsive'>Política de Privacidad</p>

            <p className="dividerFooter" style={{margin:'0px 15px',fontSize:'15px',lineHeight:'1.625rem',color:'#B9B8B9'}}>|</p>

            <p className='enlace-naranja paragraph-1_125rem-responsive'>Gestión de cookies</p>
            
        </Box>
        <Box className="footer-idioms-politics"  sx={{position:'relative',display:'flex',justifyContent:'space-around', alignItems:'center'}}>
            <p style={{fontSize:'15px',lineHeight:'1.625rem',fontWeight:'700'}}>© Crunchyroll, LLC</p>

            <Box>
                <SelectIdioms/>
            </Box>
        </Box>
    </footer>
  )


  
}

