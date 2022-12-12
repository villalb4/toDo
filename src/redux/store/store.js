import { configureStore } from "@reduxjs/toolkit";
import navegation from "../slice/navegation";

export const store = configureStore({
  reducer: {
    navegation,
  },
})