import { ButtonOffer } from '@/public/Buttons';
import { CheckOffers, XOffers } from '@/public/Icons';
import { ButtonInitFree } from '.';


import { CoronaOfferCards } from '@/public/SVG/CoronaOfferCards';


import { Box, Typography } from '@mui/material'
import React,{FC} from 'react'

import styles from '../../styles/offer.module.css';

interface OfferData {
  fan:               string;
  bestOffer:         boolean;
  price:             string;
  withoutAds:        boolean;
  accessUnlimited:   boolean;
  newEpisodes:       boolean;
  fourDevices:       boolean;
  withoutConnection: boolean;
  discount:          boolean;
}

interface OffersCardsProps {
  offersData: OfferData[];
}




export const OffersCards:FC<OffersCardsProps> = ({offersData}) => {
  return (
    <Box style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',marginBottom:'10px'}}>
      <Typography className="header-size-2_125rem-responsive">
        Consigue más con Premium
      </Typography>
      <Typography style={{textAlign:'center',marginBottom:'80px',fontSize:'1.125rem',fontWeight:'500',lineHeight:'1.625rem',color:'#59595B'}}>Los suscriptores disfrutan de anime con más ventajas.</Typography>

      <Box className={styles["with-cards-section-3"]} style={{display:'flex',justifyContent:'center',alignItems:'center',height:'30px',backgroundColor:'#2ABDBB'}}>
        <Typography style={{fontSize:'1.125rem',fontWeight:'550',color:'white'}}>¡MEJOR OFERTA!</Typography>
      </Box>

      <Box className={styles["container-cards-section-3"]}>

        {
          offersData.map((offer,index) => {

            const bestOfferBorder = (offer.bestOffer) ? '5px solid #2ABDBB' : '5px solid #F8F8F8';

            const withoutAdsColor = (offer.withoutAds) ? '#59595B' : '#DADADA';
            const accessUnlimitedColor = (offer.accessUnlimited) ? '#59595B' : '#DADADA';
            const newEpisodesColor = (offer.newEpisodes) ? '#59595B' : '#DADADA';
            const fourDevicesColor = (offer.fourDevices) ? '#59595B' : '#DADADA';
            const withoutConnectionColor = (offer.withoutConnection) ? '#59595B' : '#DADADA';
            const discountColor = (offer.discount) ? '#59595B' : '#DADADA';


            const renderIcon = (condition:boolean) => {
              return condition ? <CheckOffers/> : <XOffers/>;
            };
            
            const withoutAdsIcon = renderIcon(offer.withoutAds);
            const accessUnlimitedIcon = renderIcon(offer.accessUnlimited);
            const newEpisodesIcon = renderIcon(offer.newEpisodes);
            const fourDevicesIcon = renderIcon(offer.fourDevices);
            const withoutConnectionIcon = renderIcon(offer.withoutConnection);
            const discountIcon = renderIcon(offer.discount);

            return (
              <>
                <Box className={`${styles["with-cards-section-3"]} ${styles["offers-cards-section-3"]}`} key={offer.price} style={{border:bestOfferBorder}}>

                  <Box className={styles["first-part-offer-section-3"]} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <CoronaOfferCards/>
                    <Typography style={{marginTop:'13px',fontSize:'1.125rem',fontWeight:'500'}}>{offer.fan}</Typography>
                    <Typography variant="h2" align="center" marginTop="10px" fontSize="2.125rem" fontWeight='500' lineHeight="2.75rem" style={{width:'105%'}}>
                      {offer.price}
                    </Typography>
                    <p style={{textAlign:'center',marginBottom:'20px',fontSize:'0.6rem',fontWeight:'600',lineHeight:'1.625rem',color:'#59595B'}}>+ CUALQUIER IMPUESTO APLICABLE</p>
                    {offer.bestOffer ? <ButtonInitFree/> : <ButtonOffer/>}
                    <p style={{textAlign:'center',marginBottom:'15px',fontSize:'0.80rem',lineHeight:'1.625rem',fontWeight:'800',color:'#59595B',cursor:'pointer'}}>NO QUIERO LA PRUEBA GRATUITA</p>
                  </Box>

                  <Box className={styles["second-part-offer-section-3"]} style={{position:'relative',display:'flex', flexDirection:'column'}}>

                    <Box>
                      {withoutAdsIcon}
                      <p style={{color:withoutAdsColor}}>Sin publicidad</p>
                    </Box>

                    <Box>
                      {accessUnlimitedIcon}
                      <p style={{color:accessUnlimitedColor}}>Acceso ilimitado al catálogo de Crunchyroll</p>
                    </Box>

                    <Box>
                      {newEpisodesIcon}
                      <p style={{color:newEpisodesColor}}>Nuevos episodios poco después de su transmisión en Japón</p>
                    </Box>

                    <Box>
                      {fourDevicesIcon}
                      <p style={{color:fourDevicesColor}}>Disponible en {index === 0 ? '1 dispositivo' : '4 dispositivos'}  al mismo tiempo</p>
                    </Box>

                    <Box>
                      {withoutConnectionIcon}
                      <p style={{color:withoutConnectionColor}}>Visionado Sin Conexión</p>
                    </Box>

                    <Box>
                      {discountIcon}
                      <p style={{color:discountColor}}>16 % de descuento sobre el Plan Mensual (cargo cada 12 meses)</p>
                    </Box>

                  </Box>
                </Box>
              </>
            )})
        }
      </Box>
    </Box>
  )
}