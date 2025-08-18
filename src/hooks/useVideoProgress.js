// hooks/useVideoProgress.js
import { useRef, useState, useEffect, useCallback } from "react";
import { useLessonProgress } from "./userLessonProgress";

export const useVideoProgress = (courseId, token) => {
    const [videoDurations, setVideoDurations] = useState({}); // lessonId => duration
    const [userProgress, setUserProgress] = useState({}); // lessonId => { secondsWatched, completed }

    const playerRef = useRef(null);
    const currentSecondsRef = useRef(0);

    const { saveProgress } = useLessonProgress(courseId, token);

    /** Throttle function to avoid too many API calls */
    const throttle = (func, delay = 5000) => {
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

    const throttledSave = useRef(
        throttle((lessonId, secondsWatched, duration, moduleId) => {
            const pct = Math.min((secondsWatched / duration) * 100, 100);
            saveProgress(lessonId, moduleId, pct, secondsWatched, duration);
        }, 5000)
    ).current;

    /** Update progress as video plays */
    const handleProgress = ({ playedSeconds }, lessonId, moduleId) => {
        const duration = videoDurations[lessonId] || 1;
        currentSecondsRef.current = playedSeconds;

        setUserProgress(prev => ({
            ...prev,
            [lessonId]: {
                secondsWatched: playedSeconds,
                completed: playedSeconds >= duration,
            },
        }));

        throttledSave(lessonId, playedSeconds, duration, moduleId);
    };

    /** Save immediately (on pause/seek/end) */
    const saveImmediately = useCallback((lessonId, moduleId) => {
        const seconds = currentSecondsRef.current || 0;
        const duration = videoDurations[lessonId] || 1;
        const pct = Math.min((seconds / duration) * 100, 100);
        saveProgress(lessonId, moduleId, pct, seconds, duration);
    }, [saveProgress, videoDurations]);

    /** Save lesson duration */
    const handleDuration = (lessonId, duration) => {
        setVideoDurations(prev => ({
            ...prev,
            [lessonId]: duration,
        }));
    };

    /** Resume position when lesson changes */
    const getResumeAt = (lessonId) => {
        return userProgress[lessonId]?.secondsWatched || 0;
    };

    /** Load initial progress from API */
    const loadProgressFromAPI = async (courseProgressAPI) => {
        const newProgress = {};
        courseProgressAPI?.modules?.forEach(mod => {
            mod.lessons?.forEach(lesson => {
                newProgress[lesson.lessonId] = {
                    secondsWatched: lesson.secondsWatched || 0,
                    completed: lesson.completed || false,
                };
            });
        });
        setUserProgress(newProgress);
    };

    return {
        videoDurations,
        userProgress,
        playerRef,
        currentSecondsRef,
        handleProgress,
        handleDuration,
        saveImmediately,
        getResumeAt,
        loadProgressFromAPI,
        setUserProgress,
    };
};
