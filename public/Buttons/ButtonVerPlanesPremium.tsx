import { Button, Typography } from '@mui/material'
import React from 'react'

export const ButtonVerPlanesPremium = () => {

    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const elementoObjetivo = document.getElementById("seccion-destino");
        if (elementoObjetivo) {
          elementoObjetivo.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <Button
    onClick={handleScroll}
    className="button-orange-primary"
    style={{marginBottom: "10px" }}
  >
    <Typography style={{ textTransform:'uppercase',fontSize:'0.875rem',fontWeight:'800',padding:'0px 16px'}}>
        ver planes premium
    </Typography>
  </Button>
  )
}
