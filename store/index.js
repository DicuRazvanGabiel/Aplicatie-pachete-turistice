import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import packagesReducers from "./reducers/packages";
import langugeReducer from "./reducers/languge";
import locationReducer from "./reducers/location";

const rootReducer = combineReducers({
    packages: packagesReducers,
    language: langugeReducer,
    location: locationReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;