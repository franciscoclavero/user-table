import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    sort: ''
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    }
  }
});

export const { setUserList } = slice.actions;
export default slice.reducer;