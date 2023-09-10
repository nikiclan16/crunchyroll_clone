/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPruebaGratuitaYellow } from "@/public/Buttons/ButtonPruebaGratuitaYellow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Button,
  Modal,
  Container,
  Badge,
} from "@mui/material";

import { Section1, Section2, Section3 } from "./Sections";
import { RowsAvatar } from "./RowsAvatar";
import HomeNavbar from "../../../../mocks/HomeNavbar.json";

import { startUpdatePhotoURL } from "@/store/auth/thunks";

import styles from "../../../../styles/Home.module.css";
import Image from "next/image";
import { Loader } from "@/components/Loader";

export const ProfileMenu = () => {
  const data = useSelector((state) => state.auth);
  const displayName= data?.displayName ?? ''
  const photoURL = data?.photoURL ?? ''
  const dispatch = useDispatch();
  const [background, setBackground] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBackground(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setBackground(false);
  };

  const [openDrop, setOpenDrop] = React.useState(false);

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleOpenDrop = () => {
    setOpenDrop(true);
    setAnchorEl(null);
    setBackground(false);
  };
  const handleCloseDrop = () => {
    setOpenDrop(() => false);
    setSelectedAvatar(photoURL);
  };

  const handleAvatarClick = (src) => {
    setSelectedAvatar(src);
  };

  const saveAvatar = () => {
    dispatch(startUpdatePhotoURL(selectedAvatar));
    setOpenDrop(() => false);
  };

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      right: 5,
      top: 45,
      border: `2px solid #000`,
      padding: "0 4px",
      backgroundColor: "#a0a0a0",
      cursor: "pointer",
    },
  }));

  if (data.displayName === null || data.photoURL === null) return <Loader />;

  return (
    <>
      <Modal open={openDrop}>
        <Container
          className={styles["container-father-modal"]}
        >
          <Box
            className={styles["avatar-modal-container"]}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                height: "200px",
                backgroundColor: "#2B2E34",
                padding:'20px'
              }}
            >
              <Avatar className={styles["selected-avatar"]}>
                <img
                  src={selectedAvatar === null ? photoURL : selectedAvatar}
                  alt="perfil"
                />
              </Avatar>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Typography
                  style={{
                    fontSize: "1.375rem",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  Selección de avatar
                </Typography>
                <Typography
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#a0a0a0",
                  }}
                >
                  ¡Escoge tu avatar! Podrás cambiarlo siempre que quieras.
                </Typography>

                <Box className={styles["container-avatar-buttons"]}>
                  <Button
                    onClick={handleCloseDrop}
                    className="button-orange-secondary"
                  >
                    <h1
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        letterSpacing: "0px",
                        opacity: "2",
                      }}
                    >
                      CANCELAR
                    </h1>
                  </Button>

                  <Button
                    onClick={saveAvatar}
                    className="button-orange-secondary"
                  >
                    <h1
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        letterSpacing: "0px",
                        opacity: "2",
                      }}
                    >
                      GUARDAR
                    </h1>
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              className={`${styles['container-avatars']} custom-scroll`}
            >
              <RowsAvatar
                title="Crunchyroll"
                RowsAvatarProps={HomeNavbar.Avatars.Crunchyroll}
                handleAvatarClick={handleAvatarClick}
                selectedAvatar={selectedAvatar}
              />
              <RowsAvatar
                title="Chainsaw Man"
                RowsAvatarProps={HomeNavbar.Avatars.ChainsawMan}
                handleAvatarClick={handleAvatarClick}
                selectedAvatar={selectedAvatar}
              />
              <RowsAvatar
                title="One Piece"
                RowsAvatarProps={HomeNavbar.Avatars.OnePiece}
                handleAvatarClick={handleAvatarClick}
                selectedAvatar={selectedAvatar}
              />
              <RowsAvatar
                title="JUJUTSU KAISEN"
                RowsAvatarProps={HomeNavbar.Avatars.JujutsuKaisen}
                handleAvatarClick={handleAvatarClick}
                selectedAvatar={selectedAvatar}
              />
              <RowsAvatar
                title="TokyoRevengers"
                RowsAvatarProps={HomeNavbar.Avatars.TokyoRevengers}
                handleAvatarClick={handleAvatarClick}
                selectedAvatar={selectedAvatar}
              />
              <RowsAvatar
                title="Black Clover"
                RowsAvatarProps={HomeNavbar.Avatars.BlackClover}
                handleAvatarClick={handleAvatarClick}
                selectedAvatar={selectedAvatar}
              />
            </Box>
          </Box>
        </Container>
      </Modal>

      <Box
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "7.5px",
          height: "100%",
          backgroundColor: background ? "#141519" : "",
          "&:hover": {
            backgroundColor: "#141519",
          },
        }}
      >
        <Tooltip title="Perfil">
          <IconButton
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar style={{ width: 35, height: 35 }}>
              <Image width={36} height={36} src={photoURL} alt="profile" />
            </Avatar>
          </IconButton>
        </Tooltip>
        <ArrowDropDownIcon />
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            borderRadius: "0px",
            backgroundColor: "#141519",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box style={{ backgroundColor: "#141519" }}>
          <Box
            style={{ display: "flex", padding: "10px 20px", alignItems: "center" }}
          >
            <Box onClick={handleOpenDrop}>
              <StyledBadge badgeContent={<EditIcon fontSize="" />}>
                <img
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  src={photoURL}
                  alt="profile"
                />
              </StyledBadge>
            </Box>
            <Typography
              style={{
                color: "#ffffff",
                fontSize: "1.25rem",
                fontWeight: "600",
                textTransform: "capitalize",
                marginLeft: "20px",
              }}
            >
              {displayName}
            </Typography>
          </Box>

          <MenuItem
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonPruebaGratuitaYellow />
          </MenuItem>

          <Divider color="#23252B" style={{ height: "2px" }} />

          <Section1 />

          <Divider color="#23252B" style={{ height: "2px" }} />

          <Section2 />

          <Divider color="#23252B" style={{ height: "2px" }} />

          <Section3 />
        </Box>
      </Menu>
    </>
  );
};
