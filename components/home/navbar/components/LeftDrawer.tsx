import { Box, Divider, Drawer, IconButton, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import Link from 'next/link';
import data from "../../../../mocks/HomeNavbar.json";
import styles from "../../../../styles/Home.module.css";

export const LeftDrawer = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <IconButton
                onClick={() => setIsOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                style={{ marginRight: 2 }}
            >
                <MenuIcon/>
        </IconButton>

        <Drawer
            open={ isOpen }
            anchor='left'
            style={{transition: 'all 0.5s ease-out'}}
            onClose={() => setIsOpen(false)}
        >
            <Box className={styles["left-drawer"]}>

                <MenuItem style={{display:'flex',width:'200px',cursor:'default'}}>
                    <Typography style={{color:'#A0A0A0',fontSize:'.75rem',fontWeight:'600'}}>EXPLORAR</Typography>
                </MenuItem>

                {
                    data.leftDrawer.map(data => (
                        <Link key={data.text} className="no-decoration" href={data.url} target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={()=> setIsOpen(false)} sx={{display:'flex',width:'100%',height:'55px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography style={{color:'#ffffff',fontSize:'1rem'}}>{data.text}</Typography>
                            </MenuItem>
                        </Link>
                    ))
                    
                }


                <Divider color='#23252B' style={{height:'1.5px',width:'100%'}} />

                <Link className="no-decoration" href='https://www.crunchyroll.com/es/comics/manga' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={()=> setIsOpen(false)} sx={{display:'flex',width:'100%',height:'55px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography style={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Manga</Typography>
                    </MenuItem>
                </Link>

                <Link className="no-decoration" href='https://www.crunchyroll.com/games/' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={()=> setIsOpen(false)} sx={{display:'flex',width:'100%',height:'55px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography style={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Juegos</Typography>
                    </MenuItem>
                </Link>

            </Box>
        </Drawer>
    </>
  )
}
