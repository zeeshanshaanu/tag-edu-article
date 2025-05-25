import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileImage from "../../../assets/Images/ProfileImage.png";
import {
  EditIcon,
  PauseButtonIcon,
  StopButtonIcon,
} from "../../../assets/svgs/Followers/FollowersIndex";
import { useNavigate } from "react-router-dom";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    strategy: "Anjuta",
    invested: "43,434 USD",
    equity: "43,434 USD",
    roi: "+43%",
    pnl: "+434 USD",
    mtAccount: "48484848",
    multiplier: "1X",
    accountType: "Amplify",
    status: "stopped",
  },
  {
    strategy: "Anjuta",
    invested: "43,434 USD",
    equity: "43,434 USD",
    roi: "+43%",
    pnl: "+434 USD",
    mtAccount: "48484848",
    multiplier: "2X",
    accountType: "Amplify",
    status: "running",
  },
  {
    strategy: "Anjuta",
    invested: "43,434 USD",
    equity: "43,434 USD",
    roi: "+43%",
    pnl: "+434 USD",
    mtAccount: "48484848",
    multiplier: "0.5X",
    accountType: "Amplify",
    status: "stopped",
  },
  {
    strategy: "Anjuta",
    invested: "43,434 USD",
    equity: "43,434 USD",
    roi: "+43%",
    pnl: "+434 USD",
    mtAccount: "48484848",
    multiplier: "10X",
    accountType: "Amplify",
    status: "running",
  },
];
const ActiveTable = () => {
  const navigate = useNavigate(); // ✅ React Router navigation
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
      {/* Table */}
      <div className="my-3 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
            <tr className="">
              <th className="py-2 px-[15px]">Strategy</th>
              <th className="py-2 px-[15px]">Invested</th>
              <th className="py-2 px-[15px]">Equity</th>
              <th className="py-2 px-[15px]">ROI</th>
              <th className="py-2 px-[15px]">PnL</th>
              <th className="py-2 px-[15px]">MT&nbsp;Account&nbsp;#</th>
              <th className="py-2 px-[15px]">Multiplier</th>
              <th className="py-2 px-[15px]">Account&nbsp;Type</th>
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
                      onClick={() => navigate("/Followers-Strategy-Detail")}
                      className="flex gap-2 cursor-pointer hover:text-blue-400"
                    >
                      <img
                        src={ProfileImage}
                        alt="Strategy Icon"
                        className="w-[24px] h-[24px] rounded-full object-cover"
                      />
                      <p className="my-auto">{item.strategy}</p>
                    </div>
                  </td>
                  <td className="py-2 px-[15px]">{item.invested}</td>
                  <td className="py-2 px-[15px]">{item.equity}</td>
                  <td className="py-2 px-[15px] green">{item.roi}</td>
                  <td className="py-2 px-[15px]">{item.pnl}</td>
                  <td className="py-2 px-[15px]">{item.mtAccount}</td>
                  <td className="py-2 px-[15px] flex items-center gap-1">
                    {item.multiplier}
                    <img src={EditIcon} alt="EditIcon" className="" />
                  </td>
                  <td className="py-2 px-[15px]">{item.accountType}</td>
                  <td className="py-2 px-[15px] flex gap-2">
                    <button
                      className=" my-auto bg-white border cursor-pointer border-[#E8E8E8] 
                        px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100"
                    >
                      Deposit
                    </button>
                    <button
                      className=" my-auto bg-white border cursor-pointer border-[#E8E8E8] 
                        px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100"
                    >
                      Withdraw
                    </button>

                    {item.status === "running" ? (
                      <button
                        className=" my-auto bg-white border cursor-pointer border-[#E8E8E8] flex gap-1
                        px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100"
                      >
                        <img
                          src={PauseButtonIcon}
                          alt="PauseButtonIcon"
                          className=""
                        />
                        Resume
                      </button>
                    ) : (
                      <button
                        className=" my-auto bg-white border cursor-pointer border-[#E8E8E8] flex gap-1
                            px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100"
                      >
                        {" "}
                        <img
                          src={StopButtonIcon}
                          alt="StopButtonIcon"
                          className=""
                        />
                        Stop
                      </button>
                    )}
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
  );
};

export default ActiveTable;
