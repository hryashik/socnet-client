import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    profile: profileSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch