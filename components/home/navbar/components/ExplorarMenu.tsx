import React from 'react';

import Link from 'next/link';

import { Box, Tooltip, IconButton, Typography, Menu, MenuItem } from '@mui/material'
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import data from "../../../../mocks/HomeNavbar.json";

import styles from "../../../../styles/Home.module.css";

export const ExplorarMenu = () => {

    const [background, setBackground] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setBackground(true);
    };
    const handleClose = () => {
      setAnchorEl(null);
      setBackground(false);
    };

  return (
    <>
        <Box onClick={handleClick} sx={{cursor:'pointer',display:'flex', alignItems:'center',padding:'13px',
                backgroundColor:background ? '#141519' : '',
                "&:hover": {
                    backgroundColor: "#141519",
                  }, }}>

            <Tooltip title="">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'center',
                color:'#dadada',
                cursor:'pointer',
                "&:hover": {
                    backgroundColor: "#141519",
                    color:'#ffffff'
                },
            }}>

                    <Typography sx={{fontSize:'1rem',fontWeight:'500',mr:'4px'}}>Explorar</Typography>
                    <ArrowDropDownIcon/>
                </Box>
              </IconButton>
            </Tooltip>
        </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              borderRadius:'0px',
              bgcolor: '#141519',
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Box style={{display:'flex',height:'340px',padding:'32px 20px'}}>
            <Box>
                {
                    data.leftDrawer.map(data => (
                        <Link key={data.text} className="no-decoration" href={data.url} target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{width:'200px',padding:'12px 20px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography className={styles['navbar-menus-wrap']} style={{color:'#ffffff',fontSize:'.875rem',lineHeight:'1.125rem',maxWidth:'160px'}}>{data.text}</Typography>
                            </MenuItem>
                        </Link>
                    ))
                }
            </Box>

            <Divider orientation="vertical" variant="middle" flexItem color='#23252B' style={{width:'1.5px',margin:'0 40px'}} />

            <Box>
                
                <MenuItem  onClick={handleClose} style={{width:'200px',padding:'12px 20px',cursor:'default'}}>
                    <Typography style={{color:'#A0A0A0',fontSize:'.75rem',fontWeight:'600'}}>GÉNEROS</Typography>
                </MenuItem>
                
                <Box style={{display:'flex'}}>
                    <Box>
                        {
                            data.genders1.map(data => (
                                <Link key={data.text} className="no-decoration" href={data.url} target="_blank" rel="noopener noreferrer">
                                    <MenuItem onClick={handleClose} sx={{width:'200px',padding:'12px 20px',"&:hover": {backgroundColor: "#23252B"}}}>
                                        <Typography className={styles['navbar-menus-wrap']} style={{color:'#dadada',fontSize:'.875rem',lineHeight:'1.125rem',maxWidth:'160px'}}>{data.text}</Typography>
                                    </MenuItem>
                                </Link>
                            ))
                        }
                    </Box>


                    <Box>
                        {
                            data.genders2.map(data => (
                                <Link key={data.text} className="no-decoration" href={data.url} target="_blank" rel="noopener noreferrer">
                                    <MenuItem onClick={handleClose} sx={{width:'200px',padding:'12px 20px',"&:hover": {backgroundColor: "#23252B"}}}>
                                        <Typography className={styles['navbar-menus-wrap']} style={{color:'#dadada',fontSize:'.875rem',lineHeight:'1.125rem',maxWidth:'160px'}}>{data.text}</Typography>
                                    </MenuItem>
                                </Link>
                            ))
                        }
                    </Box>


                    <Box>
                        {
                            data.genders3.map(data => (
                                <Link key={data.text} className="no-decoration" href={data.url} target="_blank" rel="noopener noreferrer">
                                    <MenuItem onClick={handleClose} sx={{width:'200px',padding:'12px',"&:hover": {backgroundColor: "#23252B"}}}>
                                        <Typography className={styles['navbar-menus-wrap']} style={{color:'#dadada',fontSize:'.875rem',lineHeight:'1.125rem',maxWidth:'160px'}}>{data.text}</Typography>
                                    </MenuItem>
                                </Link>
                            ))
                        }
                    </Box>
                </Box>
            </Box>



        </Box>
       </Menu>
    </>
  )
}
