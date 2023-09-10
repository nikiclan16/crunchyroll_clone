import Box from '@mui/material/Box';
import { ProbarPremium } from '@/public/SVG/ProbarPremium';
import { SearchRightNavbar, ListRightNavbar } from '@/public/Icons';
import { ProfileMenu } from './ProfileMenu';


export default function RightNavbarMenu() {




  return (
      <Box style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent:'center', color:'#dadada' }}>

        <ProbarPremium/>

        <SearchRightNavbar/>
        
        <ListRightNavbar/>

        <ProfileMenu/>
        
      </Box>
  );
}
