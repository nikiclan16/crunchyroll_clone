import { MenuItem, Box, Typography } from "@mui/material"
import { useRouter } from "next/router"

export const Acceder = () => {

    const {push} = useRouter();

    return (
        <MenuItem onClick={()=> push('/login')} sx={{padding:'15px',mb:'10px',"&:hover": {
            backgroundColor: "#23252B"
        }}}>
            <Box style={{display:'flex',flexDirection:'column'}}>
              <Typography style={{color:'#dadada',fontSize:'1rem',fontWeight:'500'}}>Acceder</Typography>
              <Typography style={{color:'#A0A0A0',fontSize:'.875rem',fontWeight:'500'}}>¿Ya eres miembro de Crunchyroll? Te damos la<br/>bienvenida.</Typography>
            </Box>
        </MenuItem>
    )
}

export const CrearCuenta = () => {

    const {push} = useRouter();

    return (
        <MenuItem onClick={()=> push('/register')} sx={{padding:'15px',"&:hover": {
            backgroundColor: "#23252B"
          }}}>
            <Box style={{display:'flex',flexDirection:'column'}}>
              <Typography style={{color:'#dadada',fontSize:'1rem',fontWeight:'500'}}>Crear cuenta</Typography>
              <Typography style={{color:'#A0A0A0',fontSize:'.875rem',fontWeight:'500'}}>Suscríbete gratis o hazte Premium.</Typography>
            </Box>
        </MenuItem>
    )
}