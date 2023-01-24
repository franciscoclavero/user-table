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
    userDataSelected: [{
      id: 0, 
      name: '', 
      birthdate: '', 
      country: '', 
      city: ''
    }],
    display: 'none'
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setUserData: (state, action) => {
      state.userDataSelected = action.payload;
    },
    setDisplay: (state, action) => {
      state.display = action.payload;
    }
  }
});

export const { setUserList, setDisplay, setUserData } = slice.actions;
export default slice.reducer;