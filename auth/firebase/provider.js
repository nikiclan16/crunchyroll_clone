import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./firebaseConfig";

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
      photoURL:
        "https://static.crunchyroll.com/assets/avatar/170x170/0001-cr-white-orange.png",
    });

    const { uid, photoURL } = resp.user;

    console.log(photoURL);

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, displayName, photoURL } = resp.user;

    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
  // singInWithEmailAndPassword
};

export const UpdatePhotoURL = async (photoURL) => {
  try {
    await updateProfile(FirebaseAuth.currentUser, { photoURL });
    return {
      ok: true,
      photoURL,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
