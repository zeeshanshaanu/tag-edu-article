import { useEffect, useState } from "react";
import ProfileImage from "../../../assets/Images/ProfileImage.png";

import axios from "axios";
import { Check, X } from "../../../assets/svgs/Followers/FollowersIndex";
import { useDispatch } from "react-redux";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    Date_Requested: "March 2, 2026",
    Name: "Anjuta",
    Balance: "Commission",
    Recruiter: "+23,323 USD",
    pnl: "PF Jan 2, 2025 - Jan 6, 2026",
  },
  {
    Date_Requested: "March 2, 2026",
    Name: "Anjuta",
    Balance: "Commission",
    Recruiter: "+23,323 USD",
    pnl: "PF Jan 2, 2025 - Jan 6, 2026",
  },
  {
    Date_Requested: "March 2, 2026",
    Name: "Anjuta",
    Balance: "Commission",
    Recruiter: "+23,323 USD",
    pnl: "PF Jan 2, 2025 - Jan 6, 2026",
  },
  {
    Date_Requested: "March 2, 2026",
    Name: "Anjuta",
    Balance: "Commission",
    Recruiter: "+23,323 USD",
    pnl: "PF Jan 2, 2025 - Jan 6, 2026",
  },
];

const RecruitersWallet = () => {
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
      {/* table */}
      <div className="bg-white p-[15px] my-1 rounded-[8px]">
        <div className=" overflow-x-auto">
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
                    <td className="py-2 px-[15px]">{item.Date_Requested}</td>
                    <td className="py-2 px-[15px]">
                      <div
                        onClick={() => navigate("/Followers-Strategy-Detail")}
                        className="flex gap-2  cursor-pointer hover:text-blue-400"
                      >
                        <img
                          src={ProfileImage}
                          alt="Strategy Icon"
                          className="w-[24px] h-[24px] rounded-full object-cover"
                        />
                        <p className="my-auto">{item.Name}</p>
                      </div>
                    </td>
                    <td className="py-2 px-[15px]">{item.Balance}</td>
                    <td className="py-2 px-[15px] green">{item.Recruiter}</td>
                    <td className="py-2 px-[15px]">{item.pnl}</td>
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

export default RecruitersWallet;
