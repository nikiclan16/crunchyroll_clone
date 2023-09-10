import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Button, Typography } from "@mui/material";

import {
  deleteErrorMessage,
  startLoginWithEmailAndPassword,
} from "../../store/auth/thunks";
import { useForm, useCheckAuth } from "@/hooks";

import { Loader } from "@/components/Loader";
import { AlertForm, NavbarRegisterLogin } from "@/components/register-login";
import { Email, Password } from "@/components/register-login/forms";

import { IdiomsAndPolitics } from "@/components/Footers/IdiomsAndPolitics";

import styles from "../../styles/auth.module.css";
import Head from "next/head";

//form validation
const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
};

const LoginPage = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const { push } = useRouter();

  const { status } = useCheckAuth();

  if (status === "authenticated") {
    push("/home");
  }

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    formState,
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const login = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startLoginWithEmailAndPassword(formState));
  };

  useEffect(() => {
    if (errorMessage) return setOpen(true);
  }, [errorMessage]);

  if (status === "checking") return <Loader />;

  return (
    <>
      <Head>
        <link rel="icon" href="https://www.crunchyroll.com/build/assets/img/favicons/favicon-16x16.png" sizes="any" />
        <title>Crunchyroll · Login</title>
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
            Acceder
          </Typography>

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

          <Button
            onClick={login}
            className={`button-orange-primary ${styles["button-auth"]}`}
            style={{ marginTop: "30px", marginBottom: "12px", width: "100%" }}
          >
            <h1
              style={{
                fontSize: "14px",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: "2",
              }}
            >
              ACCEDER
            </h1>
          </Button>

          <Typography
            color="#B4B4B4"
            align="center"
            marginBottom="15px"
            fontSize="14px"
            lineHeight="2.75rem"
            textTransform="uppercase"
            fontWeight="700"
            sx={{
              cursor: "pointer",
              transitionDuration: "1s",
              "&:hover": { color: "#000" },
            }}
          >
            ¿olvidaste tu contraseña?
          </Typography>

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
            ¿No tienes cuenta?&nbsp;
            <Link
              onClick={() => dispatch(deleteErrorMessage())}
              className="no-decoration"
              href="/register"
            >
              <p className="enlace-naranja">Crear Una</p>
            </Link>
          </div>
        </Box>
      </Box>
      <Box style={{ marginTop: "160px" }}>
        <IdiomsAndPolitics />
      </Box>
    </>
  );
};

export default LoginPage;
