import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeList: [
    "2023-03-01T08:54",
    "2023-03-02T08:54",
    "2023-03-03T08:54",
    "2023-03-06T08:54",
    "2023-03-08T08:54",
    "2023-03-09T08:54",
    "2023-03-10T08:54",
    "2023-03-13T08:54",
    "2023-03-14T08:54",
    "2023-03-15T08:54",
    "2023-03-16T10:54",
    "2023-03-17T10:54",
    "2023-03-20T07:54",
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