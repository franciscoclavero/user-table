import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'users',
  initialState: {
    userList: [{
      id: 0, 
      name: '', 
      birthdate: '', 
      country: '', 
      city: ''
    }],
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