import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Breadcrumb1: "Courses",
  Breadcrumb2: "",
  Breadcrumb3: "",
  Breadcrumb: [],
  HeaderTabs: "Courses",
  selectedLanguage: "EN",
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
    selectedLanguageFtn: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const {
  BreadcrumbFtn1,
  BreadcrumbFtn2,
  BreadcrumbFtn3,
  setBreadcrumb,
  HeaderTabsFtn,
  selectedLanguageFtn,
} = HeadAndBcSlice.actions;
export default HeadAndBcSlice.reducer;
