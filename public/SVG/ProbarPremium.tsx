import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import React from 'react'
import { CrownRightNavbar } from '../Icons/CrownRightNavbar';
import styles from "../../styles/Home.module.css";

export const ProbarPremium = () => {

  const {push} = useRouter();

  return (
    <>
        <Box className={styles["padding-crown"]} onClick={() => push('/offer')}  sx={{cursor:'pointer',display:'flex', height:'100%',alignItems:'center',justifyContent:'center',padding:'7.5px',
            "&:hover": {
                backgroundColor: "#141519",
        },}}>
            <CrownRightNavbar/>        
            <Box className="display-none-567" style={{display:'flex',flexDirection:'column'}} >
                <Typography style={{color:'#FAB818',fontSize:'.625rem',fontWeight:'700'}}>PROBAR</Typography>
                <Typography style={{color:'#FAB818',fontSize:'.625rem',fontWeight:'700'}}>GRATIS</Typography>
                <Typography style={{color:'#ffffff',fontSize:'.625rem',fontWeight:'700'}}>PREMIUM</Typography>
            </Box>
        </Box>
    </>
  )
}
