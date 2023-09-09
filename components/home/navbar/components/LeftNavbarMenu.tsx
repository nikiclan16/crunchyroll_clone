import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { ExplorarMenu } from './ExplorarMenu';
import { NoticiasMenu } from './NoticiasMenu';
import { Manga } from './Manga';
import { Juegos } from './Juegos';

export default function LeftNavbarMenu() {

  return (
    <React.Fragment>
      <Box style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
        <ExplorarMenu/>

        <Manga/>

        <Juegos/>

        <NoticiasMenu/>
        
      </Box>
    </React.Fragment>
  );
}
