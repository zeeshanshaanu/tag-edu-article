import { useEffect, useState } from "react";
import axios from "axios";
import { Breadcrumb, Tooltip } from "antd";
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
import VedioListImg from "../../assets/Images/VedioListImg.png";
import { GraduationCapGray } from "../../assets/svgs/Browse/index";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [CourseDetail, setCourseDetail] = useState({});
  const [Loading, setLoading] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  //
  const AuthToken = useSelector((state) => state?.Auth);
  const token = AuthToken?.Authtoken;

  const [selectedLesson, setSelectedLesson] = useState({
    video_url: "",
    title: "",
    estimated_time: "",
    current_lesson: "",
    lession_summary: "",
  });

  const CourseDetailDataFtn = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response?.data);
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

  // 🍀 Auto‑select first module + first lesson once data is loaded
  useEffect(() => {
    if (!Loading && CourseDetail?.modules?.length > 0) {
      const firstModule = CourseDetail.modules[0];
      setSelectedModule(firstModule);
      setSelectedLessonIndex(1);

      if (firstModule.lessons?.length > 0) {
        const firstLesson = firstModule.lessons[0];
        setSelectedLesson({
          video_url: firstLesson.video_url,
          title: firstLesson.title,
          estimated_time: firstLesson.estimated_time,
          current_lesson: 1,
          lession_summary: firstLesson.lession_summary,
        });
      }
    }
  }, [CourseDetail, Loading]);

  const getYouTubeThumbnail = (url) => {
    const match = url?.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    const videoId = match ? match[1] : null;
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
      : VedioListImg;
  };

  return (
    <div className="p-3">
      <div className="">
        <Breadcrumb
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
        />
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
            />
          </div>

          {/*  */}
          <div className="flex justify-between mt-3 gap-5">
            <h1 className="text-[20px] font-[700] black line-clamp-2ss max-w-[100%]">
              {selectedLesson?.title}
            </h1>
          </div>
          {/* Time and lessons */}
          <div className="flex gap-5">
            <div className="my-auto">
              <p className="flex gap-1 text-[14px] font-[500] gray">
                <img src={Timer} alt="Timer" className=" my-auto" />{" "}
                <span className="my-auto">
                  {selectedLesson?.estimated_time}
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
                  {selectedLesson?.current_lesson} Lessons
                </span>
              </p>
            </div>
          </div>
          {/* Desc */}
          <p className="text-[14px] font-[500] gray mt-[6px] max-h-[100px] overflow-y-scroll">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedLesson?.lession_summary,
              }}
            />
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
          <p className="text-[14px] font-[500] gray mt-[6px] line-clamp-2">
            {/* <Tooltip
              title={
                <div
                  className="bg-black text-white"
                  dangerouslySetInnerHTML={{
                    __html: selectedModule?.module_summary,
                  }}
                />
              }
              placement="topLeft"
            > */}
            <p
              dangerouslySetInnerHTML={{
                __html: selectedModule?.module_summary,
              }}
            />
            {/* </Tooltip>{" "} */}
          </p>
          <div className="VedioList mt-4 max-h-[620px] overflow-y-scroll">
            {Loading ? (
              <span className="text-center p-5 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
                Loading...
              </span>
            ) : (
              <>
                {selectedModule?.lessons?.length > 0 ? (
                  selectedModule?.lessons?.map((items, index) => {
                    return (
                      <div
                        onClick={() =>
                          setSelectedLesson({
                            video_url: items?.video_url,
                            title: items?.title,
                            estimated_time: items?.estimated_time,
                            current_lesson: index,
                            lession_summary: items?.lession_summary,
                          })
                        }
                        key={index}
                        className=" flex gap-3 mt-3 hover:bg-[#F4F4F4] hover:rounded-[8px] cursor-pointer"
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
                            <img src={Timer} alt="Timer" className=" my-auto" />{" "}
                            <span className="my-auto">
                              {items?.estimated_time}
                            </span>
                          </p>
                        </div>
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
                      className="rounded-[8px] border-[1px] border-[#E8E8E8] flex flex-col"
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
                        </h1>
                        {/*  */}
                        <p className="text-[14px] font-[500] gray  mt-[6px] line-clamp-2">
                          {/* <Tooltip
                            title={
                              <div
                                className="bg-black text-white"
                                dangerouslySetInnerHTML={{
                                  __html: items?.module_summary,
                                }}
                              />
                            }
                            placement="topLeft"
                          > */}
                          <p
                            dangerouslySetInnerHTML={{
                              __html: items?.module_summary,
                            }}
                          />
                          {/* </Tooltip> */}
                        </p>
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
                            }}
                            className="cursor-pointer flex justify-center gap-1 bg-black w-full py-2 px-5 rounded-[8px] text-white text-[14px] font-[700]"
                          >
                            <img src={Play} alt="Play" className="my-auto" />
                            <span className="my-auto text-[14px] font-[700]">
                              Start
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
