import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeList: [
    {time : "2023-03-01T08:54"},
  ],
};

const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    getData(state, action) {
      state.timeList = action.payload;
    },
    resetData(state, action) {
      state.timeList = action.payload
    },
  },
});

export const startActions = startSlice.actions;

export default startSlice.reducer;