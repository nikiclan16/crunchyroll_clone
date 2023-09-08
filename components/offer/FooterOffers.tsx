import { Box, Typography } from "@mui/material";
import {CardIcon, RelojIcon, ShoppingBag, Important} from "@/public/SVG";

import styles from "../../styles/Offer.module.css";


export const FooterOffers = () => {


  const offersData = [
    {
      icon: <RelojIcon />,
      text: "Ve los episodios poco después de su transmisión en japón",
    },
    {
      icon: <Important/>,
      text: "Disfruta de anime ilimitado y sin anuncios",
    },
    {
      icon: <CardIcon />,
      text: "Lee cientos de capítulos de manga de docenas de títulos diferentes*",
      isBordered: true,
    },
    {
      icon: <ShoppingBag />,
      text: "Ahorra con los descuentos exclusivos de la Tienda de Crunchyroll*",
    },
  ];

  return (
    <Box
      className={styles['container-footer-section-1']}
    >
      <Box className={styles['content-footer-section-1']}>
        {offersData.map((offer, index) => (
          <Box
            key={index}
            className={styles['container-icon-text-section-1']}
          >
            <Box>
              {offer.icon}
            </Box>
            <Box sx={{ mt: "10px" }}>
              <Typography className={styles['text-footer-section-1']}>
                {offer.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
