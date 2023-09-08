import { Box, Tooltip, IconButton, Typography, Menu, MenuItem } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';

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
        <Box onClick={handleClick} sx={{cursor:'pointer',display:'flex', alignItems:'center',padding:'15.5px',
                backgroundColor:background ? '#000000' : '',
                "&:hover": {
                    backgroundColor: "#000000",
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
                    backgroundColor: "#000000",
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
        <Box sx={{display:'flex'}}>
            <Box sx={{backgroundColor:'#000000',margin:'30px'}}>
                <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/popular' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'10px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Popular</Typography>
                    </MenuItem>
                </Link>

                <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/new' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'10px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Novedades</Typography>
                    </MenuItem>
                </Link>

                <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/alphabetical' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'10px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Alfabético</Typography>
                    </MenuItem>
                </Link>

                <Link className="no-decoration" href='https://www.crunchyroll.com/es/simulcasts/seasons/summer-2023' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'10px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Temporada de simulcast</Typography>
                    </MenuItem>
                </Link>

                <Link className="no-decoration" href='https://www.crunchyroll.com/es/simulcastcalendar' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'10px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Calendario de<br/>lanzamientos</Typography>
                    </MenuItem>
                </Link>

                <Link className="no-decoration" href='https://www.crunchyroll.com/es/music' target="_blank" rel="noopener noreferrer">
                    <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'10px',"&:hover": {backgroundColor: "#23252B"}}}>
                        <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Videos musicales y<br/>conciertos</Typography>
                    </MenuItem>
                </Link>
            </Box>

            <Divider orientation="vertical" variant="middle" flexItem color='#23252B' sx={{width:'1.5px'}} />

            <Box sx={{backgroundColor:'#000000',margin:'30px'}}>
                
                <MenuItem  onClick={handleClose} sx={{display:'flex',width:'200px',cursor:'default'}}>
                    <Typography sx={{color:'#A0A0A0',fontSize:'1rem'}}>GÉNEROS</Typography>
                </MenuItem>
                
                <Box sx={{display:'flex'}}>
                    <Box>
                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/action' target="_blank" rel="noopener noreferrer">
                            <MenuItem sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Acción</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/adventure' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Aventura</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/comedy' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Comedia</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/drama' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Drama</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/fantasy' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Fantasia</Typography>
                            </MenuItem>
                        </Link>
                    </Box>


                    <Box>
                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/music' target="_blank" rel="noopener noreferrer">
                            <MenuItem sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Musical</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/romance' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Romance</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/sci-fi' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Ciencia Ficción</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/seinen' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Seinen</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/shojo' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Shoujo</Typography>
                            </MenuItem>
                        </Link>
                    </Box>


                    <Box>
                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/shonen' target="_blank" rel="noopener noreferrer">
                            <MenuItem sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Shounen</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/slice-of-life' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Recuentos de la Vida</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/sports' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem'}}>Deportes</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/supernatural' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Sobrenatural</Typography>
                            </MenuItem>
                        </Link>

                        <Link className="no-decoration" href='https://www.crunchyroll.com/es/videos/thriller' target="_blank" rel="noopener noreferrer">
                            <MenuItem onClick={handleClose} sx={{display:'flex',width:'200px',mb:'18px',"&:hover": {backgroundColor: "#23252B"}}}>
                                <Typography sx={{color:'#ffffff',fontSize:'1rem',lineHeight:'18px'}}>Thriller</Typography>
                            </MenuItem>
                        </Link>
                    </Box>
                </Box>
            </Box>



        </Box>
       </Menu>
    </>
  )
}
