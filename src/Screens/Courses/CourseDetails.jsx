import { useEffect, useState } from "react";
import axios from "axios";
import { Breadcrumb } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

// ///////////////////////   *****************   ///////////////////////
import {
  TimerBlack,
  RowsBlack,
  Play,
  Timer,
  PlayCircleGray,
} from "../../assets/svgs/Followers/FollowersIndex";
import { ArrowRight, ArrowLeftBlack } from "../../assets/svgs/index";
import VedioListImg from "../../assets/Images/VedioListImg.png";
import { GraduationCapGray } from "../../assets/svgs/Browse/index";
import Pagination from "../../components/TablePagination/Pagination";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [strategiesData, setstrategiesData] = useState({});
  const [Data, setData] = useState({});
  const FollowerStrategyData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/strategies/${id}`, {
        headers: {
          Authorization: `Bearer ${`Token`}`,
        },
      });

      setstrategiesData(response?.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Check for 401 Unauthorized
      if (
        error.response?.data?.detail === "Token has expired" ||
        error.response?.data?.detail === "Unauthorized"
      ) {
        console.log(error);
      } else {
        setstrategiesData(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FollowerStrategyData();
  }, []);

  // ///////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // or whatever you want
  const [totalCount, setTotalCount] = useState(0);
  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/traders`,
        {
          params: {
            page: currentPage,
            size: pageSize,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${`Token`}`,
          },
        }
      );
      console.log(" Response:", response?.data);

      setData(response?.data?.items || []);
      setTotalCount(response?.data?.meta?.total || 0);
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Check for 401 Unauthorized
      if (
        error.response?.data?.detail === "Token has expired" ||
        error.response?.data?.detail === "Unauthorized"
      ) {
        console.log(error);
      } else {
        setData(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, [currentPage, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                <span className="text-[14px] my-auto black font-[700]">
                  {Data?.name || "John"}
                </span>
              ),
            },
          ]}
        />
      </div>
      {/* Followers Hub header */}
      <div className="my-4 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="lg:flex justify-between gap-5">
          <div className="my-auto">
            <h1 className="satoshi_italic lg:text-[40px] text-[20px] font-[900] black">
              Forex 101 with John
            </h1>
            <p className="lg:text-[15px] text-[13px] font-[500] black max-w-[450px] mb-2">
              Forex 101 is the ultimate beginner’s course designed to give you a
              complete understanding of the forex market.
            </p>
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
                    <p className="white text-[14px] font-[700]">6h 45m </p>
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
                    <p className="white text-[14px] font-[700]">9 </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vedio and List  */}
      <div className="grid grid:cols-1 lg:grid-cols-12 md:grid-cols-8 gap-4">
        {/* Vedio Player */}
        <div className="bg_white rounded-[8px] col-span-12 md:col-span-5 lg:col-span-8 p-4">
          {/* <img
            src={VedioListImg}
            alt="VedioListImg"
            className=" my-auto object-cover w-full max-h-[450px] rounded-[8px]"
          />{" "} */}
          <div className="video-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // or your own .mp4 file URL
              controls={true}
              width="100%"
              height="100%"
              playing={false}
            />
          </div>

          {/*  */}
          <div className="flex justify-between mt-3">
            <h1 className="text-[20px] font-[700] black">
              Candlestick Formations
            </h1>
            <div className="flex gap-[8px]">
              <button className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] p-[10px]">
                <img
                  src={ArrowLeftBlack}
                  alt="ArrowLeftBlack"
                  className="w-[13px]"
                />{" "}
              </button>
              <button className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] p-[10px]">
                <img src={ArrowRight} alt="ArrowRight" className="" />{" "}
              </button>
            </div>
          </div>
          {/* Time and lessons */}
          <div className="flex gap-5">
            <div className="my-auto">
              <p className="flex gap-1 text-[14px] font-[500] gray">
                <img src={Timer} alt="Timer" className=" my-auto" />{" "}
                <span className="my-auto"> 6h 45m</span>
              </p>
            </div>
            <div className="my-auto">
              <p className="flex gap-1 text-[14px] font-[500] gray">
                <img
                  src={PlayCircleGray}
                  alt="PlayCircleGray"
                  className=" my-auto"
                />{" "}
                <span className="my-auto">6/8 Lessons</span>
              </p>
            </div>
          </div>
          {/* Desc */}
          <p className="text-[14px] font-[500] gray  mt-[6px] line-clamp-4">
            Welcome to Forex 101, your beginner-friendly course into the world
            of foreign exchange. In this module, we dive into candlestick
            formations, one of the most essential tools in a trader’s technical
            arsenal. You’ll learn how to recognize key patterns, interpret price
            actions, and make smarter entry and exit decisions.
          </p>
        </div>
        {/* Vedio List */}
        <div className="bg_white rounded-[8px] col-span-12 md:col-span-3 lg:col-span-4 p-4">
          <h1 className="inline-block bg_lightgreen flex gap-[2px] text-[12px] font-[700] rounded-[6px] px-2 py-[3px]">
            Module 1
          </h1>
          <h1 className="text-[20px] font-[700] black mt-3">
            Introduction to Forex
          </h1>
          <p className="text-[14px] font-[500] gray mt-[6px] line-clamp-2">
            This is where you learn the basics of how the Forex market operates.
          </p>
          <div className="VedioList mt-4 max-h-[450px] overflow-y-scroll">
            {Loading ? (
              <span className="text-center p-5 grid grid-cols-1 col-span-10 font-[700] lightgray3 text-[20px]">
                Loading...
              </span>
            ) : (
              <>
                {Data?.length > 0 ? (
                  Data?.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className=" flex gap-3 mt-3 hover:bg-[#F4F4F4] hover:rounded-[8px] cursor-pointer"
                      >
                        <div className="my-auto">
                          <img
                            src={VedioListImg}
                            alt="VedioListImg"
                            className=" my-auto w-[130px] h-[80px] rounded-[8px]"
                          />{" "}
                        </div>
                        <div className="my-auto">
                          <h1 className="text-[14px] font-[500] black">
                            1. What is Forex?
                          </h1>
                          <p className="flex gap-1 text-[14px] font-[500] gray mt-[5px]">
                            <img src={Timer} alt="Timer" className=" my-auto" />{" "}
                            <span className="my-auto"> 6h 45m</span>
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <span className="text-center p-5 grid grid-cols-1 col-span-10 font-[700] lightgray3 text-[20px]">
                    No vedio list
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
            <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[700] black text-[20px]">
              Loading...
            </span>
          ) : (
            <>
              {Data?.length > 0 ? (
                Data?.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-[8px] border-[1px] border-[#E8E8E8]"
                    >
                      {/* Detail */}
                      <div className="p-[13px]">
                        <h1 className="inline-block bg_lightgreen flex gap-[2px] text-[12px] font-[700] rounded-[6px] px-2 py-[3px]">
                          Module 1
                        </h1>

                        {/*  */}
                        <h1 className="text-[20px] font-[700] mt-[12px]">
                          How to Install Indicators
                        </h1>
                        {/*  */}
                        <p className="text-[14px] font-[500] gray  mt-[6px] line-clamp-2">
                          The altcoin market presents significant opportunities
                          and risks in 2025. This comprehensive guide an asdfljh
                          The altcoin market presents significant opportunities
                          and risks in 2025. This comprehensive guide an asdfljh
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
                              <span className="my-auto"> 6h 45m</span>
                            </p>
                          </div>
                          <div className="my-auto">
                            <p className="flex gap-1 text-[14px] font-[500] gray">
                              <img
                                src={PlayCircleGray}
                                alt="PlayCircleGray"
                                className=" my-auto"
                              />{" "}
                              <span className="my-auto">6 Lessons</span>
                            </p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="mt-4">
                          <button
                            // onClick={() =>
                            //   navigate(`/CourseDetails/${items?.id}`)
                            // }
                            className="flex justify-center gap-1 cursor-pointer bg-black w-full text-center py-2 px-5 rounded-[8px] text-white text-[14px] font-[700]"
                          >
                            <img
                              // LockSimpleOpen
                              src={Play}
                              alt="Play"
                              className=" my-auto"
                            />{" "}
                            <span className="my-auto text-[14px] font-[700] ">
                              {" "}
                              Start
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[700] lightgray3 text-[20px]">
                  No Trads
                </span>
              )}
            </>
          )}
        </div>
        {/*  */}
        {Data?.length > 0 && (
          <div className="Pagination">
            <Pagination
              current={currentPage}
              total={totalCount}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              isLoading={Loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
