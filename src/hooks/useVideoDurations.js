import { useState } from "react";

export const useVideoDurations = () => {
    const [videoDurations, setVideoDurations] = useState({});

    const handleDuration = (lessonId, duration) => {
        setVideoDurations((prev) => ({ ...prev, [lessonId]: duration }));
    };

    return { videoDurations, handleDuration };
};
