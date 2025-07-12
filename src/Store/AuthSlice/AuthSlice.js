import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Authtoken: "",
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    AuthtokenFtn: (state, action) => {
      state.Authtoken = action.payload;
    },
  },
});

export const { AuthtokenFtn } = AuthSlice.actions;
export default AuthSlice.reducer;
