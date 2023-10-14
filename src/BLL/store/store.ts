import { aboutUsReducer } from "./aboutUsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer:{
    aboutUs: aboutUsReducer,
  }
})

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch