import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import RightNavbarMenu from './components/RightNavbarMenu';
import LeftNavbarMenu from './components/LeftNavbarMenu';
import { CrunchyrollHover } from '@/public/SVG/CrunchyrollHover';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import NotAuthRightNavbar from './components/NotAuthRightNavbar';
import { useMediaQuery } from '@mui/material';
import { LeftDrawer } from './components/LeftDrawer';
import styles from "../../../styles/Home.module.css";


export default function NavbarHome() {

  const {status} = useSelector((state:RootState) => state.auth);

  const maxWith979px = useMediaQuery('(max-width:979px)');
 

  return (
      <AppBar className={styles["navbar"]}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',maxWidth:'1520px',width:'100%'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {
              maxWith979px 
              ? (
                <>
                  <LeftDrawer/>
                  <CrunchyrollHover/>
                </>
              ) : (
                <>
                  <CrunchyrollHover/>
                  <LeftNavbarMenu/>
                </>
              )
            }
          </Box>
          <Box>
            {
              status === 'authenticated' 
                ? <RightNavbarMenu />
                : <NotAuthRightNavbar/>
            }  
          </Box>
        </Toolbar>
      </AppBar>
  );
}
