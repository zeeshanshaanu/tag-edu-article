import React, { PureComponent } from "react";
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
const FollowersDashboard = () => {
  return (
    <div>
      <div className="flex justify-between gap-5 mb-5">
        <div className="flex gap-3 my-auto">
          <div className="my-auto">
            <select
              required
              placeholder="All Strategies"
              className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[10px] py-[8px]"
              // value={formvalue.StrategyType}
              // onChange={(e) =>
              //   setformvalue({ ...formvalue, StrategyType: e.target.value })
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

        <div className="my-auto flex gap-10">
          <div className="lightgray my-auto border-r-[1px] pr-10 border-[#E8E8E8]">
            <p className="gray text-[12px] font-[500]">Total Balance </p>
            <p className="black text-[14px] font-[700]">99,434 USD</p>
          </div>
          <div className="lightgray my-auto border-r-[1px] pr-10 border-[#E8E8E8]">
            <p className="gray text-[12px] font-[500]">Total Balance </p>
            <p className="black text-[14px] font-[700]">99,434 USD</p>
          </div>
          <div className="lightgray my-auto border-r-[1px] pr-10 border-[#E8E8E8]">
            <p className="gray text-[12px] font-[500]">Total Balance </p>
            <p className="black text-[14px] font-[700]">99,434 USD</p>
          </div>
          <div className="lightgray">
            <p className="gray text-[12px] font-[500]">Total Balance </p>
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
              <span className="text-black font-[700] text-[14px]">Profit</span>
            </div>

            {/* Growth */}
            <div className="flex items-center gap-1">
              <div className="w-[40px] h-[3px] bg_lightgreen2 rounded-sm"></div>
              <span className="text-black font-[700] text-[14px]">Growth</span>
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
            <CartesianGrid strokeDasharray="0" stroke="#585858" opacity={0.2} />
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
  );
};

export default FollowersDashboard;
