import {
  createSlice,
  PayloadAction,
  // createSelector
} from "@reduxjs/toolkit";
import type { RootState } from "Store";
import { IUser } from "Utils/types";

export type Alert = {
  message: string | null;
  error: boolean;
};

// Define a type for the slice state
interface homeState {
  user: IUser | null;
  alert: Alert;
}

// Define the initial state using that type
const initialState: homeState = {
  user: null,
  alert: { message: null, error: false },
};

export const dashboard = createSlice({
  name: "main",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUserDetails: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAlert: (state, action) => {
      state.alert.message = action.payload.message;
      state.alert.error = action.payload.error;
    },
  },
});

export const { setUserDetails, setAlert } = dashboard.actions;
export const mainReducer = dashboard.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.main.user;
export const selectAlert = (state: RootState) => state.main.alert;
