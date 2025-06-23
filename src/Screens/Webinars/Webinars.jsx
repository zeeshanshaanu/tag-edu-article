import { useEffect, useState } from "react";
import axios from "axios";
// ///////////////////////   *****************   ///////////////////////
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";
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

import { useDispatch } from "react-redux";
import Pagination from "../../components/TablePagination/Pagination";
import { useNavigate } from "react-router-dom";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const Webinars = () => {
  const [showBG, setshowBG] = useState("upcoming");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Data, setData] = useState({});
  const [Loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // or whatever you want
  const [totalCount, setTotalCount] = useState(0);
  const [Search, setSearch] = useState("");

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/follower-hub/strategies`,
        {
          params: {
            page: currentPage,
            size: pageSize,
            search: Search,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${`Token`}`,
          },
        }
      );
      console.log(response?.data);

      setData(response?.data || []);
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
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-3">
      <HeaderTabAndBreadCrumb />
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
              showBG === "upcoming" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setshowBG("upcoming")}
          >
            <span className="my-auto">
              <img
                src={
                  showBG === "upcoming" ? CalendarColored : CalendarUpcomingGray
                }
                alt="MagnifyingGlassBlack"
                className="w-[25px] h-[20px]"
              />
            </span>
            <span
              className={` my-auto text-[14px] my-auto ${
                showBG === "upcoming" ? "black" : "gray"
              }`}
            >
              Upcoming
            </span>
          </div>
          {/*  */}
          <div
            className={`min-w-[70px] rounded-full lg:rounded-[8px] cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 
             ${showBG === "past" ? "bg_white font-[700]" : "bg_lightgray2"}
          `}
            onClick={() => setshowBG("past")}
          >
            <img
              src={showBG === "past" ? ClockCounterColored : ClockCounterGray}
              alt="MagnifyingGlassBlack"
              className="w-[20px] h-[20px]"
            />

            <span
              className={`text-[14px] my-auto ${
                showBG === "past" ? "black" : "gray"
              }`}
            >
              Past
            </span>
          </div>
        </div>
        {/*  */}
        {/* <div className="flex justify-between searchBar relative my-auto">
          <input
            type="text"
            placeholder="Search"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
            className="w-[180px] sm:w-[280px] border border-[1.5px] border-[#E8E8E8] bg-white rounded-[8px] outline-none pl-[15px] pr-[45px] py-[7px]"
          />
          <div className="absolute bg_black top-[4px] sm:left-[243px] left-[143px] w-[32px] h-[32px] rounded-[6px] flex justify-center">
            <img
              src={MagnifyingGlassWhite}
              alt="MagnifyingGlass"
              className="flex justify-center p-[7px]"
            />
          </div>
        </div> */}
      </div>
      {/* Cards */}
      <div className="bg-white rounded-[12px] sm:p-5 p-3 mt-1">
        <div className="Cards max-h-[100vh] overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[15px]">
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
                      className="rounded-[8px] border-[2px] border-[#E8E8E8]"
                    >
                      <div
                        className=""
                        style={{
                          backgroundImage: `url(${
                            items?.logo_url || ProfileImage
                          })`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "100%",
                          height: "200px",
                          borderTopLeftRadius: "8px",
                          borderTopRightRadius: "8px",
                        }}
                      ></div>
                      {/* Detail */}
                      <div className="p-[13px]">
                        {/* <div className="flex gap-[10px]">
                          <h1 className="text-[12px] font-[700] rounded-[8px] border-[2px] border-[#E8E8E8] px-2 py-1 my-auto">
                            {items?.account_type}
                          </h1>
                          <h1 className="bg_lightgreen flex gap-[2px] text-[12px] font-[700] rounded-[8px] px-2 py-1 my-auto">
                            <img
                              src={CrownBlack}
                              alt="MagnifyingGlassBlack"
                              className="w-[20px] h-[20px] my-auto"
                            />{" "}
                            <span className="my-auto">past</span>
                          </h1>
                          <p className="text-[12px] font-[500] gray my-auto">
                            Deposit $500 to unlock past
                          </p>
                        </div> */}
                        {/*  */}
                        <h1 className="lg:text-[20px] text-[16px] font-[700] ">
                          Getting Started with Copy Trading: A Beginner’s
                          Roadmap
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
                                src={CalendarGray}
                                alt="CalendarGray"
                                className=" my-auto"
                              />{" "}
                              <span className="my-auto">August 29, 2025</span>
                            </p>
                          </div>
                          {showBG === "upcoming" && (
                            <div className="my-auto">
                              <p className="flex gap-1 text-[14px] font-[500] gray">
                                <img
                                  src={Timer}
                                  alt="Timer"
                                  className=" my-auto"
                                />{" "}
                                <span className="my-auto">6:00 PM UTC</span>
                              </p>
                            </div>
                          )}
                        </div>
                        {/*  */}
                        {showBG === "past" ? (
                          <div className="mt-4">
                            <button
                              // onClick={() =>
                              //   navigate(`/CourseDetails/${items?.id}`)
                              // }
                              className="flex justify-center gap-1 cursor-pointer bg-white black border border-[#E8E8E8]
                             w-full text-center py-2 px-5 rounded-[8px] text-[14px] font-[700]"
                            >
                              <img
                                // PlayCircleBlack
                                src={PlayCircleBlack}
                                alt="PlayCircleBlack"
                                className=" my-auto"
                              />{" "}
                              <span className="my-auto text-[14px] font-[700] ">
                                {" "}
                                Watch Recording
                              </span>
                            </button>
                          </div>
                        ) : (
                          <div className="mt-4">
                            <button
                              // onClick={() =>
                              //   navigate(`/CourseDetails/${items?.id}`)
                              // }
                              className="flex justify-center gap-1 cursor-pointer bg-black w-full text-center py-2 px-5 rounded-[8px] text-white text-[14px] font-[700]"
                            >
                              <img
                                // LockSimpleOpen
                                src={NotePencilWhite}
                                alt="NotePencilWhite"
                                className=" my-auto"
                              />{" "}
                              <span className="my-auto text-[14px] font-[700] ">
                                {" "}
                                Register
                              </span>
                            </button>
                          </div>
                        )}
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

export default Webinars;
