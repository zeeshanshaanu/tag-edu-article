import React, { useState } from "react";
import { Breadcrumb } from "antd";
import {
  MagnifyingGlass,
  MagnifyingGlassBlack,
  Users,
  Handshake,
  SuitcaseSimple,
  blackFire,
  BlackSuitcaseSimple,
  BlackHandshake,
  BlackUsers,
} from "../../assets/svgs";
import TradingCardTabs from "./TradingCardTabs";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const Browse = () => {
  const [showBG, setshowBG] = useState("browse");

  return (
    <div className="p-5">
      <div className="flex justify-between gap-4 w-full">
        <div className="my-auto">
          <Breadcrumb
            items={[
              {
                title: (
                  <span className="flex gap-1">
                    <img src={MagnifyingGlass} alt="MagnifyingGlass" />
                    <span className=" gray font-[500] text-[14px] my-auto">
                      Browse
                    </span>
                  </span>
                ),
              },
              {
                title: (
                  <span className="black font-[700] text-[14px]">Top ROI</span>
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
      {/* Browse Pro Traders */}
      <div className="my-5 bg_primaryGreen p-[35px]  rounded-[12px]">
        <div className="flex justify-between gap-5">
          <div className="my-auto">
            <h1 className="text-[40px] font-[700] black">Browse Pro Traders</h1>
            <p className="text-[16px] font-[500] black">
              Copy trades from proven
            </p>
          </div>
          <div className="my-auto bg_black rounded-[12px] border-[2.5px] border-[#666666] p-[18px]">
            <div className="flex gap-x-[16px] justify-center">
              <div className="bg_primaryGreen rounded-[8px] flex justify-center">
                <img
                  src={blackFire}
                  alt="MagnifyingGlass"
                  className="flex justify-center item-center px-[16px]"
                />
              </div>
              <h1 className="white my-auto text-[40px] font-[600]">345</h1>
              <div className="lightgray my-auto pr-[20px]">
                <p className="">Active </p>
                <p className="">strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="CardsTab">
        <TradingCardTabs />
      </div>
    </div>
  );
};

export default Browse;
