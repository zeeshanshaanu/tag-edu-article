import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// ///////////////////////   *****************   ///////////////////////
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";
import ProfileImage from "../../assets/Images/ProfileImage.png";
import { Plus } from "../../assets/svgs/Browse/index";
import { MagnifyingGlassWhite, ArrowRight } from "../../assets/svgs/index";
import { OpenModelFtn } from "../../Store/StrategySlice/StrategySlice";
import {
  CalendarBlank,
  ChartLineUp,
  UserActive,
} from "../../assets/svgs/AdminFollowers/index";
import {
  UserDeactive,
  TreeStructure,
} from "../../assets/svgs/Provider/ProviderIndex";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    strategy: "Anjuta",
    Owner: "Jon Homes",
    AccountNo: "43434343",
    Followers: "43434343",
    DateJoined: "Jan 22, 2025",
    Structure: "4,343",
    AUM: "$434,343,434",
  },
];
const Providers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [strategies, setStrategies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this with actual API URL
        const response = await axios.get("https://your-api.com/strategies");
        if (response.status === 200 && Array.isArray(response.data)) {
          setStrategies(response.data);
        } else {
          setStrategies(dummyData);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch data, displaying fallback.");
        setStrategies(dummyData);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="p-3">
      {/* Breadcurm and Tabs */}
      <HeaderTabAndBreadCrumb />
      {/* Followers Hub header */}
      <div className="my-3 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="">
          <h1 className="satoshi_italic lg:text-[40px] text-[30px] font-[900] black">
            Providers
          </h1>
        </div>
        {/*  */}
        <div className="my-auto bg_black rounded-[12px] border-[1px] border-[#666666] p-[20px] mt-4">
          <div className="grid grid:cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3">
            {/* Active */}
            <div className="flex gap-x-[15px] ">
              <div className="lightgreenBoxShahdow lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={UserActive}
                  alt="UserActive"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">Active</p>
                <p className="white text-[20px] font-[700]">434</p>
              </div>
            </div>
            {/* InActive */}
            <div className="flex gap-x-[15px] ">
              <div className="lightgreenBoxShahdow lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={UserDeactive}
                  alt="UserDeactive"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">Inactive</p>
                <p className="white text-[20px] font-[700]">4134</p>
              </div>
            </div>

            {/*New MTD  */}
            <div className="flex gap-x-[15px]">
              <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={ChartLineUp}
                  alt="ChartLineUp"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">New MTD</p>
                <p className="white text-[20px] font-[700]">434</p>
              </div>
            </div>
            {/* Previous Month  */}
            <div className="flex gap-x-[15px]">
              <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={CalendarBlank}
                  alt="CalendarBlank"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">
                  Previous Month{" "}
                </p>
                <p className="white text-[20px] font-[700]"> 343</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Table */}
      <div className="my-3 bg-white rounded-[12px] p-3">
        <div className="flex justify-between">
          <div className="searchBar relative my-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-[180px] sm:w-[280px] border border-[1.5px] border-[#E8E8E8] rounded-[8px] outline-none pl-[15px] pr-[45px] py-[7px]"
            />
            <div className="absolute bg_black top-[4px] sm:left-[243px] left-[143px] w-[32px] h-[32px] rounded-[6px] flex justify-center">
              <img
                src={MagnifyingGlassWhite}
                alt="MagnifyingGlass"
                className="flex justify-center p-[7px]"
              />
            </div>
          </div>
          <div onClick={() => dispatch(OpenModelFtn(true))} className="my-auto">
            <h1 className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] px-[15px] py-[7px] flex gap-2">
              <img src={Plus} alt="Plus" className="" />
              New Strategy{" "}
            </h1>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white rounded-[12px] mt-4 overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
              <tr className=" border-[1px] border-[#f4f4f4]">
                <th className="py-2 px-[15px]">Strategy</th>
                <th className="py-2 px-[15px]">Owner</th>
                <th className="py-2 px-[15px]">Account&nbsp;#</th>
                <th className="py-2 px-[15px]">Followers</th>
                <th className="py-2 px-[15px]">Date&nbsp;Created</th>
                <th className="py-2 px-[15px]">Structure </th>
                <th className="py-2 px-[15px]">AUM</th>
                <th className="py-2 px-[15px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {strategies?.length > 0 ? (
                strategies.map((item, index) => (
                  <tr
                    key={index}
                    className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                  >
                    <td className="py-2 pr-[15px]">
                      <div
                        // onClick={() => navigate("/Followers-Strategy-Detail")}
                        className="flex gap-2"
                      >
                        <img
                          src={ProfileImage}
                          alt="Strategy Icon"
                          className="w-[24px] h-[24px] rounded-full object-cover"
                        />
                        <p className="my-auto">{item.strategy}</p>
                      </div>
                    </td>
                    <td className="py-2 px-[15px]">{item.Owner}</td>
                    <td className="py-2 px-[15px]">{item.AccountNo}</td>
                    <td className="py-2 px-[15px]">{item.Followers}</td>
                    <td className="py-2 px-[15px]">{item.DateJoined}</td>
                    <td className="py-2 px-[15px] flex gap-2">
                      {" "}
                      <img
                        src={TreeStructure}
                        alt="TreeStructure"
                        className=""
                      />
                      {item.Structure}{" "}
                      <img src={ArrowRight} alt="ArrowRight" className="" />
                    </td>
                    <td className="py-2 px-[15px]">{item.AUM}</td>
                    <td className="py-2 px-[15px] flex gap-2">
                      <button
                        onClick={() => navigate("/Provider-Details")}
                        className="w-[90px] bg-white border cursor-pointer border-[#E8E8E8] flex gap-1
                                                  px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100"
                      >
                        Details{" "}
                        <img src={ArrowRight} alt="ArrowRight" className="" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-center text-gray-500" colSpan="9">
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Providers;
