import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// ///////////////////////   *****************   ///////////////////////
import ProfileImage from "../../assets/Images/ProfileImage.png";

import {
  CirclesThreeColored,
  StackSimple,
} from "../../assets/svgs/Browse/index";
import {
  ChartLineUp,
  GearSix,
  CrownBlack,
  CrownGray,
  Rows,
  Play,
  Timer,
  LockSimpleOpen,
} from "../../assets/svgs/Followers/FollowersIndex";
import { MagnifyingGlassWhite } from "../../assets/svgs/index";

import Pagination from "../../components/TablePagination/Pagination";
import { useNavigate } from "react-router";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";
import ReactPlayer from "react-player";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const Courses = () => {
  const navigate = useNavigate();
  const seenLessons = useRef(new Set()); // Put this at the top, outside render
  const pendingDurations = useRef({});
  const [Status, setStatus] = useState("all");
  const [loading, setLoading] = useState(false);
  const [CoursesData, setCoursesData] = useState([]);
  const AuthToken = useSelector((state) => state?.Auth);
  const token = AuthToken?.Authtoken;
  const loadingDelayRef = useRef(null);

  // Pagination, Search and filtersPaging
  const [Search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [filtersPaging, setFiltersPaging] = useState({ skip: 0, limit: 10 });
  const currentPage = Math.floor(filtersPaging.skip / filtersPaging.limit) + 1;

  useEffect(() => {
    const FetchCourses = async () => {
      loadingDelayRef.current = setTimeout(() => {
        setLoading(true);
      }, 300);

      setLoading(true);
      try {
        const response = await axios.get(
          `/api/course?page=${currentPage}&limit=${filtersPaging.limit}&tag=${Status}&search=${Search}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const result = response?.data;
        // console.log(result);

        setCoursesData(result?.data);
        setTotalCount(result?.totalCount || 0);
      } catch (error) {
        if (error?.response?.status === 401) {
          handleLogout();
        }
        console.error("Error fetching Courses:", error);
      } finally {
        setLoading(false);
      }
    };

    FetchCourses();
  }, [currentPage, Status, Search, filtersPaging.limit, token]);

  const handlePageChange = (newPage) => {
    setFiltersPaging((prev) => ({
      ...prev,
      skip: (newPage - 1) * prev.limit,
    }));
  };
  const [expandedItems, setExpandedItems] = useState({});
  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [courseDurations, setCourseDurations] = useState({});
  function formatDuration(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    const parts = [];
    if (h > 0) parts.push(`${h}h`);
    if (m > 0) parts.push(`${m}m`);
    if (h === 0 && m === 0) parts.push(`${s}s`); // only show seconds if very short

    return parts.join(" ");
  }

  const handleLessonDuration = (courseId, lessonId, duration) => {
    const lessonKey = `${courseId}_${lessonId}`;
    if (seenLessons.current.has(lessonKey)) return;

    seenLessons.current.add(lessonKey);

    // Accumulate duration temporarily
    if (!pendingDurations.current[courseId]) {
      pendingDurations.current[courseId] = 0;
    }
    pendingDurations.current[courseId] += duration;

    // Get lesson count
    const course = CoursesData.find((c) => c._id === courseId);
    const totalLessons = course?.modules?.reduce(
      (acc, mod) => acc + (mod?.lessons?.length || 0),
      0
    );

    // When all lessons for a course have reported duration
    const seenCount = Array.from(seenLessons.current).filter((key) =>
      key.startsWith(`${courseId}_`)
    ).length;

    if (seenCount === totalLessons) {
      const totalDuration = pendingDurations.current[courseId]; // Get the final value

      setCourseDurations((prev) => ({
        ...prev,
        [courseId]: totalDuration,
      }));

      // ✅ Use the same value you just computed
      localStorage.setItem(courseId, totalDuration);
    }
  };

  return (
    <div className="p-3">
      <HeaderTabs />
      {/* Browse Pro Traders */}
      <div className="mt-3 HeaderGreenBGimage sm:p-[20px] p-[12px] rounded-[12px]">
        <div className="sm:flex justify-between gap-5">
          <h1 className="satoshi_italic lg:text-[40px] text-[20px] font-[900] black">
            Courses
          </h1>
        </div>
      </div>{" "}
      {/* Tabs and Search-input */}
      <div className="lg:flex justify-between mt-4">
        <div className="flex gap-[8px] my-auto max-w-[100%] overflow-x-auto pb-2 sm:pb-0">
          <div
            className={`min-w-[70px] cursor-pointer flex rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 ${
              Status === "all" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setStatus("all")}
          >
            <span className="my-auto">
              <img
                src={
                  Status === "all" ? CirclesThreeColored : CirclesThreeColored
                }
                alt="MagnifyingGlassBlack"
                className="w-[25px] h-[20px]"
              />
            </span>
            <span
              className={` my-auto text-[14px] my-auto ${
                Status === "all" ? "black" : "gray"
              }`}
            >
              All
            </span>
          </div>
          {/*  */}
          <div
            className={`min-w-[80px]  rounded-full lg:rounded-[8px] cursor-pointer my-auto flex gap-1  px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 
             ${Status === "VIP" ? "bg_white font-[700]" : "bg_lightgray2"}
          `}
            onClick={() => setStatus("VIP")}
          >
            <img
              src={Status === "VIP" ? CrownBlack : CrownGray}
              alt="MagnifyingGlassBlack"
              className="w-[20px] h-[20px]"
            />

            <span
              className={`text-[14px] my-auto ${
                Status === "VIP" ? "black" : "gray"
              }`}
            >
              VIP
            </span>
          </div>
          {/*  */}
          <div
            className={` min-w-[70px] rounded-full lg:rounded-[8px] cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[8px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
              Status === "free" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setStatus("free")}
          >
            {" "}
            <img
              src={Status === "all" ? GearSix : GearSix}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />
            <span
              className={`text-[14px] my-auto ${
                Status === "free" ? "black" : "gray"
              }`}
            >
              FREE
            </span>
          </div>
        </div>
        {/*  */}
        <div className="relative my-auto md:mt-2 lg:mt-0 w-full sm:w-[280px]">
          <input
            type="text"
            placeholder="Search"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
            className="w-full border border-[1.5px] border-[#E8E8E8] bg-white rounded-[8px] outline-none pl-[15px] pr-[45px] py-[7px]"
          />
          <div className="absolute top-[4px] right-[5px]">
            <img
              src={MagnifyingGlassWhite}
              alt="MagnifyingGlass"
              className="w-[32px] h-[31px] p-[7px] bg_black rounded-[6px]"
            />
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="bg-white rounded-[12px] sm:p-5 p-3 mt-1">
        <div className="Cards max-h-[100vh] overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[15px]">
          {/* {loading ? (
            <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[600] black text-[16px]">
              Loading...
            </span>
          ) : (
          )} */}
          <>
            {CoursesData?.length > 0 ? (
              CoursesData?.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-[8px] border border-[#E8E8E8] flex flex-col h-full"
                  >
                    {/* Top Image Section */}
                    <div
                      style={{
                        backgroundImage: `url(${items?.image || ProfileImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "200px",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    />

                    {/* Detail Section */}
                    <div className="p-[13px] flex flex-col flex-1">
                      {/* Tags */}
                      <div className="flex gap-[10px]">
                        <h1 className="text-[12px] font-[700] rounded-[8px] border border-[#E8E8E8] px-2 py-1 my-auto capitalize">
                          {items?.level}
                        </h1>
                        {items?.tag === "vip" && (
                          <>
                            <h1 className="bg_lightgreen flex gap-[2px] text-[12px] font-[700] rounded-[8px] px-2 py-1 my-auto">
                              <img
                                src={CrownBlack}
                                alt="VIP"
                                className="w-[20px] h-[20px] my-auto"
                              />
                              <span className="my-auto uppercase">
                                {items?.tag}
                              </span>
                            </h1>
                            <p className="text-[12px] font-[500] gray my-auto">
                              Deposit $500 to unlock VIP
                            </p>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h1 className="lg:text-[20px] text-[16px] font-[700] mt-[12px]">
                        {items?.title}
                      </h1>

                      {/* Description with Tooltip */}

                      <div className="mt-[6px]">
                        <p
                          className={`text-[14px] font-[500] gray ${
                            expandedItems[index] ? "" : "line-clamp-2"
                          }`}
                        >
                          {items?.preview_text}
                        </p>

                        {items?.preview_text?.length > 300 && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-[14px] font-[700] gray mt-1 cursor-pointer hover:underline"
                          >
                            {expandedItems[index] ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>

                      {/* Info Rows */}
                      <div className="flex gap-5 my-2">
                        <div className="my-auto">
                          <p className="flex gap-1 text-[14px] font-[500] gray">
                            <img src={Timer} alt="Timer" className="my-auto" />
                            <span className="my-auto">
                              {/* {getCourseTotalDuration(items?.modules)} */}

                              <p className="text-sm text-gray-600">
                                {courseDurations[items._id] !== undefined
                                  ? formatDuration(courseDurations[items._id])
                                  : "Calculating..."}
                              </p>
                            </span>
                          </p>
                        </div>
                        <div className="my-auto">
                          <p className="flex gap-1 text-[14px] font-[500] gray">
                            <img src={Rows} alt="Modules" className="my-auto" />
                            <span className="my-auto">
                              {items?.modules?.length} modules
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Button Always at Bottom */}
                      <div className="mt-auto pt-4">
                        <button
                          onClick={() =>
                            navigate(`/CourseDetails/${items?._id}`, {
                              state: {
                                duration: courseDurations[items._id],
                              },
                            })
                          }
                          className="flex justify-center gap-1 cursor-pointer bg-black w-full text-center py-2 px-5 rounded-[8px] text-white text-[14px] font-[700]"
                        >
                          <img
                            src={items?.tag === "vip" ? LockSimpleOpen : Play}
                            alt="Play"
                            className="my-auto"
                          />
                          <span className="my-auto">
                            {items?.tag === "vip"
                              ? "Unlock VIP Course"
                              : "Begin Course"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
                No Course Found
              </span>
            )}
          </>
        </div>
        {/* CoursesData */}
        {CoursesData?.length > 0 && (
          <Pagination
            current={currentPage}
            total={totalCount}
            pageSize={filtersPaging.limit}
            onPageChange={handlePageChange}
            isLoading={loading}
          />
        )}
      </div>
      <div style={{ display: "none" }}>
        {CoursesData?.flatMap((course) =>
          course?.modules?.flatMap((mod) =>
            (mod?.lessons || []).map((lesson) => (
              <ReactPlayer
                key={lesson._id}
                url={lesson.video_url}
                playing={false}
                controls={false}
                onDuration={(duration) =>
                  handleLessonDuration(course._id, lesson._id, duration)
                }
              />
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Courses;
