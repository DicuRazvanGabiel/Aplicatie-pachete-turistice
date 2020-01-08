import { AsyncStorage } from "react-native";

export const SINGUP = "SINGUP";
export const SINGIN = "SINGIN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const singup = (email, password, city, name) => {
  return async dispatch => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAT9f4YN5uSmzKLcBW-5JQrR5YqptRSHRw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      throw new Error(errorId);
    }
    const resData = await response.json();

    await fetch(
      `https://natbiot-travelling-d0a35.firebaseio.com/users/${resData.localId}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          city,
          name
        })
      }
    );
    dispatch({ type: SINGUP, token: resData.idToken, userId: resData.localId });
  };
};

export const singin = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAT9f4YN5uSmzKLcBW-5JQrR5YqptRSHRw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      throw new Error(errorId);
    }

    const resData = await response.json();

    dispatch({ type: SINGIN, token: resData.idToken, userId: resData.localId });
    const exparitionDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    saveDataToStorage(resData.localId, resData.idToken, exparitionDate);
  };
};

export const login = (userId, token) => {
  return {
    type: LOGIN,
    userId,
    token
  };
};

export const logout = () => {
  AsyncStorage.removeItem("userData");
  return {
    type: LOGOUT,
    userId: null,
    token: null
  }
}

const saveDataToStorage = (userId, token, exparitionDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      userId,
      token,
      exparitionDate: exparitionDate.toISOString
    })
  );
};
