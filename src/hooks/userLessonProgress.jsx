// hooks/useLessonProgress.jsx
import { useEffect, useRef } from "react";
import axios from "axios";

export const useLessonProgress = (courseId, token) => {
  const lastSent = useRef(0);

  const saveProgress = async (lessonId, moduleId, pct, secondsWatched, duration) => {
    if (pct - lastSent.current < 0.15 && pct !== 100) return; 
    lastSent.current = pct;

    await axios.post(
      "/api/progress",
      {
        courseId,
        moduleId,
        lessonId,
        secondsWatched,
        duration,
        completed: pct >= 99,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  return { saveProgress };
};

