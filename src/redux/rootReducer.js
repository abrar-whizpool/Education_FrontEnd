import { combineReducers } from "redux";
import { cartSlice } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

