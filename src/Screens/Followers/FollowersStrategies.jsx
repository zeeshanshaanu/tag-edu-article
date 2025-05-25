import React, { useState } from "react";
import InActiveTable from "./FollowerStrategiesTable&Details/InActiveTable";
import ActiveTable from "./FollowerStrategiesTable&Details/ActiveTable";
import FavoritesTable from "./FollowerStrategiesTable&Details/FavoritesTable";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const Followersinactive = () => {
  const [Strategies, setStrategies] = useState("active");

  return (
    <div>
      {/* FollowersTabs */}
      <div className="">
        <div className="rounded-[8px]">
          {/* Tabs */}
          <div className="inline-flex gap-[5px] bg_lightgray5 p-1 rounded-[8px]">
            <div
              className={`cursor-pointer flex rounded-[8px] px-[12px] py-[7px] font-[500] 
                         hover:bg-[#F9F9F9] transition-colors duration-200 ${
                           Strategies === "active"
                             ? "bg_white font-[700]"
                             : "bg_lightgray2"
                         }`}
              onClick={() => setStrategies("active")}
            >
              <span
                className={` my-auto text-[14px] my-auto ${
                  Strategies === "active" ? "black" : "gray"
                }`}
              >
                Active
              </span>
            </div>
            {/*  */}
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[12px] py-[7px] font-[500] 
                         hover:bg-[#F9F9F9] transition-colors duration-200 
                          ${
                            Strategies === "inactive"
                              ? "bg_white font-[700]"
                              : "bg_lightgray2"
                          }
                       `}
              onClick={() => setStrategies("inactive")}
            >
              <span
                className={`text-[14px] my-auto ${
                  Strategies === "inactive" ? "black" : "gray"
                }`}
              >
                Inactive
              </span>
            </div>
            {/*  */}
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[12px] py-[7px] font-[500] hover:bg-[#F9F9F9] transition-colors duration-200 ${
                Strategies === "favorites"
                  ? "bg_white font-[700]"
                  : "bg_lightgray2"
              }`}
              onClick={() => setStrategies("favorites")}
            >
              <span
                className={`text-[14px] my-auto ${
                  Strategies === "favorites" ? "black" : "gray"
                }`}
              >
                Favorites
              </span>
            </div>
          </div>
          {/* Tables Components */}
          <div className=" ">
            {Strategies === "active" ? (
              <ActiveTable />
            ) : Strategies === "inactive" ? (
              <InActiveTable />
            ) : (
              <FavoritesTable />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followersinactive;
