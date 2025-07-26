// hooks/useLessonProgress.jsx
import { useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const useLessonProgress = (courseId, lesson) => {
  const lastSent = useRef(0);
  const token = useSelector((s) => s.Auth?.Authtoken);
  useEffect(() => {
    lastSent.current = 0;
  }, [lesson?.lessonId]);

  //////////////// ****************** ////////////////////
  //////////////// ****************** ////////////////////
  const saveProgress = async (pct, secondsWatched, duration) => {
    if (pct - lastSent.current < 1 && pct !== 100) return;
    lastSent.current = pct;

    console.log("🧪 Saving progress with:", {
      courseId,
      moduleId: lesson?.moduleId,
      lessonId: lesson?.lessonId,
      secondsWatched,
      duration,
      completed: pct >= 99,
    });

    await axios.post(
      "/api/progress",
      {
        courseId,
        moduleId: lesson?.moduleId,
        lessonId: lesson?.lessonId,
        secondsWatched,
        duration,
        completed: pct >= 99,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };
  //
  return { saveProgress };
};
