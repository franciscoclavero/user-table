import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filterText: ''
  },
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    }
  } 
});

export const { setFilterText } = slice.actions;
export default slice.reducer;