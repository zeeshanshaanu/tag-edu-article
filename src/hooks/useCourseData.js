import { useEffect, useState } from "react";
import axios from "axios";

export const useCourseData = (id, token) => {
    const [loading, setLoading] = useState(false);
    const [courseDetail, setCourseDetail] = useState({});
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);

    useEffect(() => {
        const fetchCourseDetail = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/course/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setCourseDetail(response.data?.data);

                // default select first module & lesson
                if (response.data?.data?.modules?.length > 0) {
                    const firstModule = response.data.data.modules[0];
                    setSelectedModule(firstModule);
                    if (firstModule.lessons?.length > 0) {
                        const firstLesson = firstModule.lessons[0];
                        setSelectedLesson({
                            ...firstLesson,
                            moduleId: firstModule._id,
                            lessonId: firstLesson._id,
                            index: 1,
                        });
                    }
                }
            } catch (err) {
                console.error("Error fetching course:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseDetail();
    }, [id, token]);

    return {
        loading,
        courseDetail,
        selectedModule,
        selectedLesson,
        setSelectedModule,
        setSelectedLesson,
    };
};
