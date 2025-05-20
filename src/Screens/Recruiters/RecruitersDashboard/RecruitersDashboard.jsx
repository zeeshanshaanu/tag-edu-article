import { useEffect, useState } from "react";
import ProfileImage from "../../../assets/Images/ProfileImage.png";

import axios from "axios";
import { Check, X } from "../../../assets/svgs/Followers/FollowersIndex";
import { useDispatch } from "react-redux";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    Name: "Anjuta",
    Balance: "5",
    Date_Requested: "43,434 USD",
    Recruiter: "43,434 USD",
    pnl: "5 Details",
     status: "stopped",
  },
  
];

const RecruitersDashboard = () => {
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
      <div className="bg-white p-[20px] my-5 rounded-[8px]">
        <div className=" overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg_lightgray5 text-left text-[12px] font-[700] gray">
              <tr className=" border-[1px] border-[#f4f4f4]">
                <th className="border-none p-3">Strategy</th>
                <th className="p-3">Investors</th>
                <th className="p-3">Deposits</th>
                <th className="p-3">Earnings</th>
                <th className="p-3">Structure</th>
                <th className="p-3">Join Link / Code</th>
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
                        <p className="my-xxx">{item.Name}</p>
                      </div>
                    </td>
                    <td className="p-2">{item.Balance}</td>
                    <td className="p-2">{item.Date_Requested}</td>
                    <td className="p-2">{item.Recruiter}</td>
                    <td className="p-3">{item.pnl}</td>
                     <td className="p-2 flex flex-wrap gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Join Link / Code"
                        className=" mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[10px] py-[5px]"
                      />{" "}
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
    </div>
  );
};

export default RecruitersDashboard;
