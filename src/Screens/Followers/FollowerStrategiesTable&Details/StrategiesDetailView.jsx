import { useEffect, useState } from "react";
import HeaderTabs from "../../../components/HeaderTabs/HeaderTabs";
import { Breadcrumb, Progress } from "antd";

import { Users } from "../../../assets/svgs";
import {
  Coin,
  ShareNetwork,
  TotalBlce,
  TotalPnl,
  TotalRoi,
  UnrealizedPnL,
  Star,
} from "../../../assets/svgs/Followers/FollowersIndex";
import ProfileImage from "../../../assets/Images/ProfileImage.png";
import CopyImage from "../../../assets/svgs/Followers/CopyImage.png";
import { ArrowRight } from "../../../assets/svgs/index";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDispatch } from "react-redux";
import { OpenModelFtn } from "../../../Store/StrategySlice/StrategySlice";
import axios from "axios";
import CopyTradeModel from "./CopyTradeModel";
import HeaderTabAndBreadCrumb from "../../../components/HeaderTabs/HeaderTabAndBreadCrumb";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const data = [
  {
    name: "05/01",
    uv: 4000,
    pv: 2400,
    cv: 4400,
    amt: 2400,
  },
  {
    name: "05/03",
    uv: 3000,
    pv: 1398,
    cv: 4100,

    amt: 2210,
  },
  {
    name: "05/05",
    uv: 2000,
    pv: 9800,
    cv: 2400,

    amt: 2290,
  },
  {
    name: "05/07",
    uv: 2780,
    pv: 3908,
    cv: 4900,

    amt: 2000,
  },
  {
    name: "05/09",
    uv: 1890,
    pv: 4800,
    cv: 1400,

    amt: 2181,
  },
  {
    name: "05/11",
    uv: 2390,
    pv: 3800,
    cv: 4700,

    amt: 2500,
  },
  {
    name: "05/07",
    uv: 3490,
    pv: 4300,
    cv: 9400,

    amt: 2100,
  },
];

