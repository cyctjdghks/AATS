import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  userData: {
    id: "bingbang",
    name: "이병수",
    status: 1,
    organization_id: "ssafy",
    gender: 1,
    age: 27,
    phoneNumber: "010-1234-5678",
    email: "ssafy1234@ssafy.com",
    birth: "1997-11-05",
    nationality: "대한민국",
    profile: "aaaaa",
  },
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.id = action.payload.id;
      state.userData = action.payload.data;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
