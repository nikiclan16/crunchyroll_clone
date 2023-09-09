
import { ConnectWithUsFooter, CrunchyrollFooter, CuentaFooter, NavigationFooter } from '@/mocks/dataFooter';
import { Box, Divider, useMediaQuery } from '@mui/material'
import React from 'react'
import styles from "../../styles/Home.module.css";


export const FooterHome = () => {

  const maxWith799 = useMediaQuery("(max-width:799px)")

  return (
    <Box style={{width:'100vw',padding:'0px 30px',paddingBottom:'100px',display:'flex',justifyContent:'center',background:'#000 linear-gradient(180deg, #0000, #213944)'}}>
      <Box className={styles["container-footer-home"]}>

        <NavigationFooter/>

        <Divider color="#23252B" style={{ height: "2px",margin:'20px 0px',display:maxWith799 ? '' : 'none' }} />
          
        <ConnectWithUsFooter/>

        <Divider color="#4a4e58" style={{ height: "2px",margin:'20px 0px',display:maxWith799 ? '' : 'none'  }} />

        <CrunchyrollFooter/>      

        <Box style={{display:maxWith799 ? 'none' : ''}}>
          <CuentaFooter/>
        </Box>
      </Box>

    </Box>
  )
}
