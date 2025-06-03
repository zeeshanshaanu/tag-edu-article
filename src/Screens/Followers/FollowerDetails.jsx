import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Breadcrumb } from "antd";
// ///////////////////////   *****************   ///////////////////////
import ProfileImage from "../../assets/Images/ProfileImage.png";
import { EditIcon } from "../../assets/svgs/Followers/FollowersIndex";
import { UserRectangle } from "../../assets/svgs/Provider/ProviderIndex";
import { Users } from "../../assets/svgs";
import {
  EnvelopeSimple,
  FollowerDetailInvested,
  LinkBreak,
  Paperclip,
  Receipt,
  RocketLaunch,
} from "../../assets/svgs/AdminFollowers/index";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const dummyData = [
  {
    strategy: "Anjuta",
    DateJoined: "Jan 22, 2025",
    Invested: "$434,343,434",
    Parent: "James J",
    AccountNo: "43434343",
    PFPaid: "$434,343",
    RM: "$434,343",
    Balance: "$434,343",
  },
];
const TradeDetails = [
  {
    Symbol: "XAUUSD",
    Type: "BUY",
    Vol: "1.52",
    Date: "01-23-25",
    OpenTime: "00:43",
    CloseTime: "00:13",
    EntryPrice: "43.43",
    ExitPrice: "23.43",
    PnL: "+43.43",
    RM: "1",
  },
];
const FollowerDetails = () => {
  const navigate = useNavigate();

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
    <div className="p-3">
      <div className="">
        <Breadcrumb
          items={[
            {
              title: (
                <span
                  onClick={() => {
                    navigate("/Followers");
                  }}
                  className="flex gap-1 cursor-pointer"
                >
                  <img src={Users} alt="MagnifyingGlassBlack" />

                  <span className="text-[14px] my-auto">Followers</span>
                </span>
              ),
            },
            {
              title: (
                <span className="text-[14px] my-auto black font-[700]">
                  James Homes
                </span>
              ),
            },
          ]}
        />
      </div>
      {/* Followers Hub header */}
      <div className="my-4 bg_white p-[15px] rounded-[12px]">
        {/*  */}
        <div className="my-auto flex gap-3">
          <div className="my-auto">
            <img
              src={ProfileImage}
              alt="Strategy Icon"
              className="w-[48px] h-[48px] rounded-full object-cover"
            />
          </div>
          <div className="">
            <h1 className="satoshi_italic text-[16px] font-[700] black my-auto">
              Anjuta
            </h1>
            <div className="flex gap-3">
              <p className="flex gap-1 my-auto text-[14px] font-[500] gray">
                <img src={EnvelopeSimple} alt="EnvelopeSimple" />
                james324@aol.com
              </p>
              <p className="flex gap-1 my-auto text-[14px] font-[500] gray">
                {" "}
                <img src={UserRectangle} alt="UserRectangle" />
                CU32323
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="my-auto bg_black rounded-[12px] border-[1px] border-[#666666] p-[15px] mt-5">
          <div className="sm:flex justify-between gap-3">
            {/* Performance Fee  */}
            <div className="my-auto flex sm:gap-20 gap-4">
              <div className="flex gap-x-[12px] ">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={Receipt}
                    alt="Receipt"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Paid Fees</p>
                  <p className="white text-[20px] font-[700]">$43,343</p>
                </div>
              </div>
              {/*Min Investment  */}
              <div className="flex gap-x-[12px]">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={FollowerDetailInvested}
                    alt="FollowerDetailInvested"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Invested</p>
                  <p className="white text-[20px] font-[700]">$10,430,00</p>
                </div>
              </div>
            </div>
            {/* button */}
            <div className="mt-4 sm:mt-auto sm:mb-auto">
              <button
                className="w-full lg:w-[100px] flex justify-center text-[14px] font-[700] cursor-pointer border border-[1px] bg_white border-[#E8E8E8]
                             rounded-[8px] px-[15px] py-[7px] flex gap-2"
              >
                <img src={Paperclip} alt="Paperclip" className="" /> Attach
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Table */}
      <div className="my-3 bg-white rounded-[12px] p-3">
        <div className=" overflow-x-auto">
          <h1 className="mb-4 text-[20] font-[700]">Follower Details</h1>
          <table className="min-w-full">
            <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
              <tr className="">
                <th className="py-2 px-[15px]">Strategy</th>
                <th className="py-2 px-[15px]">Date&nbsp;Joined</th>
                <th className="py-2 px-[15px]">Invested</th>
                <th className="py-2 px-[15px]">Parent</th>
                <th className="py-2 px-[15px]">Account#</th>
                <th className="py-2 px-[15px]">PF&nbsp;Paid</th>
                <th className="py-2 px-[15px]">RM</th>
                <th className="py-2 px-[15px]">Balance</th>
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
                    <td className="py-2 px-[15px]">{item.DateJoined}</td>
                    <td className="py-2 px-[15px]">{item.Invested}</td>
                    <td className="py-2 px-[15px]">{item.Parent}</td>
                    <td className="py-2 px-[15px]">{item.AccountNo}</td>
                    <td className="py-2 px-[15px]">{item.PFPaid}</td>
                    <td className="py-2 px-[15px] flex items-center gap-1">
                      {item.RM}{" "}
                      <img
                        src={EditIcon}
                        alt="EditIcon"
                        className="cursor-pointer"
                      />
                    </td>
                    <td className="py-2 px-[15px]">{item.Balance}</td>
                    <td className="p-2 flex gap-2">
                      <button
                        className="w-[100px] bg-white border cursor-pointer border-[#E8E8E8] flex gap-1
                        px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100"
                      >
                        <img src={LinkBreak} alt="LinkBreak" className="" />
                        Detach
                      </button>
                      <button
                        className="w-[100px] bg-white border cursor-pointer border-[#E8E8E8] flex gap-1
                        px-[12px] py-[5px] rounded-[8px] text-[14px] hover:bg-gray-100"
                      >
                        <img
                          src={RocketLaunch}
                          alt="RocketLaunch"
                          className=""
                        />
                        Force&nbsp;PF
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
      {/* Table */}
      <div className="my-3 bg-white rounded-[12px] p-3">
        <div className=" overflow-x-auto">
          <div className="mb-4 flex justify-between">
            <h1 className="my-auto text-[20] font-[700]">Trade Details</h1>
            <div className="my-auto">
              <select
                required
                placeholder="All Strategies"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[10px] py-[8px]"
                // value={formvalue.NameType}
                // onChange={(e) =>
                //   setformvalue({ ...formvalue, NameType: e.target.value })
                // }
              >
                <option value="" disabled>
                  Select
                </option>
                <option value={12}>XAU Elite4</option>
                <option value={24}>XAU Elite5</option>
              </select>
            </div>
          </div>
          <table className="min-w-full">
            <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
              <tr className="">
                <th className="py-2 px-[15px]">Symbol</th>
                <th className="py-2 px-[15px]">Type</th>
                <th className="py-2 px-[15px]">Vol</th>
                <th className="py-2 px-[15px]">Date</th>
                <th className="py-2 px-[15px]">Open&nbsp;Time</th>
                <th className="py-2 px-[15px]">Close&nbsp;Time</th>
                <th className="py-2 px-[15px]">Entry&nbsp;Price</th>
                <th className="py-2 px-[15px]">Exit&nbsp;Price</th>
                <th className="py-2 px-[15px]">PnL</th>
                <th className="py-2 px-[15px]">RM</th>
              </tr>
            </thead>
            <tbody>
              {TradeDetails?.length > 0 ? (
                TradeDetails.map((item, index) => (
                  <tr
                    key={index}
                    className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                  >
                    <td className="py-2 px-[15px]">{item.Symbol}</td>
                    <td className="py-2 px-[15px]">{item.Type}</td>
                    <td className="py-2 px-[15px] green">{item.Vol}</td>
                    <td className="py-2 px-[15px]">{item.Date}</td>
                    <td className="py-2 px-[15px]">{item.OpenTime}</td>
                    <td className="py-2 px-[15px]">{item.CloseTime}</td>
                    <td className="py-2 px-[15px]">{item.EntryPrice}</td>
                    <td className="py-2 px-[15px]">{item.ExitPrice}</td>
                    <td className="py-2 px-[15px] green">{item.PnL}</td>
                    <td className="py-2 px-[15px]">{item.RM}</td>
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

export default FollowerDetails;
