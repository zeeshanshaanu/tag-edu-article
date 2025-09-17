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
import Loader from "../../components/Loader/Loader";
import { HeaderTabsFtn } from "../../Store/HeaderAndBreadCrumbSlice/HeadAndBcSlice";

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
  const [initialLoading, setInitialLoading] = useState(true);
  const [articlesData, setArticlesData] = useState([]);
  const AuthToken = useSelector((state) => state?.Auth);
  const token = AuthToken?.Authtoken;
  const Language = useSelector(
    (state) => state?.HeadAndBreadCrumb?.selectedLanguage
  );

  const loadingDelayRef = useRef(null);
  // Pagination, Search and filtersPaging
  const [Search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [filtersPaging, setFiltersPaging] = useState({ skip: 0, limit: 10 });
  const currentPage = Math.floor(filtersPaging.skip / filtersPaging.limit) + 1;

  useEffect(() => {
    const FetchArticles = async () => {
      if (initialLoading) {
        setInitialLoading(true);
      } else {
        loadingDelayRef.current = setTimeout(() => {
          setLoading(true);
        }, 300);
      }

      try {
        const response = await axios.get(
          `/api/article?page=${currentPage}&limit=${filtersPaging.limit}&category=${Status}&search=${Search}&language=${Language || "EN"}&mode=without-content`,
          // `/api/article?page=${currentPage}&limit=${filtersPaging.limit}&status=${Status}&search=${Search}&language=${Language}&mode=without-content`, {

          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const result = response?.data;
        setArticlesData(result?.data);
        setTotalCount(result?.totalCount || 0);

      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        clearTimeout(loadingDelayRef.current);
        setInitialLoading(false);
        setLoading(false);
      }
    };
    FetchArticles();
    return () => clearTimeout(loadingDelayRef.current);
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
      const response = await axios.get(
        `/api/article-category?language=${Language || "EN"}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCategories(response?.data?.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchArticlesCategory();
  }, [Language]);


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

  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);
  const tabsRefs = useRef([]);

  useEffect(() => {
    if (!categories || categories.length === 0) return;

    const container = containerRef.current;
    if (!container) return;

    let availableWidth = container.offsetWidth - 60; // leave space for dropdown button
    let usedWidth = 0;
    let count = 0;

    for (let i = 0; i < categories.length; i++) {
      const tabWidth = tabsRefs.current[i]?.offsetWidth || 0;
      if (usedWidth + tabWidth <= availableWidth) {
        usedWidth += tabWidth;
        count++;
      } else {
        break;
      }
    }

    setVisibleCount(count);
  }, [categories, Status]);

  return (
    <div className="p-3">
      {/* <HeaderTabs />  whitespace-nowrap */}
      <HeaderTabs />
      {initialLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-3 HeaderGreenBGimage sm:p-[20px] p-[12px] rounded-[12px]">
            <div className="sm:flex justify-between gap-5">
              <h1 className="satoshi_italic lg:text-[40px] text-[20px] font-[900] black">
                Articles
              </h1>
            </div>
          </div>{" "}
          {/*  */}
          <div className="lg:flex justify-between mt-4 gap-10">
            {/* Tabs container */}
            <div className="lg:flex justify-between relative">
              {/* Tabs container (scrollable) */}
              <div className="flex gap-[8px] my-auto max-w-[100%] overflow-x-auto pb-2 sm:pb-0">
                {/* "All" tab */}
                <div
                  className={`min-w-[70px] cursor-pointer flex rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] 
                              hover:bg-[#F9F9F9] transition-colors duration-200 ${Status === "all" ? "bg_white font-[700]" : "bg_lightgray2"
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
                    className={`text-[14px] my-auto ${Status === "all" ? "black" : "gray"
                      }`}
                  >
                    All
                  </span>
                </div>
                <div className="flex gap-[8px]">
                  {categories?.slice(0, 6).map((cat, index) => (
                    <div
                      key={index}
                      className={`w-fit cursor-pointer my-auto flex gap-1 rounded-full lg:rounded-[8px] px-[16px] py-[8px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 ${Status === cat?.category ? "bg_white font-[700]" : "bg_lightgray2"
                        }`}
                      onClick={() => setStatus(cat?.category)}
                    >
                      <img
                        src={
                          cat?.category === "basics" || cat?.category === "Basics"
                            ? LightbulbFilament
                            : cat?.category === "indicators" || cat?.category === "Indicators"
                              ? ChartLineUp
                              : cat?.category === "fundamentals" || cat?.category === "Fundamentals"
                                ? StackSimple
                                : GearSix
                        }
                        alt="Icon"
                        className="w-[25px] h-[20px]"
                      />
                      <span
                        className={`text-[14px] my-auto capitalize whitespace-nowrap ${Status === cat?.category ? "black" : "gray"
                          }`}
                      >
                        {cat?.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {categories?.length > 6 && (
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
                        {categories?.slice(6).map((cat, index) => (
                          <div
                            key={index}
                            className={`cursor-pointer flex gap-2 items-center px-3 py-2 rounded-md hover:bg-[#f5f5f5] transition-colors duration-150 min-w-[160px] ${Status === cat?.category
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
                            <span className="text-[14px] capitalize">{cat?.category}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* Search Input */}
            <div className="relative my-auto sm:mt-2 lg:mt-0 w-full sm:w-[280px]">
              <input type="text"
                placeholder="Search"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
                className="w-full border border-[1.5px] border-[#E8E8E8] bg-white rounded-[8px] outline-none pl-[15px] pr-[45px] py-[7px]" />
              <div className="absolute top-[4px] right-[5px]">
                <img src={MagnifyingGlassWhite} alt="MagnifyingGlass" className="w-[32px] h-[31px] p-[7px] bg_black rounded-[6px]" />
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="bg-white rounded-[12px] sm:p-5 p-3 mt-1">
            <div className="Cards max-h-[100vh] overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
              <>
                {articlesData?.length > 0 ? (
                  articlesData?.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="hover:shadow-lg transition-shadow duration-200 rounded-[8px] border border-[#E8E8E8] flex flex-col"
                      >
                        <div className="w-full aspect-[16/9] overflow-hidden rounded-t-[8px]">
                          <img
                            src={items?.image || ProfileImage}
                            alt=""
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        {/* Detail */}
                        <div className="p-[13px] flex flex-col flex-grow">
                          <div className="flex gap-[12px]">
                            <h1 className="text-[12px] font-[700] rounded-[8px] border border-[#E8E8E8] px-2 py-1 my-auto capitalize">
                              {items?.category}
                            </h1>
                            <p className="text-[12px] font-[500] gray my-auto">
                              {new Date(items?.created_at).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>

                          <h1 className="lg:text-[20px] text-[16px] font-[700] mt-[12px] capitalize">
                            {items?.title}
                          </h1>

                          <div className="mt-[6px]">
                            <p
                              className={`capitalize text-[14px] font-[500] gray ${expandedItems[index] ? "" : "line-clamp-2"
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
                              onClick={() => navigate(`/ArticleDetails/${items?._id}`)}
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
                  <span className="text-center py-10 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
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
                isLoading={initialLoading}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Articles;
