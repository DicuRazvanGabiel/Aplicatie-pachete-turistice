import { LOGIN } from "../actions/loginNoAccount";

const initialState = {
  login: true
};

const loginNoAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: action.login };

    default:
      return state;
  }
};

export default loginNoAccountReducer;
