export const SINGUP = "SINGUP";
export const SINGIN = "SINGIN";

export const singup = (email, password, navigation) => {
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
        const errorId = errorResData.error.message
        throw new Error(errorId);
    }

    const resData = await response.json();

    dispatch({ type: SINGUP, token: resData.idToken, userId: resData.localId});
  };
};

export const singin = (email, password) => {
  console.log(email, password);
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
      const errorId = errorResData.error.message
      throw new Error(errorId);
    }

    const resData = await response.json();

    dispatch({ type: SINGIN, token: resData.idToken,userId:  resData.localId});
  };
};
