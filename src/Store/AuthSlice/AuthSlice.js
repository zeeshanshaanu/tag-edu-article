import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Authtoken: "",
  UserInfo: "",
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    AuthtokenFtn: (state, action) => {
      state.Authtoken = action.payload;
    },
    UserInfoFtn: (state, action) => {
      state.UserInfo = action.payload;
    },
  },
});

export const { AuthtokenFtn, UserInfoFtn } = AuthSlice.actions;
export default AuthSlice.reducer;
