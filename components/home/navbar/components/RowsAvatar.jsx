/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import styles from "../../../../styles/Home.module.css";
import Image from 'next/image';

export const RowsAvatar = ({ title, RowsAvatarProps, selectedAvatar, handleAvatarClick }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px'}}>
      <Typography style={{fontSize: '1.125rem', fontWeight: '500', marginBottom: '8px', color: '#fff'}}>{title}</Typography>
        <Box style={{display:'flex'}}>
          {RowsAvatarProps.map((data,index) => (
            <Avatar
              key={data.alt}
              onClick={() => handleAvatarClick(data.src)}
              sx={{
                marginRight:index === 4 ? '0px' : '23px',
                width: '100px',
                height: '100px',
                border: selectedAvatar === data.src ? '4px solid #F47521' : '4px solid #23252b',
                transitionDuration: '.3s',
                '&:hover': selectedAvatar === data.src ? {} : { border: '4px solid #fff' },
              }}
            >
              <img className={styles["image-responsive"]} src={data.src} alt={data.alt} />
            </Avatar>
          ))}
        </Box>
    </Box>
  );
};

