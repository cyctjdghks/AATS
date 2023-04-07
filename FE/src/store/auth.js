import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  organizationData: {},
  userType: 0,
  // 0 : organization, 1: worker, 2: user
  isLogin: false,
  userData: {
    userId: "",
    userName: "",
    userStatus: 1,
    organizationId: "",
    organizationName: "",
    userGender: 1,
    userAge: 0,
    userPhone: "",
    userEmail: "",
    userBirth: "",
    userNationality: "",
    userProfile: "",
  },
  users: [],
  workerData: {
    workerId: "",
    workerName: "",
    workerStatus: 1,
    organizationId: "",
    organizationName: "",
    workerGender: 0,
    workerAge: 0,
    workerPhone: "",
    workerEmail: "",
    workerBirth: "",
    workerNationality: "",
    workerProfile: "",
  },
  workers: [],
  aiveData: [],
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
      state.workerData = {};
      state.workers = [];
      state.userData = {};
      state.users = [];
      state.isLogin = false;
    },
    getWorkerDetail(state, action) {
      state.workerData = action.payload;
    },
    getUserDetail(state, action) {
      state.userData = action.payload;
    },
    getAiveData(state, action){
      state.aiveData = action.payload
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
