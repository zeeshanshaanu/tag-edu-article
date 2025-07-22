import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useSelector } from "react-redux";
import { useRef } from "react";
import dayjs from "dayjs";

// ///////////////////////   *****************   ///////////////////////
import ProfileImage from "../../assets/Images/ProfileImage.png";

import {
  Timer,
  NotePencilWhite,
  CalendarGray,
  CalendarUpcomingGray,
  CalendarColored,
  ClockCounterColored,
  ClockCounterGray,
  PlayCircleBlack,
} from "../../assets/svgs/Followers/FollowersIndex";

import Pagination from "../../components/TablePagination/Pagination";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const Webinars = () => {
  const [Status, setStatus] = useState("upcoming");
  const [loading, setLoading] = useState(false);
  const [WebinarsData, setWebinarsData] = useState([]);
  const AuthToken = useSelector((state) => state?.Auth);
  // console.log(AuthToken);
  const ValidUser = AuthToken?.UserInfo;
  const token = AuthToken?.Authtoken;
  const [messageApi, contextHolder] = message.useMessage();

  // Pagination, Search and filtersPaging
  const [totalCount, setTotalCount] = useState(0);
  const [filtersPaging, setFiltersPaging] = useState({ skip: 0, limit: 10 });
  const currentPage = Math.floor(filtersPaging.skip / filtersPaging.limit) + 1;
  const loadingDelayRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const FetchWebinars = async () => {
    loadingDelayRef.current = setTimeout(() => {
      setLoading(true);
    }, 300);
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/webinar?page=${currentPage}&limit=${filtersPaging.limit}&status=${Status}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const result = response?.data;
      // console.log(result);

      setWebinarsData(result?.data);
      setTotalCount(result?.totalCount || 0);
    } catch (error) {
      if (error?.response?.status === 401) {
        handleLogout();
      }
      console.error("Error fetching Webinars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchWebinars();

    const interval = setInterval(() => {
      FetchWebinars();
    }, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, [currentPage, Status, filtersPaging.limit, token]);

  const handlePageChange = (newPage) => {
    setFiltersPaging((prev) => ({
      ...prev,
      skip: (newPage - 1) * prev.limit,
    }));
  };

  const [enrollmentLoadingIds, setEnrollmentLoadingIds] = useState(new Set());

  const handleEnrollment = async (EnrollID) => {
    setEnrollmentLoadingIds((prev) => new Set(prev).add(EnrollID));

    try {
      const response = await axios.post(
        "/api/webinar/enroll",
        {
          webinar_id: EnrollID,
          user_email: ValidUser?.email,
          first_name: ValidUser?.first_name,
          last_name: ValidUser?.last_name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response?.data);
      messageApi.success(response?.data?.message);
      FetchWebinars();
    } catch (error) {
      messageApi.error(error?.response?.data?.message);

      console.error("ENROLL ERROR:", error?.response);
    } finally {
      setEnrollmentLoadingIds((prev) => {
        const updated = new Set(prev);
        updated.delete(EnrollID);
        return updated;
      });
    }
  };

  return (
    <div className="p-3">
      {contextHolder}
      <HeaderTabs />
      {/* Browse Pro Traders */}
      <div className="mt-3 HeaderGreenBGimage sm:p-[20px] p-[12px] rounded-[12px]">
        <div className="sm:flex justify-between gap-5">
          <h1 className="satoshi_italic lg:text-[40px] text-[20px] font-[900] black">
            Webinars
          </h1>
        </div>
      </div>{" "}
      {/* Tabs and Search-input */}
      <div className="lg:flex justify-between mt-3">
        <div className="flex gap-[8px] my-auto max-w-[100%] overflow-x-auto pb-2 sm:pb-0">
          <div
            className={`min-w-[70px] rounded-full lg:rounded-[8px] cursor-pointer flex px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 ${
              Status === "upcoming" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setStatus("upcoming")}
          >
            <span className="my-auto">
              <img
                src={
                  Status === "upcoming" ? CalendarColored : CalendarUpcomingGray
                }
                alt="MagnifyingGlassBlack"
                className="w-[25px] h-[20px]"
              />
            </span>
            <span
              className={` my-auto text-[14px] my-auto ${
                Status === "upcoming" ? "black" : "gray"
              }`}
            >
              Upcoming
            </span>
          </div>
          {/*  */}
          <div
            className={`min-w-[70px] rounded-full lg:rounded-[8px] cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 
             ${Status === "past" ? "bg_white font-[700]" : "bg_lightgray2"}
          `}
            onClick={() => setStatus("past")}
          >
            <img
              src={Status === "past" ? ClockCounterColored : ClockCounterGray}
              alt="MagnifyingGlassBlack"
              className="w-[20px] h-[20px]"
            />

            <span
              className={`text-[14px] my-auto ${
                Status === "past" ? "black" : "gray"
              }`}
            >
              Past
            </span>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="bg-white rounded-[12px] sm:p-5 p-3 mt-1">
        <div className="Cards max-h-[100vh] overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[15px]">
          {WebinarsData?.length > 0 ? (
            WebinarsData?.map((items, index) => {
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

                  {/* Content Section */}
                  <div className="flex flex-col p-[13px] flex-grow">
                    <h1 className="lg:text-[20px] text-[16px] font-[700]">
                      {items?.title}
                    </h1>

                    <div className="mt-[6px]">
                      <div
                        className={`text-[14px] font-[500] gray  ${
                          expandedItems[index] ? "" : "line-clamp-3"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: items?.content,
                        }}
                      />
                      {items?.content?.length > 290 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-[14px] font-[700] gray mt-1 cursor-pointer hover:underline"
                        >
                          {expandedItems[index] ? "Show less" : "Read more"}
                        </button>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex gap-5 my-2">
                      <div className="my-auto">
                        <p className="flex gap-1 text-[14px] font-[500] gray">
                          <img
                            src={CalendarGray}
                            alt="CalendarGray"
                            className="my-auto"
                          />

                          <p className="text-[12px] font-[500] gray my-auto">
                            {dayjs(items?.start_time).format("MMMM D, YYYY")}
                          </p>
                        </p>
                      </div>

                      {Status === "upcoming" && (
                        <div className="my-auto">
                          <p className="flex gap-1 text-[14px] font-[500] gray">
                            <img src={Timer} alt="Timer" className="my-auto" />
                            <span className="my-auto">
                              {dayjs(items?.start_time).format(" hh:mm A")} UTC
                            </span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Button at Bottom */}
                    <div className="mt-auto pt-4">
                      {new Date(items?.end_time) < new Date() ? (
                        // Webinar has ended → Show "Watch Recording"
                        <button
                          className="flex justify-center gap-1 cursor-pointer bg-white black border border-[#E8E8E8]
      w-full text-center py-2 px-5 rounded-[8px] text-[14px] font-[700]"
                        >
                          <img
                            src={PlayCircleBlack}
                            alt="PlayCircleBlack"
                            className="my-auto"
                          />
                          <span className="my-auto">Watch Recording</span>
                        </button>
                      ) : (
                        // Same logic for live/upcoming webinars
                        <>
                          {!items?.enrolled && items?.is_live ? (
                            <a
                              href={items?.vedio_link}
                              target="_blank"
                              className="flex justify-center gap-1 cursor-pointer bg-white black border border-[#E8E8E8]
        w-full text-center py-2 px-5 rounded-[8px] text-[14px] font-[700]"
                            >
                              <span className="my-auto">Join Now</span>
                            </a>
                          ) : !items?.enrolled ? (
                            <button
                              disabled={enrollmentLoadingIds.has(items._id)}
                              onClick={() => handleEnrollment(items._id)}
                              className={`flex justify-center gap-1 w-full text-center py-2 px-5 rounded-[8px] text-[14px] font-[700] ${
                                enrollmentLoadingIds.has(items._id)
                                  ? "bg-white text-black border border-[#E8E8E8] cursor-not-allowed"
                                  : "bg-black text-white cursor-pointer border border-[#E8E8E8]"
                              }`}
                            >
                              {enrollmentLoadingIds.has(items._id) ? (
                                <span className="my-auto animate-pulse">
                                  Enrolling...
                                </span>
                              ) : (
                                <span className="my-auto">Enroll</span>
                              )}
                            </button>
                          ) : items?.is_live ? (
                            <a
                              href={items?.vedio_link}
                              target="_blank"
                              className="flex justify-center gap-1 cursor-pointer bg-white black border border-[#E8E8E8]
        w-full text-center py-2 px-5 rounded-[8px] text-[14px] font-[700]"
                            >
                              <span className="my-auto">Join Now</span>
                            </a>
                          ) : (
                            <button className="flex justify-center gap-1 bg-black w-full text-center py-2 px-5 rounded-[8px] text-white text-[14px] font-[700] border border-[#E8E8E8]">
                              <span className="my-auto">Enrolled</span>
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
              No Webinar Found
            </span>
          )}
        </div>
        {/*  */}
        {WebinarsData?.length > 0 && (
          <Pagination
            current={currentPage}
            total={totalCount}
            pageSize={filtersPaging.limit}
            onPageChange={handlePageChange}
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Webinars;
