import React, { useState } from "react";
import {
  Users,
  BlackUsers,
  ColoredTrophy,
  TrendDown,
  Fire,
  Clock,
  Leaf,
  Star,
} from "../../assets/svgs";
import TradingCards from "./TradingCards";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const TradingCardTabs = () => {
  const [showBG, setshowBG] = useState("toproi");

  return (
    <div className="rounded-[8px]">
      {/* Tabs */}
      <div className="sm:flex gap-[8px] max-w-[100%] overflow-auto">
        <div
          className={`cursor-pointer flex rounded-[8px] px-[16px] py-[10px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 ${
              showBG === "toproi" ? "bg_white font-[700]" : "bg_lightgray2"
            }`}
          onClick={() => setshowBG("toproi")}
        >
          <span className="my-auto">
            {showBG === "toproi" ? (
              <img
                src={ColoredTrophy}
                alt="MagnifyingGlassBlack"
                className="w-[25px] h-[20px]"
              />
            ) : (
              <img
                src={ColoredTrophy}
                alt="MagnifyingGlass"
                className="w-[25px] h-[20px]"
              />
            )}
          </span>
          <span
            className={` my-auto text-[14px] my-auto ${
              showBG === "toproi" ? "black" : "gray"
            }`}
          >
            Top&nbsp;ROI
          </span>
        </div>
        {/*  */}
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] 
            hover:bg-[#F9F9F9] transition-colors duration-200 
             ${
               showBG === "lowestdrawdown"
                 ? "bg_white font-[700]"
                 : "bg_lightgray2"
             }
          `}
          onClick={() => setshowBG("lowestdrawdown")}
        >
          {showBG === "lowestdrawdown" ? (
            <img src={TrendDown} alt="MagnifyingGlass" />
          ) : (
            <img src={TrendDown} alt="MagnifyingGlassBlack" />
          )}
          <span
            className={`text-[14px] my-auto ${
              showBG === "lowestdrawdown" ? "black" : "gray"
            }`}
          >
            Lowest&nbsp;Drawdown
          </span>
        </div>
        {/*  */}
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
            showBG === "mostpopular" ? "bg_white font-[700]" : "bg_lightgray2"
          }`}
          onClick={() => setshowBG("mostpopular")}
        >
          {" "}
          {showBG === "mostpopular" ? (
            <img src={Fire} alt="BlackHandshake" />
          ) : (
            <img src={Fire} alt="Handshake" />
          )}
          <span
            className={`text-[14px] my-auto ${
              showBG === "mostpopular" ? "black" : "gray"
            }`}
          >
            Most&nbsp;popular
          </span>
        </div>
        {/*  */}
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
            showBG === "oldest" ? "bg_white font-[700]" : "bg_lightgray2"
          }`}
          onClick={() => setshowBG("oldest")}
        >
          {showBG === "oldest" ? (
            <img src={Clock} alt="BlackSuitcaseSimple" />
          ) : (
            <img src={Clock} alt="SuitcaseSimple" />
          )}
          <span
            className={`text-[14px] my-auto ${
              showBG === "oldest" ? "black" : "gray"
            }`}
          >
            Oldest
          </span>
        </div>
        {/*  */}
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
            showBG === "newest" ? "bg_white font-[700]" : "bg_lightgray2"
          }`}
          onClick={() => setshowBG("newest")}
        >
          {showBG === "newest" ? (
            <img src={Leaf} alt="BlackSuitcaseSimple" />
          ) : (
            <img src={Leaf} alt="SuitcaseSimple" />
          )}
          <span
            className={`text-[14px] my-auto ${
              showBG === "newest" ? "black" : "gray"
            }`}
          >
            Newest
          </span>
        </div>
        {/*  */}
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
            showBG === "featured" ? "bg_white font-[700]" : "bg_lightgray2"
          }`}
          onClick={() => setshowBG("featured")}
        >
          {showBG === "featured" ? (
            <img src={Star} alt="BlackSuitcaseSimple" />
          ) : (
            <img src={Star} alt="SuitcaseSimple" />
          )}
          <span
            className={`text-[14px] my-auto ${
              showBG === "featured" ? "black" : "gray"
            }`}
          >
            Featured
          </span>
        </div>
        {/*  */}
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[10px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
            showBG === "alltraders" ? "bg_white font-[700]" : "bg_lightgray2"
          }`}
          onClick={() => setshowBG("alltraders")}
        >
          {showBG === "alltraders" ? (
            <img src={BlackUsers} alt="BlackSuitcaseSimple" />
          ) : (
            <img src={Users} alt="SuitcaseSimple" />
          )}
          <span
            className={`text-[14px] my-auto ${
              showBG === "alltraders" ? "black" : "gray"
            }`}
          >
            All&nbsp;Traders
          </span>
        </div>
      </div>
      <div className="mt-1 bg_white p-[20px] rounded-[12px]">
        <TradingCards />
      </div>
    </div>
  );
};

export default TradingCardTabs;
