import * as actionTypes from "./actionTypes";

import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, UserId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    UserId: UserId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7JhhHLTtRLIiSzrNFTk16-HbVOBhK0DY";

    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7JhhHLTtRLIiSzrNFTk16-HbVOBhK0DY";
    }

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);

        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);

        dispatch(authFail(err.response.data.error));
      });
  };
};