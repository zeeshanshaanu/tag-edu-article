import { useState } from "react";
import { Breadcrumb } from "antd";
import {
  MagnifyingGlass,
  MagnifyingGlassBlack,
  Users,
  Handshake,
  SuitcaseSimple,
  BlackSuitcaseSimple,
  BlackHandshake,
  BlackUsers,
} from "../../assets/svgs";
// import FollowersHubheader from "./FollowersHubheader";
import {
  Strategies,
  ChartLineUp,
  FollowerColoredDB,
  DespositWallet,
  TotalBlce,
  TotalPnl,
  TotalRoi,
  UnrealizedPnL,
  UserGuide,
} from "../../assets/svgs/Followers/FollowersIndex";
import FollowersDashboard from "./FollowersDashboard";
import FollowersStrategies from "./FollowersStrategies";
import FollowersTrade from "./FollowersTrade";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const Followers = () => {
  const [showBG, setshowBG] = useState("browse");
  const [FollowerTabs, setFollowerTabs] = useState("Dashboard");

  return (
    <div className="p-5">
      {/* Breadcurm and Tabs */}
      <div className="flex justify-between gap-4 w-full">
        <div className="my-auto">
          <Breadcrumb
            items={[
              {
                title: (
                  <span className="flex gap-1">
                    <img src={Users} alt="Users" />
                    <span className=" gray font-[500] text-[14px] my-auto">
                      Followers
                    </span>
                  </span>
                ),
              },
              {
                title: (
                  <span className="black font-[700] text-[14px]">
                    Dashboard
                  </span>
                ),
              },
            ]}
          />
        </div>
        {/* Tabs */}
        <div className="bg_white rounded-[8px] p-[3px] flex gap-1">
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              showBG === "browse" && "bg_lightgreen font-[700]"
            }`}
            onClick={() => setshowBG("browse")}
          >
            {showBG === "browse" ? (
              <img src={MagnifyingGlassBlack} alt="MagnifyingGlassBlack" />
            ) : (
              <img src={MagnifyingGlass} alt="MagnifyingGlass" />
            )}
            <span
              className={`text-[14px] my-auto ${
                showBG === "browse" ? "black" : "gray"
              }`}
            >
              Browse
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200  ${
              showBG === "followers" && "bg_lightgreen font-[700]"
            }`}
            onClick={() => setshowBG("followers")}
          >
            {showBG === "followers" ? (
              <img src={BlackUsers} alt="MagnifyingGlass" />
            ) : (
              <img src={Users} alt="MagnifyingGlassBlack" />
            )}
            <span
              className={`text-[14px] my-auto ${
                showBG === "followers" ? "black" : "gray"
              }`}
            >
              Followers
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              showBG === "providers" && "bg_lightgreen font-[700]"
            }`}
            onClick={() => setshowBG("providers")}
          >
            {" "}
            {showBG === "providers" ? (
              <img src={BlackHandshake} alt="BlackHandshake" />
            ) : (
              <img src={Handshake} alt="Handshake" />
            )}
            <span
              className={`text-[14px] my-auto ${
                showBG === "providers" ? "black" : "gray"
              }`}
            >
              Providers
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              showBG === "recruiters" && "bg_lightgreen font-[700]"
            }`}
            onClick={() => setshowBG("recruiters")}
          >
            {showBG === "recruiters" ? (
              <img src={BlackSuitcaseSimple} alt="BlackSuitcaseSimple" />
            ) : (
              <img src={SuitcaseSimple} alt="SuitcaseSimple" />
            )}
            <span
              className={`text-[14px] my-auto ${
                showBG === "recruiters" ? "black" : "gray"
              }`}
            >
              Recruiters
            </span>
          </div>
        </div>
      </div>
      {/* Followers Hub header */}
      <div className="my-5">
        <div className=" bg_primaryGreen p-[25px] rounded-[12px]">
          <div className="flex justify-between gap-5">
            <h1 className="text-[40px] font-[700] black">Follower Hub</h1>
            <div className="my-auto">
              <h1
                className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-2"
              >
                <img src={UserGuide} alt="UserGuide" className="" /> User Guide
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="my-auto bg_black rounded-[12px] border-[2.5px] border-[#666666] p-[20px] mt-5">
            <div className="grid grid:cols-1 lg:grid-cols-5 md:grid-cols-3 gap-2">
              {/* Total Balance */}
              <div className="flex gap-x-[16px]">
                <div className="bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalBlce}
                    alt="TotalBlce"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Total Balance{" "}
                  </p>
                  <p className="white text-[20px] font-[700]">99,434 USD</p>
                </div>
              </div>
              {/* Total ROI  */}
              <div className="flex gap-x-[16px]">
                <div className="bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalRoi}
                    alt="TotalRoi"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Total ROI </p>
                  <p className="white text-[20px] font-[700]">+18%</p>
                </div>
              </div>
              {/* Total PnL  */}
              <div className="flex gap-x-[16px]">
                <div className="bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalPnl}
                    alt="TotalPnl"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Total PnL </p>
                  <p className="white text-[20px] font-[700]">+14,343 USD</p>
                </div>
              </div>
              {/*Unrealized PnL  */}
              <div className="flex gap-x-[16px]">
                <div className="bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={UnrealizedPnL}
                    alt="UnrealizedPnL"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Unrealized PnL
                  </p>
                  <p className="white text-[20px] font-[700]">-4,343 USD</p>
                </div>
              </div>

              <div className="w-full my-auto flex justify-end">
                <h1
                  className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-2"
                >
                  <img src={DespositWallet} alt="DespositWallet" className="" />{" "}
                  Deposit
                </h1>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* FollowersTabs */}
      <div className="my-5">
        <div className="rounded-[8px]">
          {/* Tabs */}
          <div className="flex gap-[10px]">
            <div
              className={`cursor-pointer flex rounded-[8px] px-[16px] py-[13px] font-[500] 
                 hover:bg-[#F9F9F9] transition-colors duration-200 ${
                   FollowerTabs === "Dashboard"
                     ? "bg_white font-[700]"
                     : "bg_lightgray2"
                 }`}
              onClick={() => setFollowerTabs("Dashboard")}
            >
              <span className="my-auto">
                {FollowerTabs === "Dashboard" ? (
                  <img
                    src={FollowerColoredDB}
                    alt="FollowerColoredDB"
                    className="w-[25px] h-[20px]"
                  />
                ) : (
                  <img
                    src={FollowerColoredDB}
                    alt="FollowerColoredDB"
                    className="w-[25px] h-[20px]"
                  />
                )}
              </span>
              <span
                className={` my-auto text-[14px] my-auto ${
                  FollowerTabs === "Dashboard" ? "black" : "gray"
                }`}
              >
                Dashboard
              </span>
            </div>
            {/*  */}
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[13px] font-[500] 
                 hover:bg-[#F9F9F9] transition-colors duration-200 
                  ${
                    FollowerTabs === "Strategies"
                      ? "bg_white font-[700]"
                      : "bg_lightgray2"
                  }
               `}
              onClick={() => setFollowerTabs("Strategies")}
            >
              {FollowerTabs === "Strategies" ? (
                <img src={Strategies} alt="Strategies" />
              ) : (
                <img src={Strategies} alt="Strategies" />
              )}
              <span
                className={`text-[14px] my-auto ${
                  FollowerTabs === "Strategies" ? "black" : "gray"
                }`}
              >
                Strategies
              </span>
            </div>
            {/*  */}
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[13px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
                FollowerTabs === "Trades"
                  ? "bg_white font-[700]"
                  : "bg_lightgray2"
              }`}
              onClick={() => setFollowerTabs("Trades")}
            >
              {" "}
              {FollowerTabs === "Trades" ? (
                <img src={ChartLineUp} alt="ChartLineUp" />
              ) : (
                <img src={ChartLineUp} alt="ChartLineUp" />
              )}
              <span
                className={`text-[14px] my-auto ${
                  FollowerTabs === "Trades" ? "black" : "gray"
                }`}
              >
                Trades
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* {} */}
      <div className=" bg_white p-[20px]">
        {FollowerTabs === "Dashboard" ? (
          <FollowersDashboard />
        ) : FollowerTabs === "Strategies" ? (
          <FollowersStrategies />
        ) : (
          <FollowersTrade />
        )}
      </div>
    </div>
  );
};

export default Followers;
