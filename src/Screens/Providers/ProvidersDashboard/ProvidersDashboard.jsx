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
import { DespositWallet } from "../../../assets/svgs/Followers/FollowersIndex";
import { useEffect, useState } from "react";
import CopyImage from "../../../assets/svgs/Followers/CopyImage.png";

import axios from "axios";
import {
  EditIcon,
  Withdrow,
  Check,
  X,
} from "../../../assets/svgs/Followers/FollowersIndex";
import DepositAndWithdrawModel from "./DepositAndWithdrawModel";
import { OpenModelFtn } from "../../../Store/StrategySlice/StrategySlice";
import { useDispatch } from "react-redux";
const data = [
  {
    name: "05/01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "05/03",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "05/05",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "05/07",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05/09",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "05/11",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "05/07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    Name: "Anjuta",
    Balance: "43,434 USD",
    Date_Requested: "43,434 USD",
    Recruiter: "JognF",
    pnl: "+434 USD",
    MT5_Account: "48484848",

    status: "stopped",
  },
  {
    Name: "Anjuta",
    Balance: "43,434 USD",
    Date_Requested: "43,434 USD",
    Recruiter: "JognF",
    pnl: "+434 USD",
    MT5_Account: "48484848",

    status: "running",
  },
  {
    Name: "Anjuta",
    Balance: "43,434 USD",
    Date_Requested: "43,434 USD",
    Recruiter: "JognF",
    pnl: "+434 USD",
    MT5_Account: "48484848",

    status: "stopped",
  },
  {
    Name: "Anjuta",
    Balance: "43,434 USD",
    Date_Requested: "43,434 USD",
    Recruiter: "JognF",
    pnl: "+434 USD",
    MT5_Account: "48484848",

    status: "running",
  },
];

