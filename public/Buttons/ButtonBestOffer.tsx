import { Button } from "@mui/material";
import React from "react";

export const ButtonBestOffer = () => {
  return (
    <Button style={{ marginBottom: "10px" }} className="button-orange-primary">
      <h1
        style={{
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "0px",
          lineHeight:'1.125rem',
          opacity: "2",
        }}
      >
        INICIAR PRUEBA GRATUITA DE 14 DÍAS
      </h1>
    </Button>
  );
};
