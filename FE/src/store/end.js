import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeList: [
    {time :"2023-03-01T18:00"},
  ],
};

const endSlice = createSlice({
  name: "end",
  initialState,
  reducers: {
    getData(state, action) {
      state.timeList = action.payload;
    },
    resetData(state, action) {
      state.timeList = action.payload
    }
  },
});

export const endActions = endSlice.actions;

export default endSlice.reducer;