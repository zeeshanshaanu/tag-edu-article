import { useCallback } from "react";

export const useLessonNavigation = (
    courseDetail,
    selectedModule,
    setSelectedModule,
    setSelectedLesson
) => {
    const handleLessonClick = useCallback(
        (module, lesson, index) => {
            setSelectedModule(module);
            setSelectedLesson({
                ...lesson,
                moduleId: module._id,
                lessonId: lesson._id,
                index: index + 1,
            });
        },
        [setSelectedModule, setSelectedLesson]
    );

    const handlePrevLesson = useCallback(() => {
        if (!selectedModule || !selectedModule.lessons) return;

        const currentIndex = selectedModule.lessons.findIndex(
            (l) => l._id === selectedModule._id
        );

        if (currentIndex > 0) {
            const prevLesson = selectedModule.lessons[currentIndex - 1];
            setSelectedLesson({
                ...prevLesson,
                moduleId: selectedModule._id,
                lessonId: prevLesson._id,
                index: currentIndex,
            });
        }
    }, [selectedModule, setSelectedLesson]);

    const handleNextLesson = useCallback(() => {
        if (!selectedModule || !selectedModule.lessons) return;

        const currentIndex = selectedModule.lessons.findIndex(
            (l) => l._id === selectedModule._id
        );

        if (currentIndex < selectedModule.lessons.length - 1) {
            const nextLesson = selectedModule.lessons[currentIndex + 1];
            setSelectedLesson({
                ...nextLesson,
                moduleId: selectedModule._id,
                lessonId: nextLesson._id,
                index: currentIndex + 2,
            });
        }
    }, [selectedModule, setSelectedLesson]);

    return { handleLessonClick, handlePrevLesson, handleNextLesson };
};
