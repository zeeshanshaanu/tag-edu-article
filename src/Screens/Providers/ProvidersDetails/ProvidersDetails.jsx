import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileImage from "../../../assets/Images/ProfileImage.png";
import {
  PauseButtonIcon,
  GearSix,
} from "../../../assets/svgs/Followers/FollowersIndex";
import { ArrowRight } from "../../../assets/svgs/index";

// ///////////////////////   *****************   ///////////////////////
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
const ProvidersDetails = () => {
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
    <div className="">
      {/* Table */}
      <div className="mt-5 overflow-x-auto rounded-[12px] bg-white p-[20px]">
        <h1 className="mb-4 text-[20] font-[700]">Performance</h1>
        <table className="min-w-full bg-white">
          <thead className="bg_lightgray5 text-left text-[12px] font-[700] gray">
            <tr className=" border-[1px] border-[#f4f4f4]">
              <th className="border-none p-3">Strategy</th>
              <th className="p-3">AUM</th>
              <th className="p-3">Balance</th>
              <th className="p-3">ROI</th>
              <th className="p-3">PnL</th>
              <th className="p-3">MT Account #</th>
              <th className="p-3">Investors</th>
              <th className="p-3">Profit Share Earned</th>
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
                      onClick={() => navigate("/Followers-Strategy-Detail")}
                      className="flex gap-2  cursor-pointer hover:text-blue-400"
                    >
                      <img
                        src={ProfileImage}
                        alt="Strategy Icon"
                        className="w-[24px] h-[24px] rounded-full object-cover"
                      />
                      <p className="my-xxx">{item.strategy}</p>
                    </div>
                  </td>
                  <td className="p-2">{item.invested}</td>
                  <td className="p-2">{item.equity}</td>
                  <td className="p-2 green">{item.roi}</td>
                  <td className="p-3 green">{item.pnl}</td>
                  <td className="p-2">{item.mtAccount}</td>
                  <td className="p-2 flex items-center gap-1">
                    {item.multiplier}
                  </td>
                  <td className="p-2">{item.accountType}</td>
                  <td className="p-2 flex flex-wrap gap-2">
                    <button
                      className="bg-white   cursor-pointer  
                           px-[12px] py-[5px] rounded-[8px] text-[14px]"
                    >
                      <img src={GearSix} alt="GearSix" className="" />
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
      {/* Table */}
      <div className="mt-5 overflow-x-auto rounded-[12px] bg-white p-[20px]">
        <h1 className="mb-4 text-[20] font-[500]">Recruiters</h1>
        <table className="min-w-full bg-white">
          <thead className="bg_lightgray5 text-left text-[12px] font-[700] gray">
            <tr className=" border-[1px] border-[#f4f4f4]">
              <th className="border-none p-3">Strategy</th>
              <th className="p-3">Active Recruiters</th>
              <th className="p-3">Deposits</th>
              <th className="p-3">Fee</th>
              <th className="p-3">PnL</th>
              <th className="p-3">Commission Paid</th>

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
                      onClick={() => navigate("/Followers-Strategy-Detail")}
                      className="flex gap-2  cursor-pointer hover:text-blue-400"
                    >
                      <img
                        src={ProfileImage}
                        alt="Strategy Icon"
                        className="w-[24px] h-[24px] rounded-full object-cover"
                      />
                      <p className="my-xxx">{item.strategy}</p>
                    </div>
                  </td>
                  <td className="p-2">{item.invested}</td>
                  <td className="p-2">{item.equity}</td>
                  <td className="p-2 green">{item.roi}</td>
                  <td className="p-3 green">{item.pnl}</td>
                  <td className="p-2">{item.accountType}</td>
                  <td className="p-2 flex flex-wrap gap-2">
                    <button
                      className="bg-white border cursor-pointer border-[#E8E8E8] flex gap-1
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
  );
};

export default ProvidersDetails;
