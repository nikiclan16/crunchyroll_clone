import { Box, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react'

export const NoticiasMenu = () => {
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
                <Typography style={{fontSize:'1rem',fontWeight:'500',marginRight:'4px'}}>Noticias</Typography>
                <ArrowDropDownIcon/>
            </Box>
        </IconButton>
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
        <Box style={{backgroundColor:'#141519'}}>
        <Link className="no-decoration" href='https://www.crunchyroll.com/es/news' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#f8f8f8',padding:'6px 10px',fontSize:'.875rem',lineHeight:'1.125rem',fontWeight:'500'}}>Todas las noticias</Typography>
            </MenuItem>
        </Link>
    
        <Link className="no-decoration" href='https://www.crunchyroll.com/es/animeawards/' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#f8f8f8',padding:'6px 10px',fontSize:'.875rem',lineHeight:'1.125rem',fontWeight:'500'}}>Anime Awards</Typography>
            </MenuItem>
        </Link>
    
        <Link className="no-decoration" href='https://www.crunchyroll.com/es/events/' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#f8f8f8',padding:'6px 10px',fontSize:'.875rem',lineHeight:'1.125rem',fontWeight:'500'}}>Crunchyroll Expo</Typography>
            </MenuItem>
        </Link>
    
        <Link className="no-decoration" href='https://tickets.demonslayer-movie.com/' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#f8f8f8',padding:'6px 10px',fontSize:'.875rem',lineHeight:'1.125rem',fontWeight:'500'}}>Anime Movie Night</Typography>
            </MenuItem>
        </Link>
        </Box>
    </Menu>
</>
  )
}
