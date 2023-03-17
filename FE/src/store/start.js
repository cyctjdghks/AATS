import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeList: [
    "2023-03-13T08:54",
    "2023-03-14T07:54",
    "2023-03-15T08:59",
    "2023-03-16T09:10",
    "2023-03-17T08:52",
  ],
};

const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    getData(state, action) {
      state.timeList = action.payload;
    },
  },
});

export const startActions = startSlice.actions;

export default startSlice.reducer;