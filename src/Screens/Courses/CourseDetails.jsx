import { useEffect, useState } from "react";
import axios from "axios";
import { Breadcrumb } from "antd";
import { useParams, useNavigate } from "react-router-dom";

// ///////////////////////   *****************   ///////////////////////
import ProfileImage from "../../assets/Images/ProfileImage.png";
import {
  TimerBlack,
  RowsBlack,
  CrownBlack,
  Rows,
  Play,
  Timer,
  PlayCircleGray,
} from "../../assets/svgs/Followers/FollowersIndex";
import { UserRectangle } from "../../assets/svgs/Provider/ProviderIndex";
import {
  EnvelopeSimple,
  FollowerDetailInvested,
  LinkBreak,
  Paperclip,
  Receipt,
  RocketLaunch,
} from "../../assets/svgs/AdminFollowers/index";
import { blackFire } from "../../assets/svgs";

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
                  {Data?.name}
                </span>
              ),
            },
          ]}
        />
      </div>
      {/* Followers Hub header */}
      <div className="my-4 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="lg:flex justify-between gap-5">
          <div className="">
            <h1 className="satoshi_italic lg:text-[40px] text-[30px] font-[900] black">
              Forex 101 with John
            </h1>
            <p className="lg:text-[16px] text-[14px] font-[500] black max-w-[450px]">
              Forex 101 is the ultimate beginner’s course designed to give you a
              complete understanding of the forex market.
            </p>
          </div>
          <div className="mt-3 lg:mt-0 bg_black flex gap-[30px] rounded-[12px] border-[2.5px] border-[#666666] px-[20px]">
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
        <div className="bg_white rounded-[8px] col-span-12 md:col-span-5 lg:col-span-8 p-4">
          Vedio Play
        </div>
        <div className="bg_white rounded-[8px] col-span-12 md:col-span-3 lg:col-span-4 p-4">
          Vedio List
        </div>
      </div>
      {/* Course Modules */}
      <div className="my-4 bg_white rounded-[8px] p-4">
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
