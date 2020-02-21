import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import packagesReducers from "./reducers/packages";
import langugeReducer from "./reducers/languge";
import locationReducer from "./reducers/location";
import loginNoAccount from "./reducers/loginNoAccount";

const rootReducer = combineReducers({
    packages: packagesReducers,
    language: langugeReducer,
    location: locationReducer,
    login: loginNoAccount
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;