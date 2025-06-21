import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// ///////////////////////   *****************   ///////////////////////
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";
import { CoinBlack } from "../../assets/svgs/Followers/FollowersIndex";
import { Plus } from "../../assets/svgs/Browse/index";
import { MagnifyingGlassWhite, ArrowRight } from "../../assets/svgs/index";
import { OpenModelFtn } from "../../Store/StrategySlice/StrategySlice";
import ProfileImage from "../../assets/Images/ProfileImage.png";
import {
  CalendarBlank,
  ChartLineUp,
  UserActive,
} from "../../assets/svgs/AdminFollowers/index";
import CreateFollower from "./CreateFollower";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    name: "XAU ELITE 1",
    cid: "Jon Homes",
    strategy: "Anjuta",
    AccountSlave: "43434343",
    DateJoined: "Jan 22, 2025",
    Invested: "$434,343,434",
    Balance: "$434,343",
    pnl: "+$34,343 (43%)",
  },
  {
    name: "XAU ELITE 1",
    cid: "Jon Homes",
    strategy: "Anjuta",
    AccountSlave: "43434343",
    DateJoined: "Jan 22, 2025",
    Invested: "$434,343,434",
    Balance: "$434,343",
    pnl: "+$34,343 (43%)",
  },
  {
    name: "XAU ELITE 1",
    cid: "Jon Homes",
    strategy: "Anjuta",
    AccountSlave: "43434343",
    DateJoined: "Jan 22, 2025",
    Invested: "$434,343,434",
    Balance: "$434,343",
    pnl: "+$34,343 (43%)",
  },
];
const Followers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data, setData] = useState({});
  const [TableData, setTableData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const FollowerStrategyData = async () => {
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
  useEffect(() => {
    FollowerStrategyData();
  }, []);

  const FollowerTable = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/follower-hub/strategies`, {
        headers: {
          Authorization: `Bearer ${`Token`}`,
        },
      });
      console.log(" Response Tables:", response?.data);

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
        setTableData(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FollowerTable();
  }, []);
  //  ///////////////////////////////////////////////////////////////
  return (
    <div className="p-3">
      {/* Breadcurm and Tabs */}
      <HeaderTabAndBreadCrumb />
      {/* Followers Hub header */}
      <div className="my-3 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="">
          <h1 className="satoshi_italic lg:text-[40px] text-[30px] font-[900] black">
            Followers
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
                <p className="white text-[20px] font-[700]">
                  {Data?.active_user || 0}
                </p>
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
                <p className="white text-[20px] font-[700]">
                  {Data?.new_mtd || 0}
                </p>
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
                <p className="white text-[20px] font-[700]">
                  {" "}
                  {Data?.prev_month || 0}
                </p>
              </div>
            </div>
            {/* Total AUM  */}
            <div className="flex gap-x-[15px]">
              <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                <img
                  src={CoinBlack}
                  alt="CoinBlack"
                  className="item-center mt-3 w-[24px] h-[24px]"
                />
              </div>
              <div className="lightgray my-auto">
                <p className="lightgray text-[14px] font-[500]">Total AUM</p>
                <p className="white text-[20px] font-[700] max-w-[150px] overflow-hidden text-ellipsis">
                  {Data?.total_aum || 0}
                </p>
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
            <button className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] px-[15px] py-[7px] flex gap-2">
              <img src={Plus} alt="Plus" className="" />
              Create{" "}
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white rounded-[12px] mt-4 overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
              <tr className=" border-[1px] border-[#f4f4f4]">
                <th className="py-2 px-[15px]">Name</th>
                <th className="py-2 px-[15px]">CID</th>
                <th className="py-2 px-[15px]">Strategy</th>
                <th className="py-2 px-[15px]">Account&nbsp;#&nbsp;Slave</th>
                <th className="py-2 px-[15px]">Date&nbsp;Joined</th>
                <th className="py-2 px-[15px]">Invested</th>
                <th className="py-2 px-[15px]">Balance </th>
                <th className="py-2 px-[15px]">PnL </th>
                <th className="py-2 px-[15px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {TableData?.length > 0 ? (
                TableData.map((item, index) => (
                  <tr
                    key={index}
                    className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                  >
                    <td className="py-2 px-[15px]">{item.name}</td>
                    <td className="py-2 px-[15px]">{item.cid}</td>
                    <td className="py-2 pr-[15px]">
                      <div
                        // onClick={() => navigate("/Followers-Strategy-Detail")}
                        className="flex gap-2"
                      >
                        <img
                          src={item?.logo_url || ProfileImage}
                          alt="Strategy Icon"
                          className="w-[29px] h-[29px] rounded-full object-cover border-[2px] border-[#E8E8E8]"
                        />
                        <p className="my-auto">{item.name}</p>
                      </div>
                    </td>
                    <td className="py-2 px-[15px]">{item.account_type}</td>
                    <td className="py-2 px-[15px]">{item.date}</td>
                    <td className="py-2 px-[15px] max-w-[100px] overflow-hidden text-ellipsis ">
                      {item.invested}
                    </td>
                    <td className="py-2 px-[15px] max-w-[100px] overflow-hidden text-ellipsis ">
                      {item.balance}
                    </td>
                    <td className="py-2 px-[15px] max-w-[100px] overflow-hidden text-ellipsis  green">
                      {item.pnl}
                    </td>
                    <td className="py-2 px-[15px] flex gap-2">
                      <button
                        onClick={() => navigate(`/Follower-Details/${item.id}`)}
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
      <CreateFollower />
    </div>
  );
};

export default Followers;
