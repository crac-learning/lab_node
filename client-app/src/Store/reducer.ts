import { combineReducers } from "@reduxjs/toolkit";
import { shopReducer } from "Pages/Shop/Redux";
import { mainReducer } from "Pages/Auth/Redux";

import { API } from "Config/api";

export const rootReducer = {
  shop: shopReducer,
  main: mainReducer,
  [API.reducerPath]: API.reducer,
};

export const appReducer = combineReducers(rootReducer);
