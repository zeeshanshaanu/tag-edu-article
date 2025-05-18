import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

const InvestmentSlice = createSlice({
  name: "Investment",
  initialState,
  reducers: {
    InvestmentFtn: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { InvestmentFtn } = InvestmentSlice.actions;
export default InvestmentSlice.reducer;
