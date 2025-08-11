import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessonsProgress: {}  
};

const CourseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {
    updateLessonProgress: (state, action) => {
      const { lessonId, secondsWatched, duration, percentage } = action.payload;
      state.lessonsProgress[lessonId] = {
        secondsWatched,
        duration,
        percentage
      };
    },
    resetLessonProgress: (state) => {
      state.lessonsProgress = {};
    }
  }
});

export const { updateLessonProgress, resetLessonProgress } = CourseSlice.actions;
export default CourseSlice.reducer;
