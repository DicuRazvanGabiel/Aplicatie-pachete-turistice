import { SINGIN, SINGUP, LOGIN, LOGOUT } from "../actions/auth";

const initalState = {
  token: null,
  userId: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SINGUP:
      return {
        token: action.token,
        userId: action.userId
      };

    case SINGIN:
      return {
        token: action.token,
        userId: action.userId
      };

    case LOGIN:
      return {
        token: action.token,
        userId: action.userId
      };

    case LOGOUT:
      return {
        token: action.token,
        userId: action.userId
      };

    default:
      return state;
  }
};
