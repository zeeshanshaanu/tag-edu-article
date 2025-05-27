import React, { useState } from "react";

import {
  CoinBlack,
  ShareBlackIcon,
  Strategies,
  ChartLineUp,
  FollowerColoredDB,
  TotalPnl,
  TotalRoi,
  UnrealizedPnL,
  UserGuide,
} from "../../assets/svgs/Followers/FollowersIndex";
import ProviderDashboard from "./ProvidersDashboard/ProvidersDashboard";
import ProvidersDetails from "./ProvidersDetails/ProvidersDetails";
import ProviderWallet from "./ProviderWallet/ProviderWallet";
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const Providers = () => {
  const [FollowerTabs, setFollowerTabs] = useState("Dashboard");

  return (
    <div className="p-3">
      <HeaderTabAndBreadCrumb />

      {/* Followers Hub header */}
      <div className="my-5">
        <div className="HeaderGreenBGimage p-[20px] rounded-[12px]">
          <div className="flex justify-between gap-5">
            <h1 className="satoshi_italic lg:text-[40px] text-[30px] font-[900] black">
              Provider Hub
            </h1>
            <div className="my-auto">
              <button
                className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-2"
              >
                <img src={UserGuide} alt="UserGuide" className="" />
                &nbsp;User&nbsp;Guide
              </button>
            </div>
          </div>
          {/*  */}
          <div className="my-auto bg_black rounded-[12px] border-[2.5px] border-[#666666] p-[20px] mt-5">
            <div className="grid grid:cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 gap-2">
              {/* Total Balance */}
              <div className="flex gap-x-[16px]">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={CoinBlack}
                    alt="CoinBlack"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Total&nbsp;AUM&nbsp;-&nbsp;All&nbsp;Details
                  </p>
                  <p className="white text-[20px] font-[700]">99,434 USD</p>
                </div>
              </div>
              {/* Total ROI  */}
              <div className="flex gap-x-[16px]">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalRoi}
                    alt="TotalRoi"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Total&nbsp;ROI{" "}
                  </p>
                  <p className="white text-[20px] font-[700]">+18%</p>
                </div>
              </div>
              {/* Total PnL  */}
              <div className="flex gap-x-[16px]">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={TotalPnl}
                    alt="TotalPnl"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Total&nbsp;PnL{" "}
                  </p>
                  <p className="white text-[20px] font-[700]">+14,343 USD</p>
                </div>
              </div>
              {/*Unrealized PnL  */}
              <div className="flex gap-x-[16px]">
                <div className="lightgreenBoxShahdow bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={UnrealizedPnL}
                    alt="UnrealizedPnL"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Total&nbsp;Profit&nbsp;Share&nbsp;Earned
                  </p>
                  <p className="white text-[20px] font-[700]">-4,343 USD</p>
                </div>
              </div>

              {/* <div className="w-full my-auto flex justify-end">
                <h1
                  className="text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-2"
                >
                  <img src={ShareBlackIcon} alt="DespositWallet" className="" />{" "}
                  Share{" "}
                </h1>
              </div> */}
              <div className=" my-auto lg:flex justify-end">
                <button
                  className="w-full lg:w-[100px] flex justify-center text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-2"
                >
                  <img src={ShareBlackIcon} alt="ShareBlackIcon" className="" />{" "}
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* FollowersTabs */}
      <div className="my-1 sm:flex justify-between gap-2">
        <div className="rounded-[8px]">
          {/* Tabs */}
          <div className="flex gap-[8px]">
            <div
              className={`cursor-pointer flex rounded-[8px] px-[16px] py-[10px] font-[500] 
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
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] 
                 hover:bg-[#F9F9F9] transition-colors duration-200 
                  ${
                    FollowerTabs === "Details"
                      ? "bg_white font-[700]"
                      : "bg_lightgray2"
                  }
               `}
              onClick={() => setFollowerTabs("Details")}
            >
              {FollowerTabs === "Details" ? (
                <img src={Strategies} alt="Strategies" />
              ) : (
                <img src={Strategies} alt="Strategies" />
              )}
              <span
                className={`text-[14px] my-auto ${
                  FollowerTabs === "Details" ? "black" : "gray"
                }`}
              >
                Details
              </span>
            </div>
            {/*  */}
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
                FollowerTabs === "ProviderWallet"
                  ? "bg_white font-[700]"
                  : "bg_lightgray2"
              }`}
              onClick={() => setFollowerTabs("ProviderWallet")}
            >
              {" "}
              {FollowerTabs === "ProviderWallet" ? (
                <img src={ChartLineUp} alt="ChartLineUp" />
              ) : (
                <img src={ChartLineUp} alt="ChartLineUp" />
              )}
              <span
                className={`text-[14px] my-auto ${
                  FollowerTabs === "ProviderWallet" ? "black" : "gray"
                }`}
              >
                Provider Wallet
              </span>
            </div>
          </div>
        </div>
        <div className="my-auto mt-2 md:mt-0 lg:mt-0">
          <button
            className="w-full lg:w-[110px] flex justify-center text-center text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
             rounded-[8px] px-[15px] py-[7px] flex gap-2"
          >
            <img src={UserGuide} alt="UserGuide" className="" />
            Create
          </button>
        </div>
      </div>
      {/* {} */}
      <div className="">
        {FollowerTabs === "Dashboard" ? (
          <ProviderDashboard />
        ) : FollowerTabs === "Details" ? (
          <ProvidersDetails />
        ) : (
          <ProviderWallet />
        )}
      </div>
    </div>
  );
};

export default Providers;
