import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  organizationData: {},
  userType: 0,
  // 0 : organization, 1: worker, 2: user
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    organizationLogin(state, action) {
      state.id = action.payload.organizationId;
      state.organizationData = action.payload;
      state.userType = 0
      state.isLogin = true;
    },
    organizationLogout(state, action) {
      state.id = action.payload
      state.organizationData = action.payload
      state.isLogin = false
    },
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
