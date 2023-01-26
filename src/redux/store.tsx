import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducer/filterReducer";
import loaderReduce from "./reducer/loaderReduce";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
  reducer: {
    userList: userReducer,
    filterText: filterReducer,
    loading: loaderReduce
  }
});

export type RootState = ReturnType<typeof store.getState>;