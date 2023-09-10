import type { AppProps } from "next/app";

import Head from 'next/head';

import { Provider } from "react-redux";
import { store } from "@/store/store";

// import { ThemeProvider } from "@emotion/react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@/styles/custom-theme";
import "../styles/globals.css";

import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../config/createEmotionCache';


const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </>
  );
}
