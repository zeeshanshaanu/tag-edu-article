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
      <div className="mt-5 overflow-x-auto rounded-[12px] bg-white p-[20px]">
        <h1 className="mb-4 text-[20] font-[700]">Transactions</h1>
        <table className="min-w-full bg-white">
          <thead className="bg_lightgray5 text-left text-[12px] font-[700] gray">
            <tr className="border-[1px] border-[#f4f4f4]">
              <th className="p-3">Date</th>
              <th className="p-3">Strategy</th>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {strategies?.length > 0 ? (
              strategies.map((item, index) => (
                <tr
                  key={index}
                  className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                >
                  <td className="p-2">{item.Date}</td>
                  <td className="p-2">
                    <div className="flex gap-1 cursor-pointer">
                      <img
                        src={ProfileImage}
                        alt="Strategy Icon"
                        className="w-[24px] h-[24px] my-auto rounded-full object-cover"
                      />
                      <p className="p-2 my-auto">{item.strategy}</p>
                    </div>
                  </td>
                  <td className="p-2">{item.Type}</td>
                  <td className="p-2 green">{item.Amount}</td>
                  <td className="p-2">{item.Details}</td>
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
