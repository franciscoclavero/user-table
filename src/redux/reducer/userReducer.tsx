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
    display: 'none',
    userId: ''
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    }
  }
});

export const { setUserList, setDisplay, setUserId } = slice.actions;
export default slice.reducer;