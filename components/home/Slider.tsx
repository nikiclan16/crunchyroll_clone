/* eslint-disable @next/next/no-img-element */
import React,{FC, useRef}  from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import { Box, useMediaQuery } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

import styles from "../../styles/home.module.css";



interface sliderData {
    title: string;
    url: string;
    img1: string;
    img2: string;
}

interface sliderProps {
    sliderImages: sliderData[]
}

export const Slider:FC<sliderProps> = ({sliderImages}) => {

    const swiperRef = useRef<SwiperCore>(); 

    const handleSlidePrev = () => {
        swiperRef.current?.slidePrev();
    };

    const handleSlideNext = () => {
        swiperRef.current?.slideNext();
    };

    const maxWith979px = useMediaQuery('(max-width:979px)');


  return (
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
            delay: 6000,
            disableOnInteraction:false,
        }}
        pagination={{clickable: true}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${styles["container-slider"]}`}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
            <Box>
                
                {
                    sliderImages.map(data => {

                        const image = maxWith979px ? data.img2 : data.img1
                        

                        return (
                            <SwiperSlide key={data.title}>
                                    <Box className={styles["slider__section"]}>
                                        <Link href={data.url} target='_blank' rel='noopener noreferrer'>
                                            <img className={styles["slider__img"]} src={image} alt={data.url}/>
                                        </Link>
                                    </Box>
                            </SwiperSlide>
                        )
                    })
                }
    
            </Box>

            <Box onClick={handleSlideNext} className={`${styles["slider__btn"]} ${styles["slider__btn--right"]}`}>
                <ArrowForwardIosIcon/>
            </Box>

            <Box onClick={handleSlidePrev} className={`${styles["slider__btn"]} ${styles["slider__btn--left"]}`}>
                <ArrowForwardIosIcon/>
            </Box>
        </Swiper>

  )
}


