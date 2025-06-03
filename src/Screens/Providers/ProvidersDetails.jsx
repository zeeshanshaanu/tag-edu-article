import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Breadcrumb, Switch } from "antd";
// ///////////////////////   *****************   ///////////////////////
import ProfileImage from "../../assets/Images/ProfileImage.png";
import CopyImage from "../../assets/svgs/Followers/CopyImage.png";
import {
  GreenTick,
  PowerOff,
  UserRectangle,
  GraySingleUser,
} from "../../assets/svgs/Provider/ProviderIndex";
import { Plus } from "../../assets/svgs/Browse/index";
import { Handshake, ArrowRight, BlackUsers } from "../../assets/svgs";
import {
  X,
  EditIcon,
  CoinBlack,
} from "../../assets/svgs/Followers/FollowersIndex";
import {
  EnvelopeSimple,
  RocketLaunch,
  CalendarBlank,
} from "../../assets/svgs/AdminFollowers/index";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const StrategiesData = [
  {
    strategy: "XAU ELITE 1",
    Visibility: "private",
  },
  {
    strategy: "XAU ELITE 2",
    Visibility: " public",
  },
  {
    strategy: "XAU ELITE 3",
    Visibility: "private",
  },
  {
    strategy: "XAU ELITE 4",
    Visibility: "public",
  },
];
const TradeDetails = [
  {
    Campaignname: "Default",
    Registrations: "123",
    Recruiters: "152",
    Levels: "25",
    Commissions: "43%",
    Advanced: "00:13",
    Link: "https://www.example.com/search?word",
  },
  {
    Campaignname: "Default",
    Registrations: "123",
    Recruiters: "152",
    Levels: "25",
    Commissions: "43%",
    Advanced: "00:13",
    Link: "https://www.example.com/search?word",
  },
];
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const ProviderDetails = () => {
  const navigate = useNavigate();

  const [strategies, setStrategies] = useState([]);
  const [strategiesName, setStrategiesName] = useState([]);
  const [error, setError] = useState(null);
  const [ShowInput, setShowInput] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this with actual API URL
        const response = await axios.get("https://your-api.com/strategies");
        if (response.status === 200 && Array.isArray(response.data)) {
          setStrategies(response.data);
        } else {
          setStrategies(TradeDetails);
          setStrategiesName(StrategiesData);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch data, displaying fallback.");
        setStrategies(TradeDetails);
        setStrategiesName(StrategiesData);
      }
    };

    fetchData();
  }, []);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="p-3">
      <div className="">
        <Breadcrumb
          items={[
            {
              title: (
                <span
                  onClick={() => {
                    navigate("/Providers");
                  }}
                  className="flex gap-1 cursor-pointer"
                >
                  <img src={Handshake} alt="Handshake" />

                  <span className="text-[14px] my-auto">Providers</span>
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
            <div className="sm:flex gap-1">
              <p className="flex gap-1 my-auto text-[14px] font-[500] gray">
                <img src={GraySingleUser} alt="GraySingleUser" />
                John&nbsp;Homes
              </p>
              <p className="flex gap-2 my-auto text-[14px] font-[500] gray">
                <img src={EnvelopeSimple} alt="EnvelopeSimple" />
                james324@aol.com
              </p>
              <p className="flex gap-2 my-auto text-[14px] font-[500] gray">
                {" "}
                <img src={UserRectangle} alt="UserRectangle" />
                CU32323
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="my-auto bg_black rounded-[12px] border-[1px] border-[#666666] p-[15px] mt-5">
          <div className="lg:flex justify-between gap-3">
            {/* Created  */}
            <div className="my-auto lg:flex md:flex sm:gap-20 gap-4">
              <div className="flex gap-x-[12px]">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={CalendarBlank}
                    alt="CalendarBlank"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Created</p>
                  <p className="white text-[20px] font-[700]">Jan 25, 2025</p>
                </div>
              </div>
              {/* Followers */}
              <div className="flex gap-x-[12px] mt-2 sm:mt-auto sm:mb-auto">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={BlackUsers}
                    alt="BlackUsers"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Followers</p>
                  <p className="white text-[20px] font-[700]">4,344</p>
                </div>
              </div>
              {/* AUM */}
              <div className="flex gap-x-[12px] mt-2 sm:mt-auto sm:mb-auto">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={CoinBlack}
                    alt="CoinBlack"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">AUM</p>
                  <p className="white text-[20px] font-[700]">$232,232</p>
                </div>
              </div>
            </div>
            {/* button */}
            <div className="mt-4 lg:mt-auto lg:mb-auto flex gap-3">
              <button
                className="w-full lg:w-[115px] flex justify-center text-[14px] font-[700] cursor-pointer border border-[1px] bg_white border-[#E8E8E8]
                             rounded-[8px] px-[15px] py-[7px] flex gap-2"
              >
                <img src={RocketLaunch} alt="RocketLaunch" className="" />
                Force&nbsp;PF
              </button>
              <button
                className="w-full lg:w-[115px] flex justify-center text-[14px] font-[700] cursor-pointer border border-[1px] bg_white border-[#E8E8E8]
                             rounded-[8px] px-[15px] py-[7px] flex gap-2"
              >
                <img src={PowerOff} alt="PowerOff" className="" /> Deactivate
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Table */}
      <div className=" bg-white rounded-[12px] p-3">
        <h1 className="my-auto text-[20] font-[700]">Strategies </h1>
        <div className="flex justify-between p-2 mt-2 border-[1px] border-[#f4f4f4] rounded-[8px] bg_lightgray5 text-left text-[12px] font-[700] gray">
          <div className="my-auto text-[12] gray font-[700]">
            Strategy name{" "}
          </div>
          <div className="my-auto text-[12] gray font-[700]">Visibility</div>
        </div>
        {/* 1 */}
        {strategiesName?.length > 0 ? (
          strategiesName.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between gap-10 py-2 mt-2 rounded-[8px] 
                       text-left text-[12px] font-[700] gray"
              >
                <div className="relative flex gap-2 my-auto text-[14px] font-[500] black w-full">
                  {ShowInput === item.strategy ? (
                    <>
                      <input
                        type="text"
                        defaultValue={item.strategy}
                        // onChange={(e) =>
                        //   setformvalue({ ...formvalue, StrategyName: e.target.value })
                        // }
                        placeholder="CU32323"
                        className=" w-full border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none p-[10px] py-[5px]"
                      />{" "}
                      <span className="absolute right-[10px] top-[8px] flex gap-2">
                        <img
                          onClick={() => setShowInput(null)}
                          src={GreenTick}
                          alt="GreenTick"
                          className="cursor-pointer"
                        />
                        <img
                          onClick={() => setShowInput(null)}
                          src={X}
                          alt="X"
                          className="cursor-pointer"
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      {item.strategy}
                      <img
                        src={EditIcon}
                        alt="EditIcon"
                        className="cursor-pointer"
                        onClick={() => setShowInput(item.strategy)}
                      />
                    </>
                  )}{" "}
                </div>
                {/*  */}
                <div className="text-[12] gray font-[700] my-auto">
                  {" "}
                  <div className="flex">
                    <span className="mr-2 text-[14] black font-[700] my-auto">
                      Private
                    </span>
                    <Switch
                      defaultChecked={item.Visibility === " public"}
                      onChange={onChange}
                      className=" custom-green-switch"
                    />
                    <span className="ml-2 text-[14] black font-[700] my-auto">
                      Public
                    </span>
                  </div>
                </div>
              </div>
              <hr style={{ color: "#E8E8E8" }} />
            </div>
          ))
        ) : (
          <tr>
            <td className="p-3 text-center text-gray-500" colSpan="9">
              No data found.
            </td>
          </tr>
        )}
      </div>
      {/* Table */}
      <div className="my-3 bg-white rounded-[12px] p-3">
        <div className="mb-4 flex justify-between">
          <h1 className="my-auto text-[20] font-[700]">Campaigns</h1>
          <div className="my-auto">
            <h1 className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] px-[15px] py-[7px] flex gap-2">
              <img src={Plus} alt="Plus" className="" />
              Create{" "}
            </h1>
          </div>
        </div>
        <div className=" overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-[1px] border-[#f4f4f4] rounded-[12px] bg_lightgray5 text-left text-[12px] font-[700] gray">
              <tr className="">
                <th className="py-2 px-[15px]">Campaign&nbsp;name</th>
                <th className="py-2 px-[15px]">Registrations</th>
                <th className="py-2 px-[15px]">Recruiters</th>
                <th className="py-2 px-[15px]">Levels</th>
                <th className="py-2 px-[15px]">Commission</th>
                <th className="py-2 px-[15px]">Advanced</th>
                <th className="py-2 px-[15px]">Link</th>
              </tr>
            </thead>
            <tbody>
              {TradeDetails?.length > 0 ? (
                TradeDetails.map((item, index) => (
                  <tr
                    key={index}
                    className="text-[14px] font-[500] black border-t border-[#E8E8E8]"
                  >
                    <td className="py-2 px-[15px]">{item.Campaignname}</td>
                    <td className="py-2 px-[15px]">{item.Registrations}</td>
                    <td className="py-2 px-[15px]">{item.Recruiters}</td>
                    <td className="py-2 px-[15px]">{item.Levels}</td>
                    <td className="py-2 px-[15px]">{item.Commissions}</td>
                    <td className="py-2 px-[15px]">{item.Advanced}</td>
                    <td className="py-2 px-[15px]">
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={item.Link}
                          placeholder={item.Link}
                          readOnly
                          className="w-[250px] mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px]
                                     outline-none pl-[10px] pr-[30px] py-[6px] overflow-hidden text-ellipsis whitespace-nowrap truncate"
                        />
                        <div className="absolute top-[15px] left-[14rem]">
                          {" "}
                          <img
                            src={CopyImage}
                            alt="CopyImage"
                            className="cursor-pointer"
                          />
                        </div>
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
      <div className="my-3 bg-white rounded-[12px] p-3">
        <h1 className="my-auto text-[20] font-[700]">Other Strategies From</h1>
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-4">
          {/*  */}
          <div className="my-auto flex justify-between gap-3 p-2 border-[1px] border-[#E8E8E8] rounded-[8px]">
            <div className="flex gap-2">
              <div className="my-auto">
                <img
                  src={ProfileImage}
                  alt="Strategy Icon"
                  className="w-[24px] h-[24px] rounded-full object-cover"
                />
              </div>
              <div className="">
                <h1 className="satoshi_italic text-[16px] font-[700] black my-auto">
                  XAU. USD 2
                </h1>
              </div>
            </div>
            <div className="my-auto">
              <img src={ArrowRight} alt="ArrowRight" className="" />
            </div>
          </div>
          {/*  */}
          <div className="my-auto flex justify-between gap-3 p-2 border-[1px] border-[#E8E8E8] rounded-[8px]">
            <div className="flex gap-2">
              <div className="my-auto">
                <img
                  src={ProfileImage}
                  alt="Strategy Icon"
                  className="w-[24px] h-[24px] rounded-full object-cover"
                />
              </div>
              <div className="">
                <h1 className="satoshi_italic text-[16px] font-[700] black my-auto">
                  XAU. USD 2
                </h1>
              </div>
            </div>
            <div className="my-auto">
              <img src={ArrowRight} alt="ArrowRight" className="" />
            </div>
          </div>
          {/*  */}
          <div className="my-auto flex justify-between gap-3 p-2 border-[1px] border-[#E8E8E8] rounded-[8px]">
            <div className="flex gap-2">
              <div className="my-auto">
                <img
                  src={ProfileImage}
                  alt="Strategy Icon"
                  className="w-[24px] h-[24px] rounded-full object-cover"
                />
              </div>
              <div className="">
                <h1 className="satoshi_italic text-[16px] font-[700] black my-auto">
                  XAU. USD 2
                </h1>
              </div>
            </div>
            <div className="my-auto">
              <img src={ArrowRight} alt="ArrowRight" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
