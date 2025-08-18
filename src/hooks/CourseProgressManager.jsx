// CourseProgressManager.jsx
import { useCallback, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateLessonProgress } from "@/store/progressSlice";
import { useLessonProgress } from "@/hooks/useLessonProgress";

export const useCourseProgress = (
  courseId,
  token,
  selectedLesson,
  videoDurations,
  userProgress,
  setUserProgress
) => {
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  const currentSecondsRef = useRef(0);
  const currentLessonRef = useRef({ lessonId: null, moduleId: null });

  const { saveProgress } = useLessonProgress(courseId, token);

  // helper: throttle with trailing
  function throttleTrailing(func, delay) {
    let timeout = null;
    let lastArgs = null;
    return (...args) => {
      lastArgs = args;
      if (!timeout) {
        timeout = setTimeout(() => {
          func(...lastArgs);
          timeout = null;
        }, delay);
      }
    };
  }

  // get lesson progress by ID
  const getLessonProgress = (lessonId, modules) => {
    if (!lessonId || !modules?.length) return null;
    for (const mod of modules) {
      const lesson = mod.lessons?.find((l) => {
        const id = typeof l.lessonId === "object" ? l.lessonId._id : l.lessonId;
        return id === lessonId;
      });
      if (lesson) return lesson;
    }
    return null;
  };

  // throttled save
  const throttledSaveProgress = useRef(
    throttleTrailing((lessonId, moduleId, pct, secondsWatched, duration) => {
      saveProgress(lessonId, moduleId, pct, secondsWatched, duration, {
        force: false,
      });
    }, 5000)
  ).current;

  // force save immediately
  const saveImmediately = useCallback(() => {
    const { lessonId, moduleId } = currentLessonRef.current;
    if (!lessonId || !moduleId) return;

    const fromApi = getLessonProgress(lessonId, userProgress?.modules || []);
    const duration = videoDurations?.[lessonId] || fromApi?.duration || 1;

    const secondsWatched = currentSecondsRef.current || 0;
    const pct = Math.min((secondsWatched / duration) * 100, 100);

    saveProgress(lessonId, moduleId, pct, secondsWatched, duration, {
      force: true,
    });
  }, [saveProgress, userProgress?.modules, videoDurations]);

  // handle player progress
  const handleProgress = ({ playedSeconds }) => {
    const { lessonId, moduleId } = selectedLesson || {};
    if (!lessonId || !moduleId) return;

    currentLessonRef.current = { lessonId, moduleId };
    currentSecondsRef.current = playedSeconds;

    const fromApi = getLessonProgress(lessonId, userProgress?.modules || []);
    const duration = videoDurations?.[lessonId] || fromApi?.duration || 1;
    const pct = Math.min((playedSeconds / duration) * 100, 100);

    // update local state
    setUserProgress((prev) => ({
      ...prev,
      modules: prev.modules.map((mod) => ({
        ...mod,
        lessons: (mod.lessons || []).map((l) => {
          const id =
            typeof l.lessonId === "object" ? l.lessonId._id : l.lessonId;
          if (id !== lessonId) return l;
          return {
            ...l,
            secondsWatched: playedSeconds,
            duration,
            completed: pct >= 100,
          };
        }),
      })),
    }));

    // update Redux
    dispatch(
      updateLessonProgress({
        lessonId,
        secondsWatched: playedSeconds,
        duration,
        percentage: pct,
      })
    );

    // background save
    throttledSaveProgress(lessonId, moduleId, pct, playedSeconds, duration);
  };

  // fetch + merge progress
  const fetchProgress = useCallback(async () => {
    try {
      const res = await axios.get(`/api/progress/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const apiData = res.data;

      setUserProgress((prev) => {
        if (!prev) return apiData;

        return {
          ...prev,
          modules: prev.modules.map((mod) => {
            const apiMod =
              apiData.modules?.find((m) => m._id === mod._id) || {};
            return {
              ...mod,
              lessons: mod.lessons.map((lesson) => {
                const id =
                  typeof lesson.lessonId === "object"
                    ? lesson.lessonId._id
                    : lesson.lessonId;
                const apiLesson = apiMod.lessons?.find((l) => {
                  const lid =
                    typeof l.lessonId === "object"
                      ? l.lessonId._id
                      : l.lessonId;
                  return lid === id;
                });
                if (!apiLesson) return lesson;

                return {
                  ...lesson,
                  secondsWatched: Math.max(
                    lesson.secondsWatched || 0,
                    apiLesson.secondsWatched || 0
                  ),
                  duration: apiLesson.duration || lesson.duration || 1,
                  completed: lesson.completed || apiLesson.completed,
                };
              }),
            };
          }),
        };
      });
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  }, [courseId, token, setUserProgress]);

  // initial + cleanup save
  useEffect(() => {
    fetchProgress();
    return () => saveImmediately();
  }, [fetchProgress, saveImmediately]);

  // resume playback on lesson change
  useEffect(() => {
    if (!selectedLesson) return;

    const { lessonId } = selectedLesson;
    const fromApi = getLessonProgress(lessonId, userProgress?.modules || []);

    if (fromApi && videoDurations?.[lessonId]) {
      if (fromApi.secondsWatched > 0 && playerRef.current) {
        playerRef.current.seekTo(fromApi.secondsWatched, "seconds");
      }

      setUserProgress((prev) => ({
        ...prev,
        modules: prev.modules.map((mod) => ({
          ...mod,
          lessons: mod.lessons.map((l) => {
            const id =
              typeof l.lessonId === "object" ? l.lessonId._id : l.lessonId;
            if (id !== lessonId) return l;
            return {
              ...l,
              secondsWatched: fromApi.secondsWatched || 0,
              duration: videoDurations[lessonId],
              completed: fromApi.completed || false,
            };
          }),
        })),
      }));
    }
  }, [selectedLesson, videoDurations, userProgress]);

  return { playerRef, handleProgress, saveImmediately, fetchProgress };
};
