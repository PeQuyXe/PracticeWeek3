import { createStore, combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer"; // Default import

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
