import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Steps: "Step1",
  OpenModel: false,
};

const StrategySlice = createSlice({
  name: "Strategy",
  initialState,
  reducers: {
    StrategyFtn: (state, action) => {
      state.Steps = action.payload;
    },
    OpenModelFtn: (state, action) => {
      state.OpenModel = action.payload;
    },
  },
});

export const { StrategyFtn, OpenModelFtn } = StrategySlice.actions;
export default StrategySlice.reducer;
