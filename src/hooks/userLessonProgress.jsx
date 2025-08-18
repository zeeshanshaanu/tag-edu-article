import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export const useLessonProgress = (courseId) => {
  const AuthToken = useSelector((state) => state?.Auth);
  const token = AuthToken?.Authtoken;
  const intervalRef = useRef(null);

  const saveProgress = async (
    lessonId,
    moduleId,
    pct,
    secondsWatched,
    duration
  ) => {
    if (!lessonId || !moduleId) return;

    try {
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
    } catch (err) {
      console.error("Error saving progress:", err);
    }
  };

  // Auto-save every 3 seconds
  const startAutoSave = (
    lessonId,
    moduleId,
    getCurrentSeconds,
    getDuration
  ) => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const secondsWatched = getCurrentSeconds();
      const duration = getDuration() || 1;
      const pct = Math.floor((secondsWatched / duration) * 100);
      saveProgress(lessonId, moduleId, pct, secondsWatched, duration);
    }, 3000);
  };

  const stopAutoSave = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => stopAutoSave();
  }, []);

  return { saveProgress, startAutoSave, stopAutoSave };
};
