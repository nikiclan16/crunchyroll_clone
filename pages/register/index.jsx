import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Typography, Button } from "@mui/material";

import {
  deleteErrorMessage,
  startCreatingUserWithEmailAndPassword,
} from "../../store/auth/thunks";
import { useForm, useCheckAuth } from "@/hooks";

import { Loader } from "@/components/Loader";
import {
  AlertForm,
  NavbarRegisterLogin,
  CheckBoxRegister,
} from "@/components/register-login";
import {
  DisplayName,
  Email,
  Password,
} from "@/components/register-login/forms";
import { IdiomsAndPolitics } from "@/components/Footers/IdiomsAndPolitics";

import styles from "../../styles/auth.module.css";
import Head from "next/head";

//form validation
const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
};

const RegisterPage = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const { push } = useRouter();

  const { status } = useCheckAuth();

  if (status === "authenticated") {
    push("/home");
  }

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  // Register FirebaseAuth

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const register = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  };

  useEffect(() => {
    if (errorMessage) return setOpen(true);
  }, [errorMessage]);

  if (status === "checking") return <Loader />;

  return (
    <>
      <Head>
        <link rel="icon" href="https://www.crunchyroll.com/build/assets/img/favicons/favicon-16x16.png" sizes="any" />
        <title>Crunchyroll · Register</title>
      </Head>
      <AlertForm open={open} setOpen={setOpen} />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <NavbarRegisterLogin />
        <Box className={styles["container-forms-auth"]}>
          <Typography className="header-size-2_125rem-responsive">
            Crear Cuenta
          </Typography>

          <DisplayName
            displayName={displayName}
            onInputChange={onInputChange}
            displayNameValid={displayNameValid}
            formSubmitted={formSubmitted}
          />

          <Email
            email={email}
            onInputChange={onInputChange}
            emailValid={emailValid}
            formSubmitted={formSubmitted}
          />

          <Password
            password={password}
            onInputChange={onInputChange}
            passwordValid={passwordValid}
            formSubmitted={formSubmitted}
          />

          <CheckBoxRegister />

          <Button
            className={`button-orange-primary ${styles["button-auth"]}`}
            style={{ marginTop: "30px", marginBottom: "12px", width: "100%" }}
            onClick={register}
          >
            <h1
              style={{
                fontSize: "15px",
                fontWeight: 800,
                letterSpacing: "0px",
                opacity: "2",
              }}
            >
              Crear cuenta
            </h1>
          </Button>
          <Box style={{ maxWidth: "100%", width: "100%", textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              style={{
                color: "rgb(160, 160, 160)",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                fontWeight: 600,
                marginBottom: "15px",
                width: "100%",
              }}
            >
              Al crear una cuenta aceptas tu conformidad con los nuestros
              Términos y la Política de Privacidad, además de afirmar que tienes
              16 años de edad o más.
            </Typography>
          </Box>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              marginBottom: "50px",
              fontSize: "1.125rem",
              lineHeight: "1.625rem",
            }}
          >
            ¿Ya tienes cuenta?&nbsp;
            <Link
              onClick={() => dispatch(deleteErrorMessage())}
              className="no-decoration"
              href="/login"
            >
              <p className="enlace-naranja">Acceder</p>
            </Link>
          </div>
        </Box>
      </Box>
      <IdiomsAndPolitics />
    </>
  );
};

export default RegisterPage;
