import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { CrunchyIcon } from '../../public/Icons/CrunchyIcon';


export const NavbarRegisterLogin = () => {

  
  return (
      <AppBar className='navbar'>
        <Toolbar style={{justifyContent:'space-between',width:'100%'}}>
           <CrunchyIcon/>
           <Box/>
        </Toolbar>
      </AppBar>
  );
}
