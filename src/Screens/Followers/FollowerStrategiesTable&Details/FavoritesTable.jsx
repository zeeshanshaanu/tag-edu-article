import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileImage from "../../../assets/Images/ProfileImage.png";
import DeleteGrayIcon from "../../../assets/svgs/Followers/DeleteGrayIcon.png";
import CopyImage from "../../../assets/svgs/Followers/CopyImage.png";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    strategy: "Anjuta",
    aum: "43,434 USD",
    roi: "43,434 USD",
    max_dd: "+434",
    age: "1 Month 43 Days",
    Followers: "48484848",
  },
  {
    strategy: "Anjuta",
    aum: "43,434 USD",
    roi: "43,434 USD",
    max_dd: "+434",
    age: "1 Month 43 Days",
    Followers: "48484848",
  },
  {
    strategy: "Anjuta",
    aum: "43,434 USD",
    roi: "43,434 USD",
    max_dd: "+434",
    age: "1 Month 43 Days",
    Followers: "48484848",
  },
];
const FavoritesTable = () => {
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
      <div className="my-5 overflow-x-auto">
        <table className="min-w-full bg-white">

          <thead className="bg_lightgray5 text-left text-[12px] font-[500] gray">
            <tr className="">
              <th className="py-2 px-[15px]">Strategy</th>
              <th className="py-2 px-[15px]">AUM</th>
              <th className="py-2 px-[15px]">ROI</th>
              <th className="py-2 px-[15px]">Max&nbsp;DD</th>
              <th className="py-2 px-[15px]">Age</th>
              <th className="py-2 px-[15px]">Followers</th>
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
                    <div className="flex gap-2 cursor-pointer hover:text-blue-400">
                      <img
                        src={ProfileImage}
                        alt="Strategy Icon"
                        className="w-[24px] h-[24px] rounded-full object-cover"
                      />
                      <p className="my-auto">{item.strategy}</p>
                    </div>
                  </td>
                  <td className="py-2 px-[15px]">{item.aum}</td>
                  <td className="py-2 px-[15px]">{item.roi}</td>
                  <td className="py-2 px-[15px] green">{item.max_dd}</td>
                  <td className="py-2 px-[15px]">{item.age}</td>
                  <td className="py-2 px-[15px]">{item.Followers}</td>
                  <td className="py-2 px-[15px] flex gap-2 mt-[8px]">
                    <div className="cursor-pointer my-auto">
                      <img src={CopyImage} alt="CopyImage" className="" />
                    </div>
                    <div className="cursor-pointer my-auto">
                      <img
                        src={DeleteGrayIcon}
                        alt="DeleteGrayIcon"
                        className=""
                      />
                    </div>
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

export default FavoritesTable;
