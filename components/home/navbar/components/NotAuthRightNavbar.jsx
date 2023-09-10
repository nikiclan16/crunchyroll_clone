import { useState } from 'react';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ProbarPremium } from '@/public/SVG/ProbarPremium';
import { ButtonPruebaGratuitaYellow } from '@/public/Buttons/ButtonPruebaGratuitaYellow';
import { SearchRightNavbar, ListRightNavbar } from '@/public/Icons';
import { Acceder, CrearCuenta } from './RegisterOrLogin';


export default function RightNavbarMenu() {

  const [background, setBackground] = useState(false);


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBackground(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setBackground(false);
  };


  return (
      <Box style={{display: 'flex', alignItems: 'center', textAlign: 'center',color:'#dadada' }}>

        <ProbarPremium/>

        <SearchRightNavbar/>
        
        <ListRightNavbar/>
        
        <Box onClick={handleClick} sx={{cursor:'pointer',padding:'13px',
            backgroundColor:background ? '#141519' : '',
            "&:hover": {
                backgroundColor: "#141519",
        }, }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#dadada" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              borderRadius:'0px',
              bgcolor: '#141519',
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Box style={{backgroundColor:'#141519'}}>
            <CrearCuenta/>
            <Acceder/>
            <MenuItem style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <ButtonPruebaGratuitaYellow/>
            </MenuItem>
          </Box>
        </Menu>
      </Box>
  );
}
