import { Button, Typography } from '@mui/material';
import React from 'react'

export const ButtonInitFree = () => {
    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const elementoObjetivo = document.getElementById("seccion-destino");
        if (elementoObjetivo) {
          elementoObjetivo.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
  <Button style={{ marginBottom: "10px" }} className="button-orange-primary" onClick={handleScroll}>
    <Typography style={{ textTransform:'uppercase',fontSize:'0.875rem',fontWeight:'800',padding:'0px 16px'}}>
        iniciar prueba gratuita de 14 días
    </Typography>
  </Button>
  )
}
