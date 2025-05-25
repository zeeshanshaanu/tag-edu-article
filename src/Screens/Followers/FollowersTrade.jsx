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
          <thead className="bg_lightgray5 text-left text-[12px] font-[500] gray">
            <tr className="">
              <th className="py-2 px-[15px]">Strategy</th>
              <th className="py-2 px-[15px]">Instrument</th>
              <th className="py-2 px-[15px]">Type</th>
              <th className="py-2 px-[15px]">Size</th>
              <th className="py-2 px-[15px]">Entry&nbsp;Price</th>
              <th className="py-2 px-[15px]">Exit&nbsp;Price</th>
              <th className="py-2 px-[15px]">Entry&nbsp;Time</th>
              <th className="py-2 px-[15px]">Exit&nbsp;Time</th>
              <th className="py-2 px-[15px]">PnL</th>
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
                  <td className="py-2 px-[15px]">{item.Instrument}</td>
                  <td className="py-2 px-[15px]">{item.Type}</td>
                  <td className="py-2 px-[15px]">{item.Size}</td>
                  <td className="py-2 px-[15px]">{item.EntryPrice}</td>
                  <td className="py-2 px-[15px]">{item.ExitPrice}</td>
                  <td className="py-2 px-[15px]">{item.EntryTime}</td>
                  <td className="py-2 px-[15px]">{item.ExitTime}</td>
                  <td className="py-2 px-[15px] green">{item.pnl}</td>
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
