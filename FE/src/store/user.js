import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  users : [
    {
      userId: "sung",
      userName: "박성환",
      userStatus: 1,
      organizationId: "ssafy",
      userGender: 1,
      userAge: 26,
      userPhone: "010-1234-5678",
      userEmail: "ssafy34@ssafy.com",
      userBirth: "1997-9-29",
      userNationality: "미국",
      profile: "aaaaa",
    },
    {
      userId: "jae",
      userName: "박재현",
      userStatus: 1,
      organizationId: "ssafy",
      userGender: 1,
      userAge: 27,
      userPhone: "010-1234-5679",
      userEmail: "ssafy4@ssafy.com",
      userBirth: "1996-03-03",
      userNationality: "대한민국",
      profile: "aaaaa",
    },
    {
      userId: "yang",
      userName: "양서정",
      userStatus: 0,
      organizationId: "ssafy",
      userGender: 0,
      userAge: 24,
      userPhone: "010-1234-4232",
      userEmail: "ssafy456@ssafy.com",
      userBirth: "1998-10-16",
      userNationality: "대한민국",
      profile: "aaaaa",
    },
    {
      userId: "lee",
      userName: "이병수",
      userStatus: 1,
      organizationId: "ssafy",
      userGender: 1,
      userAge: 25,
      userPhone: "010-1234-1234",
      userEmail: "ssafy4@ssafy.com",
      userBirth: "1997-11-05",
      userNationality: "대한민국",
      profile: "aaaaa",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getData(state, action) {
      state.userData = action.payload;
    },
    getAllUser(state, action){
      state.users = action.payload
    },
    userLogout(state, action) {
      state.userData = action.payload
      state.users = action.payload
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
