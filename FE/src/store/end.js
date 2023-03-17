import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeList: [
    "2023-03-13T18:03",
    "2023-03-14T18:25",
    "2023-03-15T18:00",
    "2023-03-16T18:00",
    "2023-03-17T18:00",
  ],
};

const endSlice = createSlice({
  name: "end",
  initialState,
  reducers: {
    getData(state, action) {
      state.timeList = action.payload;
    },
  },
});

export const endActions = endSlice.actions;

export default endSlice.reducer;