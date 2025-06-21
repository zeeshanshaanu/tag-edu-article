import { useEffect, useState } from "react";
import axios from "axios";
// ///////////////////////   *****************   ///////////////////////
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";
import ProfileImage from "../../assets/Images/ProfileImage.png";

import {
  CirclesThreeColored,
  LightbulbFilament,
  StackSimple,
} from "../../assets/svgs/Browse/index";
import {
  ChartLineUp,
  GearSix,
} from "../../assets/svgs/Followers/FollowersIndex";
import { MagnifyingGlassWhite } from "../../assets/svgs/index";

import { useDispatch } from "react-redux";
import Pagination from "../../components/TablePagination/Pagination";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const Browse = () => {
  const [showBG, setshowBG] = useState("all");
  const dispatch = useDispatch();
  const [Data, setData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [ChartData, setChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // or whatever you want
  const [totalCount, setTotalCount] = useState(0);
  const [Search, setSearch] = useState("");

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/traders`,
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

      setData(response?.data?.items || []);
      setChartData(response?.data?.items?.[0] || []);
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
  }, [currentPage, pageSize, Search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-3">
      <HeaderTabAndBreadCrumb />
      {/* Browse Pro Traders */}
      <div className="mt-3 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="sm:flex justify-between gap-5">
          <h1 className="satoshi_italic lg:text-[40px] text-[30px] font-[900] black">
            Articles
          </h1>
        </div>
      </div>{" "}
      {/* Tabs and Search-input */}
      <div className="flex justify-between mt-4">
        <div className="sm:flex gap-[8px] max-w-[100%] overflow-auto my-auto">
          <div
            className={`cursor-pointer flex rounded-[8px] px-[16px] py-[6px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 ${
              showBG === "all" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setshowBG("all")}
          >
            <span className="my-auto">
              <img
                src={
                  showBG === "all" ? CirclesThreeColored : CirclesThreeColored
                }
                alt="MagnifyingGlassBlack"
                className="w-[25px] h-[20px]"
              />
            </span>
            <span
              className={` my-auto text-[14px] my-auto ${
                showBG === "all" ? "black" : "gray"
              }`}
            >
              All
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[6px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 
             ${showBG === "basics" ? "bg_white font-[700]" : "bg_lightgray2"}
          `}
            onClick={() => setshowBG("basics")}
          >
            <img
              src={showBG === "all" ? LightbulbFilament : LightbulbFilament}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />

            <span
              className={`text-[14px] my-auto ${
                showBG === "basics" ? "black" : "gray"
              }`}
            >
              Basics
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[6px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
              showBG === "indicators" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setshowBG("indicators")}
          >
            {" "}
            <img
              src={showBG === "all" ? ChartLineUp : ChartLineUp}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />
            <span
              className={`text-[14px] my-auto ${
                showBG === "indicators" ? "black" : "gray"
              }`}
            >
              Indicators
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[6px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
              showBG === "fundamentals"
                ? "bg_white font-[700]"
                : "bg_lightgray2"
            }`}
            onClick={() => setshowBG("fundamentals")}
          >
            <img
              src={showBG === "all" ? StackSimple : StackSimple}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />
            <span
              className={`text-[14px] my-auto ${
                showBG === "fundamentals" ? "black" : "gray"
              }`}
            >
              Fundamentals
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[6px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
              showBG === "technicals" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setshowBG("technicals")}
          >
            <img
              src={showBG === "all" ? GearSix : GearSix}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />
            <span
              className={`text-[14px] my-auto ${
                showBG === "technicals" ? "black" : "gray"
              }`}
            >
              Technicals
            </span>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between searchBar relative my-auto">
          <input
            type="text"
            placeholder="Search"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
            className="w-[180px] sm:w-[280px] border border-[1.5px] border-[#E8E8E8] bg-white rounded-[8px] outline-none pl-[15px] pr-[45px] py-[6px]"
          />
          <div className="absolute bg_black top-[3px] sm:left-[243px] left-[143px] w-[32px] h-[31px] rounded-[6px] flex justify-center">
            <img
              src={MagnifyingGlassWhite}
              alt="MagnifyingGlass"
              className="flex justify-center p-[7px]"
            />
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="bg-white rounded-[12px] p-5 mt-1">
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
                            items?.image || ProfileImage
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
                        <div className="flex gap-[20px]">
                          <h1 className="text-[12px] font-[700] rounded-[8px] border-[2px] border-[#E8E8E8] px-2 py-1 my-auto">
                            Indicators
                          </h1>
                          <p className="text-[12px] font-[500] gray my-auto">
                            May 16, 2025
                          </p>
                        </div>
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

export default Browse;
