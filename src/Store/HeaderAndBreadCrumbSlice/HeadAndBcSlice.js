import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Breadcrumb1: "Articles",
  Breadcrumb2: "",
  Breadcrumb3: "",
  Breadcrumb: [],
  HeaderTabs: "Articles",
};

const HeadAndBcSlice = createSlice({
  name: "HeadAndBreadCrumb",
  initialState,
  reducers: {
    BreadcrumbFtn1: (state, action) => {
      state.Breadcrumb1 = action.payload;
    },
    BreadcrumbFtn2: (state, action) => {
      state.Breadcrumb2 = action.payload;
    },
    BreadcrumbFtn3: (state, action) => {
      state.Breadcrumb3 = action.payload;
    },
    HeaderTabsFtn: (state, action) => {
      state.HeaderTabs = action.payload;
    },
    setBreadcrumb: (state, action) => {
      state.Breadcrumb = action.payload;
    },
  },
});

export const {
  BreadcrumbFtn1,
  BreadcrumbFtn2,
  BreadcrumbFtn3,
  setBreadcrumb,
  HeaderTabsFtn,
} = HeadAndBcSlice.actions;
export default HeadAndBcSlice.reducer;
