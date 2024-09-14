import {
    Action,
    EnhancedStore,
    StateFromReducersMapObject,
    configureStore,
  } from "@reduxjs/toolkit";
  import { API } from "Config/api";
  import { ThunkAction } from "redux-thunk";
  import { appReducer, rootReducer } from "./reducer";
  
  const initStore = (preloadedState?: Partial<RootState>): EnhancedStore =>
    configureStore({
      reducer: appReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(API.middleware),
      preloadedState,
      devTools: String(process.env.NODE_ENV).trim() !== "production",
    });
  
  export type Store = ReturnType<typeof initStore>;
  export type RootState = StateFromReducersMapObject<typeof rootReducer>;
  export type AppDispatch = Store["dispatch"];
  export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
  
  const store = initStore({});
  
  export default store;
  
  // https://github.com/StopNGo/react-proto/blob/main/src/store/store.ts
  