import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
  reducer: {
    userList: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;