import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Steps: "Step1",
};

const StrategySlice = createSlice({
  name: "Strategy",
  initialState,
  reducers: {
    StrategyFtn: (state, action) => {
      state.Steps = action.payload;
    },
  },
});

export const { StrategyFtn } = StrategySlice.actions;
export default StrategySlice.reducer;
