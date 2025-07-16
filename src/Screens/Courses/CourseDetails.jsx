import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

/////////////////////////   *****************   ///////////////////////
import {
  TimerBlack,
  RowsBlack,
  Play,
  Timer,
  PlayCircleGray,
} from "../../assets/svgs/Followers/FollowersIndex";
import { BlackLeftArrow, BlackRightArrow } from "../../assets/svgs/index";
import VedioListImg from "../../assets/Images/VedioListImg.png";
import { GraduationCapGray } from "../../assets/svgs/Browse/index";
import { useLessonProgress } from "../../hooks/userLessonProgress";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const CourseDetails = ({ lesson }) => {
  const { id } = useParams();
  const CourseID = id;
  const AuthToken = useSelector((state) => state?.Auth);
  const token = AuthToken?.Authtoken;
  const [Loading, setLoading] = useState(false);
  const [CourseDetail, setCourseDetail] = useState({});
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [expandedLesson, setExpandedLesson] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [duration, setDuration] = useState("");
  const [userProgress, setUserProgress] = useState(null);
  const [videoDuration, setVideoDuration] = useState(0);
  // console.log(videoDuration);

  const formatVideoDuration = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  const [selectedLesson, setSelectedLesson] = useState({
    index: "",
    video_url: "",
    title: "",
    estimated_time: "",
    current_lesson: "",
    lession_summary: "",
    moduleId: "",
    lessonId: "",
  });

  const LessonsProgress = async () => {
    try {
      const response = await axios.get(`/api/progress/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserProgress(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    LessonsProgress();
    const interval = setInterval(LessonsProgress, 3000);
    return () => clearInterval(interval);
  }, []);

  const CourseDetailDataFtn = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response?.data);
      setCourseDetail(response?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    CourseDetailDataFtn();
  }, []);

  useEffect(() => {
    if (!Loading && CourseDetail?.modules?.length > 0) {
      const firstModule = CourseDetail.modules[0];
      setSelectedModule(firstModule);
      setSelectedLessonIndex(1);

      if (firstModule.lessons?.length > 0) {
        const firstLesson = firstModule.lessons[0];

        setSelectedLesson({
          index: firstLesson?.index || 1,
          video_url: firstLesson.video_url,
          title: firstLesson.title,
          estimated_time: firstLesson.estimated_time,
          current_lesson: 1,
          lession_summary: firstLesson.lession_summary,
          _id: firstLesson._id, // 👈 add this
          moduleId: firstModule._id,
          lessonId: firstLesson._id,
        });
      }
    }
  }, [CourseDetail, Loading]);

  const ShowMoreText = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getYouTubeThumbnail = (url) => {
    const match = url?.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    const videoId = match ? match[1] : null;
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
      : VedioListImg;
  };

  const handlePrevLesson = () => {
    if (!selectedModule) return; // guard
    if (selectedLesson?.index > 1) {
      const newIndex = selectedLesson.index - 1; // 1‑based → 1‑based
      const lessonObj = selectedModule.lessons[newIndex - 1]; // 0‑based array
      setSelectedLesson({ ...lessonObj, index: newIndex });
    }
  };

  const handleNextLesson = () => {
    if (!selectedModule) return;
    if (selectedLesson?.index < selectedModule.lessons.length) {
      const newIndex = selectedLesson.index + 1;
      const lessonObj = selectedModule.lessons[newIndex - 1];
      setSelectedLesson({ ...lessonObj, index: newIndex });
    }
  };

  const handleProgress = (state) => {
    const { playedSeconds } = state;
    const percentage = Math.floor((playedSeconds / duration) * 100);
    saveProgress(percentage, playedSeconds, videoDuration);
  };

  const { saveProgress } = useLessonProgress(CourseID, selectedLesson);
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
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="p-3">
      <div className="">
        {/* <Breadcrumb
          items={[
            {
              title: (
                <span
                  onClick={() => {
                    navigate("/Courses");
                  }}
                  className="flex gap-1 cursor-pointer"
                >
                  <img src={GraduationCapGray} alt="GraduationCapGray" />

                  <span className="text-[14px] my-auto">Courses</span>
                </span>
              ),
            },
            {
              title: (
                <span className="text-[14px] my-auto black font-[700] line-clamp-1">
                  {CourseDetail?.title?.slice(0, 50)}
                </span>
              ),
            },
          ]}
        /> */}
        <HeaderTabs />
      </div>
      {/* Followers Hub header */}
      <div className="my-4 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="md:flex justify-between gap-5">
          <div className="my-auto">
            <h1 className="satoshi_italic lg:text-[40px] text-[20px] font-[900] black max-w-[550px] line-clamp-1">
              {CourseDetail?.title}
            </h1>
            <p
              className="lg:text-[15px] text-[13px] font-[500] black max-w-[500px] line-clamp-2 mb-2"
              dangerouslySetInnerHTML={{
                __html: CourseDetail?.content,
              }}
            />
          </div>
          {/*  */}
          <div
            className="max-h-[90px] my-auto bg_black flex gap-[20px]
           rounded-[12px] border-[2.5px] border-[#666666] p-[20px]"
          >
            <div className="flex gap-[16px]">
              <div className="lightgreenBoxShahdow my-auto bg_primaryGreen rounded-[8px] flex items-center justidfy-center pl-[14px] w-[55px] h-[45px]">
                <img
                  src={TimerBlack}
                  alt="TimerBlack"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="my-auto  gap-2">
                {Loading ? (
                  <span className="white my-auto text-[12px] font-[600]">
                    Loading...
                  </span>
                ) : (
                  <>
                    <h1 className="my-auto text-[14px] lightgray font-[500]">
                      Duration
                    </h1>
                    <p className="white text-[14px] font-[700]">
                      {CourseDetail?.estimated_time}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="lightgreenBoxShahdow my-auto bg_primaryGreen rounded-[8px] flex items-center justidfy-center pl-[14px] w-[55px] h-[45px]">
                <img
                  src={RowsBlack}
                  alt="RowsBlack"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="my-auto  gap-2">
                {Loading ? (
                  <span className="white my-auto text-[12px] font-[600]">
                    Loading...
                  </span>
                ) : (
                  <>
                    <h1 className="my-auto text-[14px] lightgray font-[500]">
                      Modules
                    </h1>
                    <p className="white text-[14px] font-[700]">
                      {" "}
                      {CourseDetail?.modules?.length}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vedio and List  */}
      <div className="grid grid:cols-1 lg:grid-cols-12 md:grid-cols-12 gap-4">
        {/* Vedio Player */}
        <div className="bg_white rounded-[8px] col-span-12 md:col-span-12 lg:col-span-8 p-4">
          <div className="video-wrapper">
            <ReactPlayer
              url={selectedLesson?.video_url}
              controls={true}
              width="100%"
              height="100%"
              playing={false}
              onProgress={handleProgress}
              onDuration={setVideoDuration}
            />
          </div>

          {/*  */}
          <div className="flex justify-between mt-3 gap-5">
            <h1 className="text-[20px] font-[700] black line-clamp-2 max-w-[600px]">
              {selectedLesson?.title}.{selectedLesson?.index}
            </h1>
            <div className="flex gap-2">
              {/* PREV */}
              <button
                onClick={handlePrevLesson}
                disabled={selectedLesson?.index <= 1}
                className={`h-[40px] px-3 py-3 border border-[#E8E8E8] rounded-[8px] transition duration-300
                ${
                  selectedLesson?.index <= 1
                    ? "cursor-not-allowed bg-gray-100 hover:shadow-none"
                    : "cursor-pointer hover:shadow-sm"
                }`}
              >
                <img src={BlackLeftArrow} alt="Prev" />
              </button>

              {/* NEXT */}
              <button
                onClick={handleNextLesson}
                disabled={
                  selectedLesson?.index >= selectedModule?.lessons?.length
                }
                className={`h-[40px] px-3 py-3 border border-[#E8E8E8] rounded-[8px] transition duration-300
                ${
                  selectedLesson?.index >= selectedModule?.lessons?.length
                    ? "cursor-not-allowed bg-gray-100 hover:shadow-none"
                    : "cursor-pointer hover:shadow-sm"
                }`}
              >
                <img src={BlackRightArrow} alt="Next" />
              </button>
            </div>
          </div>
          {/* Time and lessons */}
          <div className="flex gap-[12px]">
            <div className="my-auto">
              <p className="flex gap-1 text-[14px] font-[500] gray">
                <img src={Timer} alt="Timer" className=" my-auto" />{" "}
                <span className="my-auto pr-[12px] border-r-[2px] border-[#E8E8E8]">
                  {/* {selectedLesson?.estimated_time} */}
                  {formatVideoDuration(videoDuration * 1000)}
                </span>
              </p>
            </div>
            <div className="my-auto">
              <p className="flex gap-1 text-[14px] font-[500] gray">
                <img
                  src={PlayCircleGray}
                  alt="PlayCircleGray"
                  className=" my-auto"
                />{" "}
                <span className="my-auto">
                  {selectedLesson?.index || 1}/{selectedModule?.lessons?.length}{" "}
                  Lessons
                </span>
              </p>
            </div>
          </div>
          {/* Desc */}
          <p className="text-[14px] font-[500] gray mt-[6px] ">
            {/* <p
              dangerouslySetInnerHTML={{
                __html: selectedLesson?.lession_summary,
              }}
            /> */}
            <div className="mt-[6px]">
              <div
                className={`text-[14px] font-[500] gray  ${
                  expandedLesson ? "" : "line-clamp-4"
                }`}
                dangerouslySetInnerHTML={{
                  __html: selectedLesson?.lession_summary,
                }}
              />
              {selectedLesson?.lession_summary?.length > 400 && (
                <button
                  onClick={() => setExpandedLesson(!expandedLesson)}
                  className="text-[14px] font-[700] gray mt-1 cursor-pointer hover:underline"
                >
                  {expandedLesson ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          </p>
        </div>
        {/* Vedio List */}
        <div className="bg_white rounded-[8px] col-span-12 md:col-span-12 lg:col-span-4 p-4">
          <h1 className="inline-block bg_lightgreen flex gap-[2px] text-[12px] font-[700] rounded-[6px] px-2 py-[3px]">
            Module {selectedLessonIndex}
          </h1>
          <h1 className="text-[20px] font-[700] black mt-3">
            {selectedModule?.title}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: selectedModule?.module_summary,
            }}
            className="text-[14px] font-[500] gray mt-[6px] line-clamp-2"
          ></p>
          <div className="VedioList mt-4 max-h-[620px] overflow-y-scroll">
            {Loading ? (
              <span className="text-center p-5 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
                Loading...
              </span>
            ) : (
              <>
                {selectedModule?.lessons?.length > 0 ? (
                  selectedModule?.lessons?.map((items, index) => {
                    const progress = getLessonProgress(
                      items._id,
                      userProgress?.modules || []
                    );
                    const percentage = progress?.completed
                      ? 100
                      : progress?.duration > 0
                      ? Math.floor(
                          (progress.secondsWatched / progress.duration) * 100
                        )
                      : 0;
                    return (
                      <div>
                        <div
                          onClick={() =>
                            setSelectedLesson({
                              index: index + 1,
                              video_url: items?.video_url,
                              title: items?.title,
                              estimated_time: items?.estimated_time,
                              current_lesson: index,
                              lession_summary: items?.lession_summary,
                              moduleId: items?._id,
                              lessonId: items?._id,
                            })
                          }
                          key={index}
                          className={`flex gap-3 mt-3 hover:bg-[#F4F4F4] hover:rounded-[8px] cursor-pointer ${
                            selectedLesson?.title === items?.title
                              ? "bg-[#F4F4F4]"
                              : ""
                          }`}
                        >
                          <div className="my-auto  w-[100px] h-[60px] lg:w-[130px] lg:h-[80px]">
                            <img
                              src={getYouTubeThumbnail(items?.video_url)}
                              // alt={items?.title}
                              className="w-full h-full object-cover my-auto rounded-[8px]"
                            />{" "}
                          </div>
                          <div className="my-auto">
                            <h1 className="text-[14px] font-[500] black line-clamp-2 lg:w-[200px] md:w-[600px] w-[200px]">
                              {index + 1}.{items?.title}
                            </h1>
                            <p className="flex gap-1 text-[14px] font-[500] gray mt-[5px]">
                              <img
                                src={Timer}
                                alt="Timer"
                                className=" my-auto"
                              />{" "}
                              <span className="my-auto">
                                {formatVideoDuration(videoDuration * 1000)}
                              </span>
                            </p>

                            <div className="mt-2 w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-300 ${
                                  percentage === 100
                                    ? "bg-green-600"
                                    : "bg-[#FF1033]"
                                }`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        {/*  */}

                        {/* Optional Label */}
                      </div>
                    );
                  })
                ) : (
                  <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
                    No vedio list{" "}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Course Modules */}
      <div className="my-4 bg_white rounded-[8px]  sm:p-5 p-3">
        <h1 className="text-[20px] font-[700] black mb-4 ">Course Modules</h1>
        <div className="Cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[15px]">
          {Loading ? (
            <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[500] black text-[16px]">
              Loading...
            </span>
          ) : (
            <>
              {CourseDetail?.modules?.length > 0 ? (
                CourseDetail?.modules?.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-[8px] border-[1px] border-[#E8E8E8] flex flex-col ${
                        selectedModule?.title === items?.title
                          ? "bg-[#F4F4F4]"
                          : ""
                      }`}
                    >
                      {/* Detail */}
                      <div className="p-[13px] flex flex-col flex-1">
                        <div className="">
                          <h1 className="inline-block bg_lightgreen flex gap-[2px] text-[12px] font-[700] rounded-[6px] px-2 py-[3px]">
                            Module {index + 1}
                          </h1>
                        </div>

                        {/*  */}
                        <h1 className="text-[20px] font-[700] mt-[12px] line-clamp-1">
                          {items?.title}
                          {/* __html: items?.module_summary, */}
                        </h1>
                        {/*  */}
                        <div className="mt-[6px]">
                          <div
                            className={`text-[14px] font-[500] gray  ${
                              expandedItems[index] ? "" : "line-clamp-3"
                            }`}
                            dangerouslySetInnerHTML={{
                              __html: items?.module_summary,
                            }}
                          />
                          {items?.module_summary?.length > 290 && (
                            <button
                              onClick={() => ShowMoreText(index)}
                              className="text-[14px] font-[700] gray mt-1 cursor-pointer hover:underline"
                            >
                              {expandedItems[index] ? "Show less" : "Read more"}
                            </button>
                          )}
                        </div>
                        {/*  */}
                        <div className="flex gap-5 my-2">
                          <div className="my-auto">
                            <p className="flex gap-1 text-[14px] font-[500] gray">
                              <img
                                src={Timer}
                                alt="Timer"
                                className=" my-auto"
                              />{" "}
                              <span className="my-auto">
                                {" "}
                                {items?.estimated_time}
                              </span>
                            </p>
                          </div>
                          <div className="my-auto">
                            <p className="flex gap-1 text-[14px] font-[500] gray">
                              <img
                                src={PlayCircleGray}
                                alt="PlayCircleGray"
                                className=" my-auto"
                              />{" "}
                              <span className="my-auto">
                                {items?.lessons?.length} Lessons
                              </span>
                            </p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="mt-auto pt-3">
                          <button
                            onClick={() => {
                              setSelectedModule(items);
                              setSelectedLessonIndex(index + 1);
                              setSelectedModuleId(items?._id ?? index);
                            }}
                            disabled={selectedModule?.title === items?.title}
                            className={`flex justify-center gap-1 w-full py-2 px-5 rounded-[8px] text-[14px] font-[700]
                       ${
                         selectedModule?.title === items?.title
                           ? "bg-white black border border-[#E8E8E8] cursor-not-allowed"
                           : "bg-black text-white"
                       }`}
                          >
                            {!selectedModule?.title === items?.title && (
                              <img src={Play} alt="Play" className="my-auto" />
                            )}
                            <span className="my-auto">
                              {selectedModule?.title === items?.title
                                ? "Continue"
                                : "Start"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
                  No Module Found
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
