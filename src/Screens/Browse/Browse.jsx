import { useEffect, useState } from "react";
import axios from "axios";
// ///////////////////////   *****************   ///////////////////////
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";
import ProfileImage from "../../assets/Images/ProfileImage.png";
import {
  AdminBrowseFollowersUsers,
  AdminBrowseStrategies,
  Plus,
  TotalPerformanceFees,
} from "../../assets/svgs/Browse/index";
import { OpenModelFtn } from "../../Store/StrategySlice/StrategySlice";
import { useDispatch } from "react-redux";
import NewStrategyModel from "./NewStrategyModel";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    Name: "Anjuta",
    Balance: "1,586",
  },
  {
    Name: "Anjuta",
    Balance: "1,586",
  },
  {
    Name: "Anjuta",
    Balance: "1,586",
  },
];

const Browse = () => {
  const dispatch = useDispatch();
  const [strategies, setStrategies] = useState([]);
  const [Data, setData] = useState({});
  const [TableData, setTableData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const DashboardCardData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/follower-hub/summary`, {
        headers: {
          Authorization: `Bearer ${`Token`}`,
        },
      });
      console.log(" Response:", response?.data);

      setData(response?.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Check for 401 Unauthorized
      if (
        error.response?.data?.detail === "Token has expired" ||
        error.response?.data?.detail === "Unauthorized"
      ) {
        console.log(error);
      } else {
        Data(null);
      }
    } finally {
      setLoading(false);
    }
  };
  //
  const DashboardTablesData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/follower-hub/strategies`, {
        headers: {
          Authorization: `Bearer ${`Token`}`,
        },
      });
      console.log(" Response:", response?.data);

      setTableData(response?.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Check for 401 Unauthorized
      if (
        error.response?.data?.detail === "Token has expired" ||
        error.response?.data?.detail === "Unauthorized"
      ) {
        console.log(error);
      } else {
        Data(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    DashboardCardData();
    DashboardTablesData();
  }, []);

  return (
    <div className="p-3">
      <HeaderTabAndBreadCrumb />
      {/* Browse Pro Traders */}
      <div className="mt-3 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="sm:flex justify-between gap-5">
          <h1 className="satoshi_italic lg:text-[40px] text-[30px] font-[900] black">
            Admin Dashboard
          </h1>
          <div className="my-auto flex gap-3">
            <button
              onClick={() => dispatch(OpenModelFtn(true))}
              className="text-[14px] font-[700] cursor-pointer border border-[1px] bg_white border-[#E8E8E8]
                          rounded-[8px] px-[15px] py-[7px] flex gap-2"
            >
              <img src={Plus} alt="Plus" className="" />
              New Strategy
            </button>
            <button
              onClick={() => dispatch(OpenModelFtn(true))}
              className="text-[14px] font-[700] cursor-pointer boder border-[1px] bg_white border-[#E8E8E8]
                          rounded-[8px] px-[15px] py-[7px] flex gap-2"
            >
              <img src={Plus} alt="Plus" className="" /> New Follower
            </button>
          </div>
        </div>
        {/*  */}
        <div className="my-auto bg_black rounded-[12px] border-[1px] border-[#666666] p-[20px] mt-4">
          <div className="grid grid:cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3">
            {/* Strategies */}
            <div className="flex gap-x-[15px]">
              <div className="lightgreenBoxShahdow lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={AdminBrowseStrategies}
                  alt="AdminBrowseStrategies"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">Strategies</p>
                <p className="white text-[20px] font-[700] max-w-[150px] overflow-hidden text-ellipsis">
                  {Data?.strategy || 0}
                </p>
              </div>
            </div>
            {/* Total ROI  */}
            <div className="flex gap-x-[15px]">
              <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={AdminBrowseFollowersUsers}
                  alt="AdminBrowseFollowersUsers"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">Followers </p>
                <p className="white text-[20px] font-[700] max-w-[150px] overflow-hidden text-ellipsis">
                  {" "}
                  {Data?.follower || 0}
                </p>
              </div>
            </div>
            {/* Total PnL  */}
            <div className="flex gap-x-[15px]">
              <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={TotalPerformanceFees}
                  alt="TotalPerformanceFees"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">
                  Total Performance Fees
                </p>
                <p className="white text-[20px] font-[700] max-w-[150px] overflow-hidden text-ellipsis">
                  {" "}
                  {Data?.total_balance || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*  */}
      <div className="mt-3 grid grid:cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
        {/* Most Popular Strategies */}
        <div className="bg-white p-[15px] rounded-[8px]">
          <h1 className="pb-2 text-[20px] font-[700] black">
            Most Popular Strategies
          </h1>{" "}
          <div className=" overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
                <tr className="">
                  <th className="py-2 px-[15px]">Strategy</th>
                  <th className="py-2 px-[15px]">Followers</th>
                </tr>
              </thead>
              {Loading ? (
                <tr>
                  <td
                    className="pt-8 text-center font-[700] lightgray3 text-[16px]"
                    colSpan="9"
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                <tbody>
                  {TableData?.length > 0 ? (
                    TableData.map((item, index) => (
                      <tr
                        key={index}
                        className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                      >
                        <td className="py-2 pr-[15px]">
                          <div
                            onClick={() =>
                              navigate("/Followers-Strategy-Detail")
                            }
                            className="flex gap-2"
                          >
                            <img
                              src={item?.logo_url || ProfileImage}
                              alt="Strategy Icon"
                              className="w-[28px] h-[28px] rounded-full object-cover border-[2px] border-[#E8E8E8]"
                            />
                            <p className="my-auto">{item.name}</p>
                          </div>
                        </td>
                        <td className="py-2 px-[15px]">{item.invested}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="py-10 text-center font-[700] lightgray3 text-[16px]"
                        colSpan="9"
                      >
                        No data found.
                      </td>
                    </tr>
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
        {/* Most Paid Providers */}
        <div className="bg-white p-[15px] rounded-[8px]">
          <h1 className="pb-2 text-[20px] font-[700] black">
            Most Paid Providers
          </h1>{" "}
          <div className=" overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
                <tr className="">
                  <th className="py-2 px-[15px]">Provider</th>
                  <th className="py-2 px-[15px]">Paid</th>
                </tr>
              </thead>
              {Loading ? (
                <tr>
                  <td
                    className="pt-8 text-center font-[700] lightgray3 text-[16px]"
                    colSpan="9"
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                <tbody>
                  {TableData?.length > 0 ? (
                    TableData.map((item, index) => (
                      <tr
                        key={index}
                        className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                      >
                        <td className="py-2 pr-[15px]">
                          <div
                            onClick={() =>
                              navigate("/Followers-Strategy-Detail")
                            }
                            className="flex gap-2"
                          >
                            <img
                              src={item?.logo_url || ProfileImage}
                              alt="Strategy Icon"
                              className="w-[28px] h-[28px] rounded-full object-cover border-[2px] border-[#E8E8E8]"
                            />
                            <p className="my-auto">{item.name}</p>
                          </div>
                        </td>
                        <td className="py-2 px-[15px]">{item.invested}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="pt-8 text-center font-[700] lightgray3 text-[16px]"
                        colSpan="9"
                      >
                        No data found.
                      </td>
                    </tr>
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
        {/* Most Paid Recruiters */}
        <div className="bg-white p-[15px] rounded-[8px]">
          <h1 className="pb-2 text-[20px] font-[700] black">
            Most Paid Recruiters
          </h1>{" "}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
                <tr className="">
                  <th className="py-2 px-[15px]">Recruiter</th>
                  <th className="py-2 px-[15px]">Paid</th>
                </tr>
              </thead>
              {Loading ? (
                <tr>
                  <td
                    className="pt-8 text-center font-[700] lightgray3 text-[16px]"
                    colSpan="9"
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                <tbody>
                  {TableData?.length > 0 ? (
                    TableData.map((item, index) => (
                      <tr
                        key={index}
                        className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                      >
                        <td className="py-2 pr-[15px]">
                          <div
                            onClick={() =>
                              navigate("/Followers-Strategy-Detail")
                            }
                            className="flex gap-2"
                          >
                            <img
                              src={item?.logo_url || ProfileImage}
                              alt="Strategy Icon"
                              className="w-[28px] h-[28px] rounded-full object-cover border-[2px] border-[#E8E8E8]"
                            />
                            <p className="my-auto">{item.name}</p>
                          </div>
                        </td>
                        <td className="py-2 px-[15px]">{item.invested}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="pt-8 text-center font-[700] lightgray3 text-[16px]"
                        colSpan="9"
                      >
                        No data found.
                      </td>
                    </tr>
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <NewStrategyModel />
    </div>
  );
};

export default Browse;
