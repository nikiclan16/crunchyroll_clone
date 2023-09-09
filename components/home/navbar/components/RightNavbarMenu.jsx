import * as React from 'react';
import Box from '@mui/material/Box';
import { ProbarPremium } from '@/public/SVG/ProbarPremium';
import { SearchRightNavbar } from '@/public/Icons/SearchRightNavbar';
import { ListRightNavbar } from '@/public/Icons/ListRightNavbar';
import { ProfileMenu } from './ProfileMenu';


export default function RightNavbarMenu() {




  return (
    <React.Fragment>
      <Box style={{display: 'flex', alignItems: 'center', textAlign: 'center',color:'#dadada' }}>

        <ProbarPremium/>

        <SearchRightNavbar/>
        
        <ListRightNavbar/>

        <ProfileMenu/>
        
      </Box>
    </React.Fragment>
  );
}
