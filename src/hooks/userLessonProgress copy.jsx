// hooks/useLessonProgress.jsx
import { useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const useLessonProgress = (courseId, lesson) => {
  const AuthToken = useSelector((state) => state?.Auth);
  const token = AuthToken?.Authtoken;
  const lastSent = useRef(0);

  const saveProgress = async (pct, secondsWatched, duration) => {
    if (!lesson?.lessonId || !lesson?.moduleId) return;

    if (pct - lastSent.current < 0.25 && pct !== 100) return;
    lastSent.current = pct;

    await axios.post(
      "/api/progress",
      {
        courseId,
        moduleId: lesson.moduleId,
        lessonId: lesson.lessonId,
        secondsWatched,
        duration,
        completed: pct >= 99,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  return { saveProgress };
};

