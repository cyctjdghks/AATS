import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  id: null,
  confirmEmail: null,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.userData = action.payload.data;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
