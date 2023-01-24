import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducer/filterReducer";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
  reducer: {
    userList: userReducer,
    filterText: filterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;