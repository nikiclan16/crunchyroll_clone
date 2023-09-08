import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'

export const CheckBoxRegister = () => {
  return (
    <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
            maxWidth: "100%",
            marginTop: "2rem",
          }}
        >
          <Checkbox sx={{ padding: 0 }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "0.875rem",
              lineHeight: "1.125rem",
            }}
          >
            Quiero estar al día con las últimas noticias y ofertas de
            Crunchyroll.
          </Typography>
        </Box>
  )
}
