export const LOGIN = "LOGIN";

export const loginNoAccount = login => {
  return { type: LOGIN, login };
};
