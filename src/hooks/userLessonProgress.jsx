// hooks/useLessonProgress.jsx
import { useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const useLessonProgress = (courseId, lesson) => {
  // console.log("lesson--->>>>", lesson);
  const lastSent = useRef(0);
  const token = useSelector((s) => s.Auth?.Authtoken);

  const saveProgress = async (pct, secondsWatched, duration) => {
    if (pct - lastSent.current < 5 && pct !== 100) return;
    lastSent.current = pct;

    await axios.post(
      "/api/progress",
      {
        courseId,
        moduleId: lesson?.moduleId,
        lessonId: lesson?.lessonId,
        secondsWatched,
        duration,
        completed: pct === 100,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };
  return { saveProgress };
};
