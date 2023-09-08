import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import React from 'react'
import { CrownRightNavbar } from '../Icons/CrownRightNavbar';
import styles from "../../styles/Home.module.css";

export const ProbarPremium = () => {

  const {push} = useRouter();

  return (
    <>
        <Box className={styles["padding-crown"]} onClick={() => push('/offer')}  sx={{cursor:'pointer',display:'flex', height:'100%',alignItems:'center',justifyContent:'center',padding:'10px',
            "&:hover": {
                backgroundColor: "#000000",
        },}}>
            <CrownRightNavbar/>        
            <Box className="display-none-567" sx={{display:'flex',flexDirection:'column'}} >
                <Typography sx={{color:'#FAB818',fontSize:'.625rem',fontWeight:'700'}}>PROBAR</Typography>
                <Typography sx={{color:'#FAB818',fontSize:'.625rem',fontWeight:'700'}}>GRATIS</Typography>
                <Typography sx={{color:'#ffffff',fontSize:'.625rem',fontWeight:'700'}}>PREMIUM</Typography>
            </Box>
        </Box>
    </>
  )
}
