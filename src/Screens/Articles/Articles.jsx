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

import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/TablePagination/Pagination";
import { useRef } from "react";
import { useNavigate } from "react-router";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const Articles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Inside your component
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const [Status, setStatus] = useState("all");
  const [loading, setLoading] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  const AuthToken = useSelector((state) => state?.Auth);
  const Language = useSelector(
    (state) => state?.HeadAndBreadCrumb?.selectedLanguage
  );
 
  const token = AuthToken?.Authtoken;
  const loadingDelayRef = useRef(null);
  // Pagination, Search and filtersPaging
  const [Search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [filtersPaging, setFiltersPaging] = useState({ skip: 0, limit: 10 });
  const currentPage = Math.floor(filtersPaging.skip / filtersPaging.limit) + 1;

  useEffect(() => {
    const FetchArticles = async () => {
      loadingDelayRef.current = setTimeout(() => {
        setLoading(true);
      }, 300);

      try {
        const response = await axios.get(
          `/api/article?page=${currentPage}&limit=${filtersPaging.limit}&category=${Status}&search=${Search}&language=${Language}`,
          // }&category=${Status}&search=${Search}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const result = response?.data;
        // console.log(result);

        setArticlesData(result?.data);
        setTotalCount(result?.totalCount || 0);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        // Clear delay timer and hide loader
        clearTimeout(loadingDelayRef.current);
        setLoading(false);
      }
    };

    FetchArticles();

    return () => {
      // Cleanup in case component unmounts or re-renders quickly
      clearTimeout(loadingDelayRef.current);
    };
  }, [currentPage, Search, Status, filtersPaging.limit, token, Language]);

  const handlePageChange = (newPage) => {
    setFiltersPaging((prev) => ({
      ...prev,
      skip: (newPage - 1) * prev.limit,
    }));
  };

  const [categories, setCategories] = useState([]);
  const FetchArticlesCategory = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/article-category`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response?.data?.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchArticlesCategory();
  }, []);

  const visibleCount = 4;
  const visibleTabs = categories?.slice(0, visibleCount);
  const dropdownTabs = categories?.slice(visibleCount);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [expandedItems, setExpandedItems] = useState({});
  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="p-3">
      {/* <HeaderTabs /> */}
      <HeaderTabs />
      {/* Browse Pro Traders */}
      <div className="mt-3 HeaderGreenBGimage sm:p-[20px] p-[12px] rounded-[12px]">
        <div className="sm:flex justify-between gap-5">
          <h1 className="satoshi_italic lg:text-[40px] text-[20px] font-[900] black">
            Articles
          </h1>
        </div>
      </div>{" "}
      {/* Tabs and Search-input */}
      <div className="lg:flex justify-between mt-4">
        {/* <div className="flex gap-[8px] my-auto max-w-[100%] overflow-x-auto pb-2 sm:pb-0">
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

          <div
            className={`min-w-[90px] cursor-pointer my-auto flex gap-1 rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 
             ${Status === "basics" ? "bg_white font-[700]" : "bg_lightgray2"}
          `}
            onClick={() => setStatus("basics")}
          >
            <img
              src={Status === "all" ? LightbulbFilament : LightbulbFilament}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />

            <span
              className={`text-[14px] my-auto ${
                Status === "basics" ? "black" : "gray"
              }`}
            >
              Basics
            </span>
          </div>

          <div
            className={`min-w-[120px] cursor-pointer my-auto flex gap-1 rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
              Status === "indicators" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setStatus("indicators")}
          >
            {" "}
            <img
              src={Status === "all" ? ChartLineUp : ChartLineUp}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />
            <span
              className={`text-[14px] my-auto ${
                Status === "indicators" ? "black" : "gray"
              }`}
            >
              Indicators
            </span>
          </div>

          <div
            className={`min-w-[140px] cursor-pointer my-auto flex gap-1 rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
              Status === "fundamentals"
                ? "bg_white font-[700]"
                : "bg_lightgray2"
            }`}
            onClick={() => setStatus("fundamentals")}
          >
            <img
              src={Status === "all" ? StackSimple : StackSimple}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />
            <span
              className={`text-[14px] my-auto ${
                Status === "fundamentals" ? "black" : "gray"
              }`}
            >
              Fundamentals
            </span>
          </div>

          <div
            className={`min-w-[130px] cursor-pointer my-auto flex gap-1 rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
              Status === "technicals" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
            onClick={() => setStatus("technicals")}
          >
            <img
              src={Status === "all" ? GearSix : GearSix}
              alt="MagnifyingGlassBlack"
              className="w-[25px] h-[20px]"
            />
            <span
              className={`text-[14px] my-auto ${
                Status === "technicals" ? "black" : "gray"
              }`}
            >
              Technicals
            </span>
          </div>
        </div> */}

        {categories?.length > 0 ? (
          <div className="lg:flex justify-between relative">
            {/* Tabs container (scrollable) */}
            <div className="flex gap-[8px] my-auto max-w-[100%] overflow-x-auto pb-2 sm:pb-0">
              {/* "All" tab */}
              <div
                className={`min-w-[70px] cursor-pointer flex rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] 
          hover:bg-[#F9F9F9] transition-colors duration-200 ${
            Status === "all" ? "bg_white font-[700]" : "bg_lightgray2"
          }`}
                onClick={() => setStatus("all")}
              >
                <span className="my-auto">
                  <img
                    src={CirclesThreeColored}
                    alt="All"
                    className="w-[25px] h-[20px]"
                  />
                </span>
                <span
                  className={`text-[14px] my-auto ${
                    Status === "all" ? "black" : "gray"
                  }`}
                >
                  All
                </span>
              </div>

              {/* First 4 visible tabs */}
              {categories?.slice(0, 4).map((cat, index) => (
                <div
                  key={index}
                  className={`w-fit cursor-pointer my-auto flex gap-1 rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 ${
              Status === cat?.category ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
                  onClick={() => setStatus(cat?.category)}
                >
                  <img
                    src={
                      cat?.category === "basics"
                        ? LightbulbFilament
                        : cat?.category === "indicators"
                        ? ChartLineUp
                        : cat?.category === "fundamentals"
                        ? StackSimple
                        : GearSix
                    }
                    alt="Icon"
                    className="w-[25px] h-[20px]"
                  />
                  <span
                    className={`text-[14px] my-auto capitalize ${
                      Status === cat?.category ? "black" : "gray"
                    }`}
                  >
                    {cat?.category}
                  </span>
                </div>
              ))}
            </div>

            {categories?.length > 4 && (
              <div ref={dropdownRef} className="relative ml-2">
                {/* Dropdown button */}
                <div
                  className="w-fit mt-[2px] cursor-pointer flex gap-1 rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] bg_lightgray2 hover:bg-[#F9F9F9] transition-colors duration-200"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  <span className="text-[14px] my-auto gray">More</span>
                  <svg
                    className="w-4 h-4 my-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Dropdown content (conditionally rendered) */}
                {showDropdown && (
                  <div className="absolute z-50 flex flex-col top-full left-0 mt-2 bg-white rounded-lg shadow-md p-2 min-w-[160px] max-h-[250px] overflow-y-auto">
                    {categories?.slice(4).map((cat, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer flex gap-2 items-center px-3 py-2 rounded-md hover:bg-[#f5f5f5] transition-colors duration-150 ${
                          Status === cat?.category
                            ? "bg_lightgray2 font-[700]"
                            : ""
                        }`}
                        onClick={() => {
                          setStatus(cat?.category);
                          setShowDropdown(false); // close on selection
                        }}
                      >
                        <img
                          src={
                            cat?.category === "basics"
                              ? LightbulbFilament
                              : cat?.category === "Indicators"
                              ? ChartLineUp
                              : cat?.category === "Fundamentals"
                              ? StackSimple
                              : GearSix
                          }
                          alt="Icon"
                          className="w-[20px] h-[18px]"
                        />
                        <span className="text-[14px]">{cat?.category}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}

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
            <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[700] black text-[20px]">
              Loading...
            </span>
          ) : (
          )} */}
          <>
            {articlesData?.length > 0 ? (
              articlesData?.map((items, index) => {
                return (
                  <div
                    // onClick={() => navigate(`/ArticleDetails/${items?._id}`)}
                    key={index}
                    className="cursor-pointer hover:shadow-lg transition-shadow duration-200 rounded-[8px] border-[1px] border-[#E8E8E8]"
                  >
                    <div
                      className=""
                      style={{
                        backgroundImage: `url(${items?.image || ProfileImage})`,
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
                      <div className="flex gap-[12px]">
                        <h1 className="text-[12px] font-[700] rounded-[8px] border-[1px] border-[#E8E8E8] px-2 py-1 my-auto capitalize">
                          {items?.category}
                        </h1>
                        <p className="text-[12px] font-[500] gray my-auto">
                          {new Date(items?.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      {/*  */}
                      <h1 className="lg:text-[20px] text-[16px] font-[700] mt-[12px]">
                        {items?.title}{" "}
                      </h1>
                      {/* <p className="mt-[6px] text-[14px] font-[500] gray line-clamp-2">
                        {items?.preview_text}
                      </p> */}
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
                      {/* Button Always at Bottom */}
                      <div className="mt-auto pt-4">
                        <button
                          onClick={() =>
                            navigate(`/ArticleDetails/${items?._id}`)
                          }
                          className="flex justify-center gap-1 cursor-pointer bg-black w-full text-center py-2 px-5 rounded-[8px] text-white text-[14px] font-[700]"
                        >
                          <span className="my-auto">View Article</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[600] lightgray3 text-[16px]">
                No Article Found
              </span>
            )}
          </>
        </div>
        {/*  */}
        {articlesData?.length > 0 && (
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

export default Articles;
