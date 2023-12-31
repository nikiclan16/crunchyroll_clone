import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link'
import React, { FC } from 'react'


interface CardData {
    url: string;
    src: string;
    title: string;
    subtitle: string;
  }
  
  interface CardsProps {
    cardsData: CardData[];
  }

export const Cards:FC<CardsProps> = ({cardsData}) => {

  return (
<>
    {
        cardsData.map((data) => {
          
          
          return (
            <Link className="no-decoration" target="_blank" rel="noopener noreferrer" href={data.url} key={data.title}>
                <Box style={{width:'150px'}}>
                  <Image src={data.src} alt={data.title} height={225} width={150}/>
                  <Typography variant='h4' style={{fontSize:'.875rem',fontWeight:'500',lineHeight:'1.125rem',color:'#fff'}}>{data.title}</Typography>
                  <Typography variant='h4' style={{fontSize:'.875rem',fontWeight:'500',lineHeight:'1.125rem',color:'#a0a0a0'}}>{data.subtitle}</Typography>
                </Box>
            </Link>
        )})
    }
</>
  )
}
