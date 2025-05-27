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
    Date: "March 2, 2026",
    strategy: "Anjuta",
    Type: "Recruiter Payment",
    Amount: "+23,323 USD",
    Details: "PF Jan 2, 2025 - Jan 6, 2026",
  },
  {
    Date: "March 2, 2026",
    strategy: "Anjuta",
    Type: "Recruiter Payment",
    Amount: "+23,323 USD",
    Details: "PF Jan 2, 2025 - Jan 6, 2026",
  },
  {
    Date: "March 2, 2026",
    strategy: "Anjuta",
    Type: "Recruiter Payment",
    Amount: "+23,323 USD",
    Details: "PF Jan 2, 2025 - Jan 6, 2026",
  },
  {
    Date: "March 2, 2026",
    strategy: "Anjuta",
    Type: "Recruiter Payment",
    Amount: "+23,323 USD",
    Details: "PF Jan 2, 2025 - Jan 6, 2026",
  },
];
const ProviderWallet = () => {
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
      <div className="mt-1 overflow-x-auto rounded-[12px] bg-white p-[20px]">
        <h1 className="mb-4 text-[20] font-[500]">Transactions</h1>
        <table className="min-w-full bg-white">
          <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
            <tr className="">
              <th className="py-2 px-[15px]">Date</th>
              <th className="py-2 px-[15px]">Strategy</th>
              <th className="py-2 px-[15px]">Type</th>
              <th className="py-2 px-[15px]">Amount</th>
              <th className="py-2 px-[15px]">Details</th>
            </tr>
          </thead>
          <tbody>
            {strategies?.length > 0 ? (
              strategies.map((item, index) => (
                <tr
                  key={index}
                  className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                >
                  <td className="py-2 pr-[15px]">{item.Date}</td>
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
                  <td className="py-2 px-[15px]">{item.Type}</td>
                  <td className="py-2 px-[15px] green">{item.Amount}</td>
                  <td className="py-2 px-[15px]">{item.Details}</td>
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

export default ProviderWallet;