const dummyData = [
  {
    name: "Anjuta",
    roi: "+434%",
    age: "234 Days",
    max_dd: "Long",
  },
  {
    name: "Anjuta",
    roi: "-434%",
    age: "234 Days",
    max_dd: "Long",
  },
  {
    name: "Anjuta",
    roi: "+434%",
    age: "234 Days",
    max_dd: "Long",
  },
];
const StrategiesDetailView = () => {
  const dispatch = useDispatch();
  const [Strategies, setStrategies] = useState("graph");
  const [strategiesData, setStrategiesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this with actual API URL
        const response = await axios.get("https://your-api.com/strategies");
        if (response.status === 200 && Array.isArray(response.data)) {
          setStrategiesData(response.data);
        } else {
          setStrategiesData(dummyData);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch data, displaying fallback.");
        setStrategiesData(dummyData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-3">
      <HeaderTabAndBreadCrumb />
      {/* Followers Hub header */}
      <div className="my-2">
        <div className="bg_white p-[15px] rounded-[12px]">
          <div className="flex justify-between gap-5">
            {/*  */}
            <div className="my-auto flex gap-3">
              <div className="my-auto">
                <img
                  src={ProfileImage}
                  alt="Strategy Icon"
                  className="w-[48px] h-[48px] rounded-full object-cover"
                />
              </div>
              <h1 className="text-[30px] font-[700] black my-auto">Anjuta</h1>
            </div>
            {/*  */}
            <div className="my-auto flex gap-2">
              <button
                className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-1"
              >
                <img src={Star} alt="Star" className="" />
              </button>
              <button
                onClick={() => dispatch(OpenModelFtn(true))}
                className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-1"
              >
                <img src={CopyImage} alt="CopyImage" className="" />
                Copy
              </button>
            </div>
          </div>
          {/*  */}
          <div className="my-auto bg_black rounded-[12px] border-[2.5px] border-[#666666] p-[15px] mt-5">
            <div className="grid grid:cols-1 lg:grid-cols-5 md:grid-cols-3 gap-3">
              <div className="w-full my-auto flex justify-start">
                <div className="lightgray my-auto leading-6">
                  <p className="white text-[16px] font-[500] flex gap-1 ">
                    <img src={Coin} alt="Coin" className="" />
                    AUM $1,323,343.23
                  </p>
                  <p className="white text-[16px] font-[500] flex gap-1 ">
                    {" "}
                    <img src={ShareNetwork} alt="ShareNetwork" className="" />
                    Sharing 10%
                  </p>
                </div>
              </div>
              {/* Followers */}
              <div className="flex gap-x-[16px] flex lg:justify-end ">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalBlce}
                    alt="TotalBlce"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Followers</p>
                  <p className="white text-[20px] font-[700]">34</p>
                </div>
              </div>
              {/* Trading Days  */}
              <div className="flex gap-x-[16px] flex lg:justify-end">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalRoi}
                    alt="TotalRoi"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Trading Days{" "}
                  </p>
                  <p className="white text-[20px] font-[700]">50</p>
                </div>
              </div>
              {/* Performance Fee  */}
              <div className="flex gap-x-[16px] flex lg:justify-end">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalPnl}
                    alt="TotalPnl"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Performance Fee{" "}
                  </p>
                  <p className="white text-[20px] font-[700]">50%</p>
                </div>
              </div>
              {/*Min Investment  */}
              <div className="flex gap-x-[16px] flex lg:justify-end">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={UnrealizedPnL}
                    alt="UnrealizedPnL"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Min Investment
                  </p>
                  <p className="white text-[20px] font-[700]">$10000</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      {/*  */}
      <div className="my-4">
        <div className="grid grid:cols-1 lg:grid-cols-8 md:grid-cols-3 gap-4">
          {/* // ///////////////////////   *****************   /////////////////////// */}
          <div className="col-span-8 md:col-span-8 lg:col-span-2">
            <div className="bg_white rounded-[8px] p-4">
              <div className="flex justify-between gap-5">
                <div className="my-auto">
                  <h1 className="text-[20px] font-[700] black">Performance</h1>
                </div>
                <div className="my-auto">
                  <select
                    required
                    placeholder="All Strategies"
                    className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[10px] py-[7px]"
                    // value={formvalue.StrategyType}
                    // onChange={(e) =>
                    //   setformvalue({ ...formvalue, StrategyType: e.target.value })
                    // }
                  >
                    <option value="" disabled>
                      Select Days
                    </option>
                    <option value={12}>7 Days</option>
                    <option value={12}>15 Days</option>
                    <option value={12}>1 Month</option>
                    <option value={12}>3 Month</option>
                    <option value={12}>6 Month</option>
                  </select>
                </div>
              </div>
              <hr className="mt-4" style={{ color: "#E8E8E8" }} />
              <div className="">
                {/*  */}
                <div className="mt-2">
                  <div className="flex justify-between gap-5">
                    <div className="lightgray my-auto">
                      <p className="lightgray text-[12px] font-[500]">ROI</p>
                      <p className="black text-[16px] font-[700]">+34%</p>
                    </div>
                    <div className="lightgray my-auto">
                      <p className="lightgray text-[12px] font-[500]">PnL</p>
                      <p className="black text-[16px] font-[700]">
                        +43,343 USD
                      </p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="mt-4">
                  <div className="flex justify-between gap-5">
                    <div className="lightgray my-auto">
                      <p className="lightgray text-[12px] font-[500]">
                        Win Rate
                      </p>
                      <p className="black text-[16px] font-[700]">99,434 USD</p>
                    </div>
                    <div className="lightgray my-auto">
                      <p className="lightgray text-[12px] font-[500]">
                        Max Drawdown
                      </p>
                      <p className="black text-[16px] font-[700]">43,343 USD</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4" style={{ color: "#E8E8E8" }} />
              <div className="mt-2">
                <div className="">
                  <div className="flex justify-between">
                    <p className="lightgray text-[12px] font-[500]">
                      Win{" "}
                      <span className="black text-[14px] font-[700]">
                        12,234
                      </span>
                    </p>
                    <p className="lightgray text-[12px] font-[500]">
                      Lose{" "}
                      <span className="black text-[14px] font-[700]">134</span>
                    </p>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-1">
                    <Progress
                      percent={75}
                      strokeColor="#7FD400"
                      className="custom-progress"
                      showInfo={false}
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-2">
                <h5 className="my-auto text-[14px] font-[500] gray">
                  Ava Drawdown
                </h5>
                <div className=" flex-grow border-b border-dashed border-[#e8e8e8]"></div>
                <h5 className="my-auto text-[14px] font-[700] black">15%</h5>
              </div>
              {/*  */}
              <div className="flex gap-2 mt-[10px]">
                <h5 className="my-auto text-[14px] font-[500] gray">
                  Risk To Reward
                </h5>
                <div className=" flex-grow border-b border-dashed border-[#e8e8e8]"></div>
                <h5 className="my-auto text-[14px] font-[700] black">1:2.5</h5>
              </div>
              {/*  */}
              <div className="flex gap-2 mt-[10px]">
                <h5 className="my-auto text-[14px] font-[500] gray">
                  Avg. Holding Time
                </h5>
                <div className=" flex-grow border-b border-dashed border-[#e8e8e8]"></div>
                <h5 className="my-auto text-[14px] font-[700] black">
                  1.22 Days
                </h5>
              </div>
              {/*  */}
              <div className="flex gap-2 mt-[10px]">
                <h5 className="my-auto text-[14px] font-[500] gray">
                  Sharpe Ratio
                </h5>
                <div className=" flex-grow border-b border-dashed border-[#e8e8e8]"></div>
                <h5 className="my-auto text-[14px] font-[700] black">3.24</h5>
              </div>
              {/*  */}
              <div className="flex gap-2 mt-[10px]">
                <h5 className="my-auto text-[14px] font-[500] gray">
                  Account Type
                </h5>
                <div className=" flex-grow border-b border-dashed border-[#e8e8e8]"></div>
                <h5 className="my-auto text-[14px] font-[700] black">Pro</h5>
              </div>
              {/*  */}
              <div className="flex gap-2 mt-[10px]">
                <h5 className="my-auto text-[14px] font-[500] gray">
                  Leverage
                </h5>
                <div className=" flex-grow border-b border-dashed border-[#e8e8e8]"></div>
                <h5 className="my-auto text-[14px] font-[700] black">1:500</h5>
              </div>
            </div>
            {/*  */}
            <div className="mt-[10px] bg_image p-5 rounded-[12px]">
              <div className="text-center white ">
                <h1 className="white text-[20px]  font-[700]">
                  Promote <span className="primaryGreen "> This Strategy</span>
                </h1>
                <p className="white text-[14px] font-[500] mt-1 tracking-wide">
                  30% Recruiter Commission
                </p>
                <div className="flex justify-center">
                  <button className="mt-5 w-[100px] black cursor-pointer bg_primaryGreen rounded-[8px] font-[500] py-[10px] flex justify-center gap-1 my-auto">
                    Join
                    <img src={ArrowRight} alt="ArrowRight" className="" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* // ///////////////////////   *****************   /////////////////////// */}
          <div className="bg_white rounded-[8px] col-span-8 md:col-span-8 lg:col-span-6 p-4">
            <div className="flex justify-between gap-3 my-auto">
              {/* Tabs */}
              <div className="my-auto inline-flex gap-[5px] bg_lightgray5 p-1 rounded-[8px]">
                {/*  */}
                <div
                  className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[12px] py-[5px] font-[500] 
                         hover:bg-[#F9F9F9] transition-colors duration-200 
                          ${
                            Strategies === "graph"
                              ? "bg_white font-[700]"
                              : "bg_lightgray2"
                          }
                       `}
                  onClick={() => setStrategies("graph")}
                >
                  <span
                    className={`text-[14px] my-auto ${
                      Strategies === "graph" ? "black" : "gray"
                    }`}
                  >
                    Graph
                  </span>
                </div>
                {/*  */}
                <div
                  className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[12px] py-[5px] font-[500] 
                         hover:bg-[#F9F9F9] transition-colors duration-200 
                          ${
                            Strategies === "trades"
                              ? "bg_white font-[700]"
                              : "bg_lightgray2"
                          }
                       `}
                  onClick={() => setStrategies("trades")}
                >
                  <span
                    className={`text-[14px] my-auto ${
                      Strategies === "trades" ? "black" : "gray"
                    }`}
                  >
                    Trades
                  </span>
                </div>
                {/*  */}
                <div
                  className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[12px] py-[5px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
                    Strategies === "advanced"
                      ? "bg_white font-[700]"
                      : "bg_lightgray2"
                  }`}
                  onClick={() => setStrategies("advanced")}
                >
                  <span
                    className={`text-[14px] my-auto ${
                      Strategies === "advanced" ? "black" : "gray"
                    }`}
                  >
                    Advanced
                  </span>
                </div>
              </div>
              <div className="my-auto">
                <select
                  required
                  placeholder="All Strategies"
                  className="w-full border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[10px] py-[7px]"
                  // value={formvalue.StrategyType}
                  // onChange={(e) =>
                  //   setformvalue({ ...formvalue, StrategyType: e.target.value })
                  // }
                >
                  <option value="" disabled>
                    Select Days
                  </option>
                  <option value={12}>7 Days</option>
                  <option value={12}>15 Days</option>
                  <option value={12}>1 Month</option>
                  <option value={12}>3 Month</option>
                  <option value={12}>6 Month</option>
                </select>
              </div>
            </div>
            <div style={{ width: "100%", height: 500 }}>
              <div className="my-5">
                <div className="flex gap-6 items-center mt-4">
                  {/* Category 1 */}
                  <div className="flex items-center gap-1">
                    <div className="w-[40px] h-[3px] bg_orange rounded-sm"></div>
                    <span className="text-black font-[700] text-[14px]">
                      Category 1
                    </span>
                  </div>

                  {/* Category 2 */}
                  <div className="flex items-center gap-1">
                    <div className="w-[40px] h-[3px] bg_lightgreen2 rounded-sm"></div>
                    <span className="text-black font-[700] text-[14px]">
                      Category 2
                    </span>
                  </div>
                  {/* Category 3 */}
                  <div className="flex items-center gap-1">
                    <div className="w-[40px] h-[3px] bg_black rounded-sm"></div>
                    <span className="text-black font-[700] text-[14px]">
                      Category 3
                    </span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 0,
                    left: -20,
                    bottom: 50,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="0"
                    stroke="#585858"
                    opacity={0.2}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{
                      fontSize: 12,
                      fontWeight: 700,
                      fill: "#585858",
                    }}
                  />
                  <YAxis
                    tick={{
                      fontSize: 12,
                      fontWeight: 700,
                      fill: "#585858",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000000",
                      borderRadius: "8px",
                      border: "2px solid #000000",
                      color: "white",
                      width: "200px",
                    }}
                    itemStyle={{
                      color: "#fff",
                      fontSize: "14px",
                    }}
                    labelStyle={{
                      fontWeight: 700,
                      color: "white",
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      color: "#585858",
                      fontSize: "14px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cv"
                    stroke="#000000"
                    dot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#FFA033"
                    graphDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#7FD400"
                    graphDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="my-4 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg_lightgray5 text-left text-[12px] font-[500] gray">
            <tr className="">
              <th className="py-2 px-[15px]">Name</th>
              <th className="py-2 px-[15px]">ROI</th>
              <th className="py-2 px-[15px]">Age</th>
              <th className="py-2 px-[15px]">Max DD</th>
            </tr>
          </thead>
          <tbody>
            {strategiesData?.length > 0 ? (
              strategiesData.map((item, index) => (
                <tr
                  key={index}
                  className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                >
                  <td className="py-2 px-[15px]">
                    <div
                      onClick={() => navigate("/Followers-Strategy-Detail")}
                      className="flex gap-2 cursor-pointer hover:text-blue-400"
                    >
                      <img
                        src={ProfileImage}
                        alt="Strategy Icon"
                        className="w-[24px] h-[24px] rounded-full object-cover"
                      />
                      <p className="my-auto">{item.name}</p>
                    </div>
                  </td>
                  <td className="py-2 px-[15px] green">{item.roi}</td>
                  <td className="py-2 px-[15px]">{item.age}</td>
                  <td className="py-2 px-[15px]">{item.max_dd}</td>
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
      <CopyTradeModel />
    </div>
  );
};

export default StrategiesDetailView;
