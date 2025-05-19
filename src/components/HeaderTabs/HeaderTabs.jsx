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
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const HeaderTabs = () => {
  const [showBG, setshowBG] = useState("browse");

  return (
    <div>
      {" "}
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
  );
};

export default HeaderTabs;
