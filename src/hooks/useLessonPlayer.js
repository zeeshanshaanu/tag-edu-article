import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateLessonProgress } from "../redux/courseSlice"; // adjust import
import { useLessonNavigation } from "./useLessonNavigation"; // your existing navigation hook

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

export function useLessonPlayer(courseId, token, courseDetail) {
    const dispatch = useDispatch();
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedModule, setSelectedModule] = useState(null);
    const [videoDurations, setVideoDurations] = useState({});
    const [userProgress, setUserProgress] = useState(null);

    const currentSecondsRef = useRef(0);
    const currentLessonRef = useRef({ lessonId: null, moduleId: null });

    // ----------------------- Fetch progress -----------------------
    const fetchProgress = useCallback(async () => {
        try {
            const response = await axios.get(`/api/progress/${courseId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUserProgress(response.data);
        } catch (err) {
            console.error("Error fetching progress:", err);
        }
    }, [courseId, token]);

    // ----------------------- Lookup progress -----------------------
    const getLessonProgress = useCallback(
        (lessonId) => {
            if (!userProgress?.modules) return null;
            for (const mod of userProgress.modules) {
                const lesson = mod.lessons?.find(
                    (l) =>
                        (typeof l.lessonId === "object" ? l.lessonId._id : l.lessonId) ===
                        lessonId
                );
                if (lesson) return lesson;
            }
            return null;
        },
        [userProgress]
    );

    // ----------------------- Throttled save -----------------------
    const saveProgressAPI = useCallback(
        (lessonId, moduleId, pct, secondsWatched, duration, force = false) => {
            dispatch(
                updateLessonProgress({
                    lessonId,
                    secondsWatched,
                    duration,
                    percentage: pct,
                    force,
                })
            );
        },
        [dispatch]
    );

    const throttledSave = useRef(
        throttleTrailing((...args) => saveProgressAPI(...args), 5000)
    ).current;

    const saveImmediately = useCallback(() => {
        const { lessonId, moduleId } = currentLessonRef.current;
        if (!lessonId || !moduleId) return;
        const fromApi = getLessonProgress(lessonId);
        const totalDuration =
            videoDurations[lessonId] || fromApi?.duration || 0 || 1;
        const secondsWatched = currentSecondsRef.current || 0;
        const pct = Math.min((secondsWatched / totalDuration) * 100, 100);
        saveProgressAPI(lessonId, moduleId, pct, secondsWatched, totalDuration, true);
    }, [getLessonProgress, saveProgressAPI, videoDurations]);

    // ----------------------- Handle video progress -----------------------
    const handleProgress = useCallback(
        ({ playedSeconds }) => {
            if (!selectedLesson) return;
            const lessonId = selectedLesson.lessonId;
            const moduleId = selectedLesson.moduleId;
            if (!lessonId || !moduleId) return;

            currentLessonRef.current = { lessonId, moduleId };
            currentSecondsRef.current = playedSeconds;

            const fromApi = getLessonProgress(lessonId);
            const totalDuration =
                videoDurations[lessonId] || fromApi?.duration || 1;
            const pct = Math.min((playedSeconds / totalDuration) * 100, 100);

            // Update local state
            setUserProgress((prev) => {
                const updatedModules = prev.modules.map((mod) => ({
                    ...mod,
                    lessons: (mod.lessons || []).map((l) => {
                        const id =
                            typeof l.lessonId === "object" ? l.lessonId._id : l.lessonId;
                        if (id !== lessonId) return l;
                        return { ...l, secondsWatched: playedSeconds, duration: totalDuration, completed: pct >= 100 };
                    }),
                }));
                return { ...prev, modules: updatedModules };
            });

            throttledSave(lessonId, moduleId, pct, playedSeconds, totalDuration);
        },
        [selectedLesson, getLessonProgress, videoDurations, throttledSave]
    );

    // ----------------------- Handle duration -----------------------
    const handleDuration = useCallback((duration) => {
        if (!selectedLesson) return;
        setVideoDurations((prev) => ({
            ...prev,
            [selectedLesson.lessonId]: duration,
        }));
    }, [selectedLesson]);

    // ----------------------- Resume video -----------------------
    useEffect(() => {
        if (!selectedLesson || !userProgress) return;
        const lessonProgress = getLessonProgress(selectedLesson.lessonId);
        if (lessonProgress) {
            currentSecondsRef.current = lessonProgress.secondsWatched || 0;
        }
    }, [selectedLesson, getLessonProgress, userProgress]);

    // ----------------------- Initial fetch -----------------------
    useEffect(() => {
        fetchProgress();
    }, [fetchProgress]);

    // ----------------------- Lesson navigation -----------------------
    const navigation = useLessonNavigation(
        courseDetail,
        selectedModule,
        setSelectedModule,
        setSelectedLesson
    );

    return {
        selectedLesson,
        selectedModule,
        setSelectedLesson,
        setSelectedModule,
        userProgress,
        videoDurations,
        handleProgress,
        handleDuration,
        saveImmediately,
        ...navigation,
    };
}
