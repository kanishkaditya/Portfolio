import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: 'togglePage',
    initialState: {
      value: false,
    },
    reducers: {
      toggle: (state) => {
        state.value = !state.value
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggle } = toggleSlice.actions
  
  export default toggleSlice.reducer