import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'loader',
  initialState: {
    loading: 'block' 
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  } 
});

export const { setLoading } = slice.actions;
export default slice.reducer;