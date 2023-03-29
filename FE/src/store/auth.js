import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  organizationData: {},
  userType: 0,
  // 0 : organization, 1: worker, 2: user
  isLogin: false,
  userData: {
    userId: "bingbang",
    userName: "이병수",
    userStatus: 1,
    organizationId: "ssafy",
    organizationName: "ssafy",
    userGender: 1,
    userAge: 27,
    userPhone: "010-1234-5678",
    userEmail: "ssafy1234@ssafy.com",
    userBirth: "1997-11-05",
    userNationality: "대한민국",
    userProfile: "linklinklink",
  },
  users: [],
  workerData: {
    workerId: "yangyang",
    workerName: "양서정",
    workerStatus: 1,
    organizationId: "ssafy",
    organizationName: "ssafy",
    workerGender: 0,
    workerAge: 26,
    workerPhone: "010-5678-1234",
    workerEmail: "ssafy5678@ssafy.com",
    workerBirth: "1998-10-16",
    workerNationality: "대한민국",
    workerProfile: "linklinklink2",
  },
  workers: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // organization login & logout
    organizationLogin(state, action) {
      state.id = action.payload.organizationId;
      state.organizationData = action.payload;
      state.userType = 0;
      state.isLogin = true;
    },
    organizationLogout(state, action) {
      state.id = action.payload;
      state.organizationData = action.payload;
      state.workers = [];
      state.users = [];
      state.isLogin = false;
    },
    // worker login & logout
    workerLogin(state, action) {
      state.id = action.payload.workerId;
      state.workerData = action.payload;
      state.userType = 1;
      state.isLogin = true;
    },
    workerLogout(state, action) {
      state.id = action.payload;
      state.workerData = {};
      state.userType = 0;
      state.isLogin = false;
    },
    // user login & logout
    userLogin(state, action) {
      state.id = action.payload.userId;
      state.userData = action.payload;
      state.userType = 2;
      state.isLogin = true;
    },
    userLogout(state, action) {
      state.id = action.payload;
      state.userData = {};
      state.userType = 0;
      state.isLogin = false;
    },
    // getWorkers
    getWorkers(state, action) {
      state.workers = action.payload;
    },
    // getUser
    getUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
