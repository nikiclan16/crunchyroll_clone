import { CrownYellowFooter } from "@/public/Icons/CrownYellowFooter"
import { FacebookIcon } from "@/public/Icons/FacebookIcon"
import { InstagramIcon } from "@/public/Icons/InstagramIcon"
import { TiktokIcon } from "@/public/Icons/TiktokIcon"
import { TwitterIcon } from "@/public/Icons/TwitterIcon"
import { YoutubeIcon } from "@/public/Icons/YoutubeIcon"
import { Box, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

const footerNavigationData = [
    'Explorar lo más popular',
    'Explorar los Simulcasts',
    'Explorar Manga',
    'Calendario de lanzamientos',
    'Noticias',
    'Juegos',
]

export const NavigationFooter = () => {
    return(
        <Box className={styles["container-row-footer"]}>
            <Typography variant='h4' style={{fontSize:'1rem',fontWeight:'600',color:'#fff',marginBottom:'10px'}}>Navegación</Typography>
            <Box className={styles["container-column-footer"]}>
                {
                footerNavigationData.map((data,index) => (
                    <Typography key={index} width='fit-content' sx={{fontSize:'.875rem',fontWeight:'500',color:'#a0a0a0',mb:'10px',cursor:'pointer',transitionDuration:'.2s','&:hover':{color:'#fff',textDecoration:'underline'}}}>{data}</Typography>
                ))
                }
            </Box>
        </Box>
    )
} 

const footerConnectWithUsData = [
    {
        "icon":<YoutubeIcon/>,
        "text": "Youtube"
    },
    {
        "icon":<FacebookIcon/>,
        "text": "Facebook"
    },
    {
        "icon":<TwitterIcon/>,
        "text": "Twitter"
    },
    {
        "icon":<InstagramIcon/>,
        "text": "Instagram"
    },
    {
        "icon":<TiktokIcon/>,
        "text": "Tiktok"
    }
]

export const ConnectWithUsFooter = () => {
    return (
        <Box className={styles["container-row-footer"]}>
            <Typography variant='h4' style={{fontSize:'1rem',fontWeight:'600',color:'#fff',marginBottom:'10px'}}>Conecta con nosotros</Typography>

            <Box className={styles["container-column-footer"]}>
                {
                    footerConnectWithUsData.map(data => (
                        <Box width='fit-content' className='iconsHoverToColorWhite' sx={{display:'flex',alignItems:'center',mb:'10px',color:'#a0a0a0',cursor:'pointer',transitionDuration:'.2s','&:hover':{color:'#fff',textDecoration:'underline'}}} key={data.text}>
                            {data.icon}
                            <Typography style={{marginLeft:'6px',fontSize:'.875rem',fontWeight:'500'}}>{data.text}</Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}


const CrunchyrollFooterData = [
    'Acerca',
    'Ayuda/FAQ',
    'Términos de Uso',
    'Política de Privacidad',
    'Herramienta de aceptación de cookies',
    'Contacto de prensa',
    'Hazte con nuestras aplicaciones',
    'Canjear Tarjeta Regalo',
    'Empleo'
] 

export const CrunchyrollFooter = () => {
    return (
        <Box className={styles["container-row-footer"]}>
            <Typography variant='h4' style={{fontSize:'1rem',fontWeight:'600',color:'#fff',marginBottom:'10px'}}>Crunchyroll</Typography>

            <Box className={styles["container-column-footer"]}>
                <Box width='fit-content' style={{display:'flex',alignItems:'center'}}>
                <CrownYellowFooter/>
                <Typography sx={{lineHeight:'18px',fontSize:'.875rem',fontWeight:'500',color:'#FAB818',mb:'10px',cursor:'pointer',transitionDuration:'.2s','&:hover':{color:'#fff',textDecoration:'underline'}}}>Comienza tu Prueba Gratuita</Typography>
                </Box>

                {
                    CrunchyrollFooterData.map((data,index) => (
                        <Typography key={index} width='fit-content' sx={{lineHeight:'18px',fontSize:'.875rem',fontWeight:'500',color:'#a0a0a0',mb:'10px',cursor:'pointer',transitionDuration:'.2s','&:hover':{color:'#fff',textDecoration:'underline'}}}>{data}</Typography>
                    ))
                }
            </Box>
        </Box>
    )
}

    const CuentaFooterData = [
        'Mi Lista',
        'Crunchylistas',
        'Historial',
        'Mi Cuenta',
        'Desconectar',
    ] 

export const CuentaFooter = () => {
    return (
        <Box>
            <Typography variant='h4' style={{fontSize:'1rem',fontWeight:'600',color:'#fff',marginBottom:'10px'}}>Cuenta</Typography>

            <Box>
                {
                    CuentaFooterData.map((data,index) => (
                        <Typography key={index} width='fit-content' sx={{lineHeight:'18px',fontSize:'.875rem',fontWeight:'500',color:'#a0a0a0',mb:'10px',cursor:'pointer',transitionDuration:'.2s','&:hover':{color:'#fff',textDecoration:'underline'}}}>{data}</Typography>
                    ))
                }
            </Box>
        </Box>
    )
}