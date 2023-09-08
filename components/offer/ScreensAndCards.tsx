import {FC} from 'react';

import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import { ButtonVerPlanesPremium } from '../../public/Buttons/ButtonVerPlanesPremium';

import styles from "../../styles/offer.module.css";

interface PortadaData {
  title: string;
  src: string;
}

interface ScreensAndCardsProps {
  portadasData: PortadaData[];
}

export const ScreensAndCards:FC<ScreensAndCardsProps> = ({portadasData}) => {

  return (
    <>
        <Box className={styles['container-section-2']}>
          <Typography className="header-size-2_125rem-responsive">
            Disfruta cuando quieras y donde quieras
          </Typography>
          <Typography className={styles['info-section-2']}>Verlo en tu computadora, celular, videoconsola y otros dispositivos de streaming, incluyendo iOS, Android, Apple TV, Xbox, Roku y PS4.</Typography>
          <ButtonVerPlanesPremium/>
          <Box className={styles['image-section-2']}/>
        </Box>

        <Box mb={15} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',pb:'40px',background:'#fff linear-gradient(180deg, #0000, #F3F3F3)'}}>
          <Typography className='header-size-2_125rem-responsive'>
            Más de 30,000 episodios
          </Typography>
          <div className={styles["container-portadas-section-2"]}>
            <div className={styles["portadas-wrapper-section-2"]}>
              {
                portadasData.map((portada, index) => (
                  <div key={index} className={styles["portadas-row-section-2"]}>
                    <img className={styles["portadas-row-section-2"]} src={portada.src} alt={portada.title} width={180} height={270} />
                  </div>
                ))
              }
            </div>
          </div>
        </Box>
    </>
  )
}
