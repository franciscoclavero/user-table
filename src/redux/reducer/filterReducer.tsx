import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filterText: '',
    sort: 'asc',
  },
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  } 
});

export const { setFilterText, setSort } = slice.actions;
export default slice.reducer;