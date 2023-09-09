import React from 'react'
import { MiLista } from '../icons/MiLista'
import { Crunchylistas } from '../icons/Crunchylistas'
import { Historial } from '../icons/Historial'
import { MenuItem, ListItemIcon, Typography } from '@mui/material'
import { Notificaciones } from '../icons/Notificaciones'
import { MiCuenta } from '../icons/MiCuenta'
import { Desconectar } from '../icons/Desconectar'
import { startLogout } from '@/store/auth/thunks'
import { useDispatch } from 'react-redux'

export const Section1 = () => {

  const section1data = [
    {
      icon: <MiLista/>,
      text:'Mi Lista'
    },
    {
      icon: <Crunchylistas/>,
      text: 'Crunchylistas'
    },
    {
      icon: <Historial/>,
      text:'Historial'
    }
  ]


  return (
    <>
      {
        section1data.map(data => (
          <MenuItem key={data.text} sx={{"&:hover": {
            backgroundColor: "#23252B",
          }}}>
            <ListItemIcon>
              {data.icon}
            </ListItemIcon>
            <Typography style={{color:'#ffffff',fontSize:'1rem'}}>{data.text}</Typography>
          </MenuItem>
          ))
      }
    </>
  )
}

export const Section2 = () => {
  const section2data = [
    {
      icon: <Notificaciones />,
      text: 'Notificaciones'
    },
    {
      icon: <MiCuenta />,
      text: 'Mi Cuenta'
    }
  ];

  return (
    <>
      {section2data.map(data => (
        <MenuItem
          key={data.text}
          sx={{
            "&:hover": {
              backgroundColor: "#23252B",
            }
          }}
        >
          <ListItemIcon>{data.icon}</ListItemIcon>
          <Typography style={{ color: '#ffffff', fontSize: '1rem' }}>
            {data.text}
          </Typography>
        </MenuItem>
      ))}
    </>
  )
}

export const Section3 = () => {

  const dispatch:any = useDispatch();

  const logout = () => {
    dispatch(startLogout())
  }

  return (
    <MenuItem onClick={logout} sx={{"&:hover": {
      backgroundColor: "#23252B",
    }}}>
      <ListItemIcon>
        <Desconectar/>
      </ListItemIcon>
      <Typography style={{color:'#ffffff',fontSize:'1rem'}}>Desconectar</Typography>
    </MenuItem>
  )
}
