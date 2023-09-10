import {
  UpdatePhotoURL,
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
} from "../../auth/firebase/provider";
import {
  changeAvatar,
  checkingCredentials,
  errorMessageToggle,
  login,
  logout,
} from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailAndPassword({
      email,
      password,
      displayName,
    });

    if (!result?.ok) return dispatch(logout(result.errorMessage));
    console.log({result});
    dispatch(login(result));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    console.log(result);

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startUpdatePhotoURL = (url) => {
  return async (dispatch) => {
    const result = await UpdatePhotoURL(url);
    dispatch(changeAvatar(result));
  };
};

export const deleteErrorMessage = () => {
  return async (dispatch) => {
    dispatch(errorMessageToggle());
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
