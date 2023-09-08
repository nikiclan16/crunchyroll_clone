/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { useCheckAuth } from "@/hooks/useCheckAuth";

import { Box, Typography, useMediaQuery } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Loader } from "@/components/Loader";
import NavbarHome from "@/components/home/navbar/NavbarHome";
import { Slider, Cards, FooterHome } from "@/components/home";
import sliderImages from "../../mocks/SliderImages.json";
import { DividerBlue, DividerOrange } from "@/public/Dividers";
import { ButtonVerTodo } from "@/public/Buttons/ButtonVerTodo";

import data from "../../mocks/portada.json";

import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

const HomePage = () => {
  const { status } = useCheckAuth();

  const maxWith567 = useMediaQuery("(max-width:567px)");

  const lisaURL = !maxWith567 ? data.adds.lisa[1] : data.adds.lisa[2];
  const liarURL = !maxWith567 ? data.adds.liarliar[1] : data.adds.liarliar[2];
  const knyURL = !maxWith567
    ? data.adds.demonslayer[1]
    : data.adds.demonslayer[2];


  if (status === "checking") return <Loader />;

  return (
    <>
      <Head>
        <link rel="icon" href="https://www.crunchyroll.com/build/assets/img/favicons/favicon-16x16.png" sizes="any" />
        <title>Crunchyroll · Home</title>
      </Head>
      <NavbarHome />
      <Slider sliderImages={sliderImages.sliderImages} />
      <Box className={styles["home-container"]}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0px auto",
            maxWidth: "1050px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              with: "100%",
              height: "120px",
            }}
          />
          <Typography variant="h2" className={styles["header-cards"]}>
            Nuestras recomendaciones
          </Typography>

          <DividerBlue />

          <Box
            className="custom-scroll"
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              overflow: "auto",
            }}
          >
            <Cards cardsData={data.recommendations} />
          </Box>

          <Box
            sx={{
              with: "100%",
              height: "50px",
            }}
          />

          <Link
            href="https://www.crunchyroll.com/es/artist/MA179CB50D/lisa?utm_source=cap_cr&utm_medium=standard_banner_2&utm_campaign=music-lisa_la&referrer=cap_cr_standard_banner_2_music-lisa_la"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                maxWidth: "1050px",
                width: "100%",
              }}
            >
              <Image
                className={styles["image-responsive"]}
                src={lisaURL}
                alt="lisa"
                width={1050}
                height={350}
              />
            </Box>
          </Link>

          <Box
            sx={{
              with: "100%",
              height: "50px",
            }}
          />

          <Typography variant="h2" className={styles["header-cards"]}>
            ¡Anime que puedes mirar gratis!
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#dadada",
              fontSize: "1rem",
              fontWeight: "500",
              mb: "10px",
            }}
          >
            ¡Disfruta aquí de algunos de nuestros títulos más populares!
          </Typography>

          <DividerBlue />

          <Box
            className="custom-scroll"
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              overflow: "auto",
            }}
          >
            <Cards cardsData={data.freeAnime} />
          </Box>

          <Box
            sx={{
              with: "100%",
              height: "50px",
            }}
          />
          <Link
            href="https://www.crunchyroll.com/es/series/GXJHM3G34/liar-liar?utm_source=cap_cr&utm_medium=standard_banner_2&utm_campaign=liar-liar_la&referrer=cap_cr_standard_banner_2_liar-liar_la_230904"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                maxWidth: "1050px",
                width: "100%",
              }}
            >
              <Image
                className={styles["image-responsive"]}
                src={liarURL}
                alt="liarLiar"
                width={1050}
                height={350}
              />
            </Box>
          </Link>

          <Box
            sx={{
              with: "100%",
              height: "50px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" className={styles["header-cards"]}>
              Lo más popular
            </Typography>

            <Link
              href="https://www.crunchyroll.com/es/videos/popular"
              target="_blank"
              rel="noopener noreferrer"
              className="no-decoration"
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#a0a0a0",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transitionDuration: ".2s",
                  "&:hover": { color: "#fff" },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ fontSize: ".800rem", fontWeight: "900" }}
                >
                  VER TODO
                </Typography>
                <KeyboardArrowRightIcon fontSize="medium" />
              </Box>
            </Link>
          </Box>

          <DividerOrange />

          <Box
            className="custom-scroll"
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              overflow: "auto",
            }}
          >
            <Cards cardsData={data.mostPopular} />
          </Box>

          <Box
            sx={{
              with: "100%",
              height: "50px",
            }}
          />
          <Link
            href="https://www.crunchyroll.com/es/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba?utm_source=cap_cr&utm_medium=standard_banner_2&utm_campaign=demon-slayer_la&referrer=cap_cr_standard_banner_2_demon-slayer_la_230904"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                maxWidth: "1050px",
                width: "100%",
              }}
            >
              <Image
                className={styles["image-responsive"]}
                src={knyURL}
                alt="demonSlayer"
                width={1050}
                height={350}
              />
            </Box>
          </Link>

          <Box
            sx={{
              with: "100%",
              height: "50px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: "70px",
            }}
          >
            <img
              src="https://www.crunchyroll.com/build/assets/img/home/yuzu.png"
              alt="Yuzu"
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.25rem",
                fontWeight: "600",
                textAlign: "center",
                color: "#fff",
                mt: "10px",
                mb: "30px",
              }}
            >
              ¿Sigues buscando algo que ver?
              <br />
              Revisa todo nuestro catálogo
            </Typography>
            <ButtonVerTodo />
          </Box>
        </Box>
        <Box
          sx={{
            with: "100%",
            height: "100px",
          }}
        />
        <FooterHome />
      </Box>
    </>
  );
};

export default HomePage;
