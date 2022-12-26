import { configureStore } from "@reduxjs/toolkit";
import navegation from "../slice/navegation";
import tasks from "../slice/tasks";

export const store = configureStore({
  reducer: {
    navegation,
    tasks
  },
})