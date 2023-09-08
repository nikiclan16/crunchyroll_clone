import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Link from "next/link";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { CrunchyIcon } from "../../public/Icons/CrunchyIcon";

import styles from "../../styles/Offer.module.css";

export const NavbarOffers = () => {

  const { status } = useSelector((state: RootState) => state.auth);

  const disabledButton = status === "authenticated" ? "none" : "";

  return (
    <AppBar className={styles.navbar}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CrunchyIcon />
        <Box>
          <Link href={"/login"} passHref prefetch>
            <Button
              className={styles['button-acceder']}
              sx={{ display: disabledButton }}
            >
              <h1>ACCEDER</h1>
            </Button>
          </Link>
          <Link href={"/home"} passHref prefetch>
            <Button className={styles['button-explorar']}>
              <h1>EXPLORAR</h1>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
