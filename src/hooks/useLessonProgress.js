import { useEffect, useRef, useCallback, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateLessonProgress } from "../Store/Course/CourseSlice";
import { useLessonProgress as apiLessonProgress } from "./userLessonProgress"; // your existing API hook

// helper: throttled save
const throttleTrailing = (func, delay) => {
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
};

export const useLessonProgress = (courseId, token, videoDurations) => {
    const dispatch = useDispatch();
    const [userProgress, setUserProgress] = useState(null);
    const { saveProgress } = apiLessonProgress(courseId, token);

    const currentSecondsRef = useRef(0);
    const currentLessonRef = useRef({ lessonId: null, moduleId: null });

    // throttled background save
    const throttledSaveProgress = useRef(
        throttleTrailing(
            (lessonId, moduleId, pct, secondsWatched, duration) => {
                saveProgress(lessonId, moduleId, pct, secondsWatched, duration, {
                    force: false,
                });
            },
            5000
        )
    ).current;

    // fetch progress from API
    const fetchProgress = async () => {
        try {
            const res = await axios.get(`/api/progress/${courseId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUserProgress(res.data);
        } catch (err) {
            console.error("Error fetching progress:", err);
        }
    };

    useEffect(() => {
        fetchProgress();
        return () => saveImmediately();
    }, []);

    // force save (pause/seek/end/unmount)
    const saveImmediately = useCallback(() => {
        const { lessonId, moduleId } = currentLessonRef.current;
        if (!lessonId || !moduleId) return;

        const duration = videoDurations?.[lessonId] || 1;
        const secondsWatched = currentSecondsRef.current || 0;
        const pct = Math.min((secondsWatched / duration) * 100, 100);

        saveProgress(lessonId, moduleId, pct, secondsWatched, duration, {
            force: true,
        });
    }, [saveProgress, videoDurations]);

    // handle progress update from player
    const handleProgress = ({ playedSeconds }, selectedLesson) => {
        const { lessonId, moduleId } = selectedLesson;
        if (!lessonId || !moduleId) return;

        currentLessonRef.current = { lessonId, moduleId };
        currentSecondsRef.current = playedSeconds;

        const duration = videoDurations?.[lessonId] || 1;
        const pct = Math.min((playedSeconds / duration) * 100, 100);

        // local state update
        setUserProgress((prev) => ({
            ...prev,
            modules: prev.modules.map((mod) => ({
                ...mod,
                lessons: mod.lessons.map((l) =>
                    l.lessonId === lessonId
                        ? { ...l, secondsWatched: playedSeconds, duration, completed: pct >= 100 }
                        : l
                ),
            })),
        }));

        // redux update
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

    return {
        userProgress,
        handleProgress,
        saveImmediately,
    };
};