const ProviderDashboard = () => {
  const dispatch = useDispatch();
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
    <div>
      <div className="bg-white p-[20px]">
        <div className="flex justify-between gap-5 mb-5">
          <div className="flex gap-3 my-auto">
            <div className="my-auto">
              <select
                required
                placeholder="All Strategies"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[10px] py-[8px]"
                // value={formvalue.NameType}
                // onChange={(e) =>
                //   setformvalue({ ...formvalue, NameType: e.target.value })
                // }
              >
                <option value="" disabled>
                  All Strategies
                </option>
                <option value={12}>11 Strategies</option>
                <option value={24}>22 Strategies</option>
              </select>
            </div>
            <div className="my-auto">
              <select
                required
                placeholder="All Strategies"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[10px] py-[8px]"
                // value={formvalue.NameType}
                // onChange={(e) =>
                //   setformvalue({ ...formvalue, NameType: e.target.value })
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

          <div className="my-auto flex gap-10">
            <div className="lightgray my-auto border-r-[1px] pr-10 border-[#E8E8E8]">
              <p className="gray text-[12px] font-[500]">Balance </p>
              <p className="black text-[14px] font-[700]">99,434 USD</p>
            </div>
            <div className="lightgray my-auto border-r-[1px] pr-10 border-[#E8E8E8]">
              <p className="gray text-[12px] font-[500]">Total Balance </p>
              <p className="black text-[14px] font-[700]">99,434 USD</p>
            </div>
            <div className="lightgray my-auto border-r-[1px] pr-10 border-[#E8E8E8]">
              <p className="gray text-[12px] font-[500]">Recruiter</p>
              <p className="black text-[14px] font-[700]">%99</p>
            </div>
            <div className="lightgray">
              <p className="gray text-[12px] font-[500]">PnL </p>
              <p className="black text-[14px] font-[700]">99,434 USD</p>
            </div>
          </div>
        </div>
        {/* Chart */}
        <div style={{ width: "100%", height: 300 }}>
          <div className="my-5">
            <div className="flex gap-6 items-center mt-4">
              {/* Profit */}
              <div className="flex items-center gap-1">
                <div className="w-[40px] h-[3px] bg_orange rounded-sm"></div>
                <span className="text-black font-[700] text-[14px]">
                  Profit
                </span>
              </div>

              {/* Growth */}
              <div className="flex items-center gap-1">
                <div className="w-[40px] h-[3px] bg_lightgreen2 rounded-sm"></div>
                <span className="text-black font-[700] text-[14px]">
                  Growth
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
                bottom: 0,
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
                dataKey="pv"
                stroke="#FFA033"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#7FD400"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Input fields */}
      <div className="bg-white p-[20px] my-5 rounded-[8px]">
        <div className="flex justify-between gap-5">
          <h1 className="text-[20px] font-[700] black">Personal Fund</h1>
          <div className="my-auto flex gap-2">
            <h1
              onClick={() => dispatch(OpenModelFtn(true))}
              className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
                 rounded-[8px] px-[15px] py-[7px] flex gap-2"
            >
              <img src={DespositWallet} alt="DespositWallet" className="" />{" "}
              Deposit
            </h1>
            <h1
              onClick={() => dispatch(OpenModelFtn(true))}
              className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
                 rounded-[8px] px-[15px] py-[7px] flex gap-2"
            >
              <img src={Withdrow} alt="Withdrow" className="" />
              Withdraw
            </h1>
          </div>
        </div>
        {/* Inputs */}
        <div className="mt-4 grid grid:cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {/* NameName */}
          <div className="relative">
            <label htmlFor="" className="text-[12px] font-[700] black">
              Invite Followers Directly To Join Your Name
            </label>
            <br />
            <input
              type="text"
              required
              // value={formvalue.NameName}
              // onChange={(e) =>
              //   setformvalue({ ...formvalue, NameName: e.target.value })
              // }
              placeholder=""
              className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none pl-[10px] pr-[25px] py-[8px]"
            />{" "}
            <span className="absolute top-[41px] right-[8px]">
              {" "}
              <img src={CopyImage} alt="CopyImage" className="cursor-pointer" />
            </span>
          </div>
          {/* NameName */}
          <div className="">
            <label htmlFor="" className="text-[12px] font-[700] black">
              MT5 Account #
            </label>
            <br />
            <input
              type="text"
              required
              // value={formvalue.NameName}
              // onChange={(e) =>
              //   setformvalue({ ...formvalue, NameName: e.target.value })
              // }
              placeholder="MT5 Account #"
              className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
            />{" "}
          </div>

          {/* NameName */}
          <div className="">
            <label htmlFor="" className="text-[12px] font-[700] black">
              Master Password
            </label>
            <br />
            <input
              type="password"
              required
              // value={formvalue.NameName}
              // onChange={(e) =>
              //   setformvalue({ ...formvalue, NameName: e.target.value })
              // }
              placeholder="Master Password"
              className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
            />{" "}
          </div>
          {/* NameName */}
          <div className="">
            <label htmlFor="" className="text-[12px] font-[700] black">
              Investor Password
            </label>
            <br />
            <input
              type="password"
              required
              // value={formvalue.NameName}
              // onChange={(e) =>
              //   setformvalue({ ...formvalue, NameName: e.target.value })
              // }
              placeholder="Investor Password"
              className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
            />{" "}
          </div>
        </div>
      </div>
      {/* table */}
      <div className="bg-white p-[20px] my-5 rounded-[8px]">
        <div className=" overflow-x-auto">
          <h1 className="mb-4 text-[20] font-[700]">
            Pending Follower Requests
          </h1>
          <table className="min-w-full bg-white">
            <thead className="bg_lightgray5 text-left text-[12px] font-[700] gray">
              <tr className=" border-[1px] border-[#f4f4f4]">
                <th className="border-none p-3">Name</th>
                <th className="p-3">Balance</th>
                <th className="p-3">Date Requested</th>
                <th className="p-3">Recruiter</th>
                <th className="p-3">PnL</th>
                <th className="p-3">MT5 Account</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {strategies?.length > 0 ? (
                strategies.map((item, index) => (
                  <tr
                    key={index}
                    className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                  >
                    <td className="p-2">
                      <div
                        onClick={() => navigate("/Followers-Name-Detail")}
                        className="flex gap-2  cursor-pointer hover:text-blue-400"
                      >
                        <p className="my-xxx">{item.Name}</p>
                      </div>
                    </td>
                    <td className="p-2">{item.Balance}</td>
                    <td className="p-2">{item.Date_Requested}</td>
                    <td className="p-2">{item.Recruiter}</td>
                    <td className="p-3">{item.pnl}</td>
                    <td className="p-2">{item.MT5_Account}</td>
                    <td className="p-2 flex flex-wrap gap-2">
                      <button
                        className="bg-white border cursor-pointer border-[#E8E8E8] 
                                px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100 flex gap-1"
                      >
                        <img src={Check} alt="Check" className="" />
                        Approve
                      </button>
                      <button
                        className="bg-white border cursor-pointer border-[#E8E8E8] 
                                px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100 flex gap-1"
                      >
                        <img src={X} alt="X" className="" />
                        Reject
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
      <DepositAndWithdrawModel />
    </div>
  );
};

export default ProviderDashboard;
