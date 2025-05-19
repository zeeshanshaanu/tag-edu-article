import { useEffect, useState } from "react";
import axios from "axios";
import ProfileImage from "../../assets/Images/ProfileImage.png";
import { BlackTicIcon } from "../../assets/svgs/Followers/FollowersIndex";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    strategy: "Anjuta",
    Instrument: "43,434 USD",
    Type: "Long",
    Size: "0.32 Lots",
    EntryPrice: "43,434 USD",
    ExitPrice: "43,434 USD",
    EntryTime: "12:43",
    ExitTime: "12:43",
    pnl: "+434,234 USD",
  },
  {
    strategy: "Anjuta",
    Instrument: "43,434 USD",
    Type: "Long",
    Size: "0.32 Lots",
    EntryPrice: "43,434 USD",
    ExitPrice: "43,434 USD",
    EntryTime: "12:43",
    ExitTime: "12:43",
    pnl: "+434,234 USD",
  },
  {
    strategy: "Anjuta",
    Instrument: "43,434 USD",
    Type: "Long",
    Size: "0.32 Lots",
    EntryPrice: "43,434 USD",
    ExitPrice: "43,434 USD",
    EntryTime: "12:43",
    ExitTime: "12:43",
    pnl: "+434,234 USD",
  },
];
const FollowersTrade = () => {
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
      <div className="mb-5">
        <div className="flex justify-between gap-5">
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
                All Strategies
              </option>
              <option value={12}>11 Strategies</option>
              <option value={24}>22 Strategies</option>
            </select>
          </div>
          <div className="my-auto">
            <h1
              className="text-[14px] font-[700] cursor-pointer border border-[1px] bg_white border-[#E8E8E8]
                     rounded-[8px] px-[15px] py-[8px] flex gap-2"
            >
              <img src={BlackTicIcon} alt="BlackTicIcon" className="" /> Closed
              Trades
            </h1>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="my-5 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg_lightgray5 text-left text-[12px] font-[700] gray">
            <tr className=" border-[1px] border-[#f4f4f4]">
              <th className="border-none p-3">Strategy</th>
              <th className="p-3">Instrument</th>
              <th className="p-3">Type</th>
              <th className="p-3">Size</th>
              <th className="p-3">Entry Price</th>
              <th className="p-3">Exit Price</th>
              <th className="p-3">Entry Time</th>
              <th className="p-3">Exit Time</th>
              <th className="p-3">PnL</th>
            </tr>
          </thead>
          <tbody>
            {strategies?.length > 0 ? (
              strategies.map((item, index) => (
                <tr
                  key={index}
                  className="text-[14px] font-[700] black border-t border-[#E8E8E8]"
                >
                  <td className="p-3">
                    <div className="flex gap-2">
                      <img
                        src={ProfileImage}
                        alt="Strategy Icon"
                        className="w-[24px] h-[24px] rounded-full object-cover"
                      />
                      <p className="">{item.strategy}</p>
                    </div>
                  </td>
                  <td className="p-3">{item.Instrument}</td>
                  <td className="p-3">{item.Type}</td>
                  <td className="p-3">{item.Size}</td>
                  <td className="p-3">{item.EntryPrice}</td>
                  <td className="p-3">{item.ExitPrice}</td>
                  <td className="p-3">{item.EntryTime}</td>
                  <td className="p-3">{item.ExitTime}</td>
                  <td className="p-3 green">{item.pnl}</td>
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

export default FollowersTrade;
