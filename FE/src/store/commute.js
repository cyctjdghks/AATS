import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDatas: null,
};

const commuteSlice = createSlice({
  name: "commute",
  initialState,
  reducers: {
    getData(state, action) {
      state.userDatas = action.payload;
    },
  },
});

export const commuteActions = commuteSlice.actions;

export default commuteSlice.reducer;
