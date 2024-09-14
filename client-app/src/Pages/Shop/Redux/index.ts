import {
  createSlice,
  //   PayloadAction,
  // createSelector
} from "@reduxjs/toolkit";
import type { RootState } from "Store";
import { IProduct } from "Utils/types";

// import { auth } from "./Queries";

export type Alert = {
  message: string | null;
  error: boolean;
};

// Define a type for the slice state
interface homeState {
  alert: Alert;
  bestSeller: IProduct[];
  searchedProducts: IProduct[];
}

// Define the initial state using that type
const initialState: homeState = {
  alert: { message: null, error: false },
  bestSeller: [],
  searchedProducts: [],
};

export const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert.message = action.payload.message;
      state.alert.error = action.payload.error;
    },
    setBestSellers: (state, action) => {
      state.bestSeller = action.payload;
    },
    setSearchedProducts: (state, action) => {
      state.searchedProducts = action.payload;
    },
  },
});

export const { setAlert, setBestSellers, setSearchedProducts } =
  dashboard.actions;

export const shopReducer = dashboard.reducer;

export const selectAlert = (state: RootState) => state.shop.alert;
export const selectBestSellers = (state: RootState) => state.shop.bestSeller;
export const selectSearchedProducts = (state: RootState) =>
  state.shop.searchedProducts;
