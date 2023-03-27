import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wokerData: null,
};

const workerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    getData(state, action) {
      state.wokerData = action.payload;
    },
    workerLogout(state, action){
      state.wokerData = action.payload
    },
  },
});

export const workerActions = workerSlice.actions;

export default workerSlice.reducer;
