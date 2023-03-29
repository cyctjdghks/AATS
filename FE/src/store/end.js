import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeList: [
    "2023-03-01T18:00",
    "2023-03-02T18:00",
    "2023-03-03T18:00",
    "2023-03-06T18:00",
    "2023-03-08T18:00",
    "2023-03-09T18:00",
    "2023-03-10T18:00",
    "2023-03-13T18:00",
    "2023-03-14T18:00",
    "2023-03-15T14:00",
    "2023-03-16T18:00",
    "2023-03-17T14:50",
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