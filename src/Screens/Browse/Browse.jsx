import React, { useState } from "react";
import { blackFire } from "../../assets/svgs";
import TradingCardTabs from "./TradingCardTabs";
import HeaderTabAndBreadCrumb from "../../components/HeaderTabs/HeaderTabAndBreadCrumb";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const Browse = () => {
  return (
    <div className="p-3">
      <HeaderTabAndBreadCrumb />
      {/* Browse Pro Traders */}
      <div className="my-4 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="lg:flex justify-between gap-5">
          <div className="">
            <h1 className="lg:text-[40px] text-[30px] font-[700] black">
              Browse Pro Traders
            </h1>
            <p className="lg:text-[16px] text-[14px] font-[500] black">
              Copy trades from proven
            </p>
          </div>
          <div className="mt-3 lg:mt-0 bg_black rounded-[12px] border-[2.5px] border-[#666666] p-[18px]">
            <div className="flex gap-x-[16px] w-[270px]">
              <div className="lightgreenBoxShahdow my-auto bg_primaryGreen rounded-[8px] flex items-center justidfy-center pl-[14px] w-[55px] h-[45px]">
                <img
                  src={blackFire}
                  alt="blackFire"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="my-auto flex gap-2">
                <h1 className="white my-auto text-[40px] font-[600]">345</h1>
                <div className="lightgray my-auto pr-[20px]">
                  <p className="">Active strategies </p>
                </div>
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
