import { FETCH_PACHAGES } from "../actions/packages";
const initialState = {
  packages: null,
  objectives: null
};

const packagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PACHAGES:
      return { ...state, packages: action.packages, objectives: action.objectives };

    default:
      return state;
  }
};

export default packagesReducer;
