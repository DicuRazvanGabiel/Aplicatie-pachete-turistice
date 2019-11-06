import { FETCH_PACHAGES } from "../actions/packages";
const initialState = {
  packages: null
};

const packagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PACHAGES:
      return { ...state, packages: action.packages };

    default:
      return state;
  }
};

export default packagesReducer;
