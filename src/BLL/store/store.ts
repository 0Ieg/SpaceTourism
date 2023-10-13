import { aboutUsReducer } from "./aboutUsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer:{
    aboutUs: aboutUsReducer,
  }
})