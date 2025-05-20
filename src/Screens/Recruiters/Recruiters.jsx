import React, { useState } from "react";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";
import { Breadcrumb } from "antd";
import { Users } from "../../assets/svgs";
import {
  CoinBlack,
  ShareBlackIcon,
  Strategies,
  FollowerColoredDB,
  TotalPnl,
  DespositWallet,
  RecruiterStrucute,
  UserGuide,
} from "../../assets/svgs/Followers/FollowersIndex";
import RecruitersDashboard from "./RecruitersDashboard/RecruitersDashboard";
import RecruitersWallet from "./RecruitersWallet/RecruitersWallet";
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const Recruiters = () => {
  const [FollowerTabs, setFollowerTabs] = useState("Dashboard");

  return (
    <div className="p-5">
      <HeaderTabAndBreadCrumb />

      {/* Followers Hub header */}
      <div className="my-5">
        <div className=" bg_primaryGreen p-[25px] rounded-[12px]">
          <div className="flex justify-between gap-5">
            <h1 className="text-[40px] font-[700] black">Recruiter Hub</h1>
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
              {/* Total Commissions */}
              <div className="flex gap-x-[16px]">
                <div className="bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={CoinBlack}
                    alt="CoinBlack"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">
                    Total Commissions
                  </p>
                  <p className="white text-[20px] font-[700]">99,434 USD</p>
                </div>
              </div>
              {/* Deposits */}
              <div className="flex gap-x-[16px]">
                <div className="bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={DespositWallet}
                    alt="DespositWallet"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Deposits </p>
                  <p className="white text-[20px] font-[700]">99,434 USD</p>
                </div>
              </div>
              {/* Total PnL  */}
              <div className="flex gap-x-[16px]">
                <div className="bg_primaryGreen rounded-[8px] flex justify-center w-[48px] h-[48px]">
                  <img
                    src={RecruiterStrucute}
                    alt="RecruiterStrucute"
                    className="item-center mt-3 w-[24px] h-[24px]"
                  />
                </div>
                <div className="lightgray my-auto">
                  <p className="lightgray text-[14px] font-[500]">Structure</p>
                  <p className="white text-[20px] font-[700]">4343</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* FollowersTabs */}
      <div className="my-5 flex justify-between gap-2">
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
                    FollowerTabs === "RecruiterWallet"
                      ? "bg_white font-[700]"
                      : "bg_lightgray2"
                  }
               `}
              onClick={() => setFollowerTabs("RecruiterWallet")}
            >
              {FollowerTabs === "RecruiterWallet" ? (
                <img src={Strategies} alt="Strategies" />
              ) : (
                <img src={Strategies} alt="Strategies" />
              )}
              <span
                className={`text-[14px] my-auto ${
                  FollowerTabs === "RecruiterWallet" ? "black" : "gray"
                }`}
              >
                Recruiter Wallet
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* {} */}
      <div className="">
        {FollowerTabs === "Dashboard" ? (
          <RecruitersDashboard />
        ) : (
          <RecruitersWallet />
        )}
      </div>
    </div>
  );
};

export default Recruiters;
