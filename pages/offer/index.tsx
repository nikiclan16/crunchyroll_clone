import React from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { useCheckAuth } from "@/hooks";

import { Loader } from "@/components/Loader";
import {
  NavbarOffers,
  ButtonInitFree,
  FooterOffers,
  ScreensAndCards,
  OffersCards,
} from "@/components/offer";
import { Box, Typography } from "@mui/material";
import { IdiomsAndPolitics } from "@/components/Footers/IdiomsAndPolitics";

import data from "../../mocks/portada.json";
import offers from "../../mocks/offersCards.json";

import styles from "../../styles/Offer.module.css";


const OfferPage: NextPage = () => {
  const { push } = useRouter();

  const { status } = useCheckAuth();

  if (status === "checking") return <Loader />;

  return (
    <>
      <Head>
        <link rel="icon" href="https://www.crunchyroll.com/build/assets/img/favicons/favicon-16x16.png" sizes="any" />
        <title>Crunchyroll · Offers</title>
      </Head>
      <Box className={styles["container-section-1"]}>
        <NavbarOffers />
        <Box className={styles["content-section-1"]}>
          <Typography className={styles["header-section-1"]}>
            El mayor catálogo de anime del mundo
          </Typography>
          <ButtonInitFree />
          <FooterOffers />
        </Box>
      </Box>

      <ScreensAndCards portadasData={data.list} />
      <div id="seccion-destino">
        <OffersCards offersData={offers.offers} />
      </div>

      <Box
        mt={2}
        mb={4}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px 50px",
        }}
      >
        <p
          style={{
            maxWidth: "1160px",
            width: "100%",
            fontSize: "14px",
            color: "#B9B8B9",
            textAlign: "center",
            marginBottom: "25px",
            fontWeight: "bold",
          }}
        >
          *El manga solo está disponible en inglés. La Tienda de Crunchyroll
          puede tener diferente disponibilidad según el país.
          <br />
          **La disponibilidad del contenido puede variar según el país. Los
          precios ofertados solo son válidos para suscriptores residentes en
          aquellos países aplicables. El uso de Crunchyroll está
          <br /> sujeto a la aceptación de nuestros Términos del Servicio y
          nuestra Política de Privacidad. Crunchyroll se reserva todos los
          derechos amparado por sus Términos de Servicio, incluyendo
          <br /> futuros cambios de precio.
        </p>

        <div className={styles["container-paragraph-section-4"]}>
          <p className="paragraph-1_125rem-responsive">O crea una</p>&nbsp;
          <p
            className="enlace-naranja paragraph-1_125rem-responsive"
            onClick={() => push("/register")}
          >
            cuenta gratuita
          </p>
          &nbsp;
          <p className="paragraph-1_125rem-responsive">
            y comienza a ver anime.
          </p>
        </div>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className="header-size-2_125rem-responsive">
            ¿Alguna pregunta?
          </Typography>
          <div className={styles["container-paragraph-section-4"]}>
            <p className="paragraph-1_125rem-responsive">Visita nuestro</p>
            &nbsp;
            <Link
              className="no-decoration"
              href={"https://help.crunchyroll.com/hc/es"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="enlace-naranja paragraph-1_125rem-responsive">
                Centro de Ayuda{" "}
              </p>
            </Link>
            &nbsp;
            <p className="paragraph-1_125rem-responsive">para saber más.</p>
          </div>
        </Box>
        <IdiomsAndPolitics />
      </Box>
    </>
  );
};

export default OfferPage;
