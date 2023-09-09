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
    <Box onClick={handleClick} sx={{cursor:'pointer',display:'flex', alignItems:'center',padding:'15.5px',
        backgroundColor:background ? '#000000' : '',
        "&:hover": {
            backgroundColor: "#000000",
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
                    backgroundColor: "#000000",
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
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      bgcolor: '#000000',
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
        <Box style={{backgroundColor:'#000000'}}>
        <Link className="no-decoration" href='https://www.crunchyroll.com/es/news' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#dadada',fontSize:'1rem'}}>Todas las noticias</Typography>
            </MenuItem>
        </Link>
    
        <Link className="no-decoration" href='https://www.crunchyroll.com/es/animeawards/' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#dadada',fontSize:'1rem'}}>Anime Awards</Typography>
            </MenuItem>
        </Link>
    
        <Link className="no-decoration" href='https://www.crunchyroll.com/es/events/' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#dadada',fontSize:'1rem'}}>Crunchyroll Expo</Typography>
            </MenuItem>
        </Link>
    
        <Link className="no-decoration" href='https://tickets.demonslayer-movie.com/' target="_blank" rel="noopener noreferrer">
            <MenuItem onClick={handleClose} sx={{display:'flex',width:'300px',"&:hover": {backgroundColor: "#23252B"}}}>
                <Typography style={{color:'#dadada',fontSize:'1rem'}}>Anime Movie Night</Typography>
            </MenuItem>
        </Link>
        </Box>
    </Menu>
</>
  )
}
