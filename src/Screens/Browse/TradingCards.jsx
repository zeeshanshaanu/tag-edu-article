import React from "react";
import {
  MagnifyingGlassWhite,
  ArrowRight,
  Heart,
  BlackUsers,
  Trophy,
  TrendDown,
  Fire,
  Clock,
  Leaf,
  Star,
} from "../../assets/svgs/index";
import ProfileImage from "../../assets/Images/ProfileImage.png";
const TradingCards = () => {
  const cardsData = [
    {
      image: "Url image",
      firstName: "Easy",
      firstName: "Trading",
      amount: "1234",
      users: 10,
      likes: 20,
      roi: "30D",
      increase: "234",
      percentage: "217%",
      currentAmount: "983,743",
      max: "DD",
      pnl: "30D",
    },
    {
      image: "Url image",
      firstName: "Easy",
      firstName: "Trading",
      amount: "1234",
      users: 10,
      likes: 20,
      roi: "30D",
      increase: "234",
      percentage: "217%",
      currentAmount: "983,743",
      max: "DD",
      pnl: "30D",
    },
    {
      image: "Url image",
      firstName: "Easy",
      firstName: "Trading",
      amount: "1234",
      users: 10,
      likes: 20,
      roi: "30D",
      increase: "234",
      percentage: "217%",
      currentAmount: "983,743",
      max: "DD",
      pnl: "30D",
    },
    {
      image: "Url image",
      firstName: "Easy",
      firstName: "Trading",
      amount: "1234",
      users: 10,
      likes: 20,
      roi: "30D",
      increase: "234",
      percentage: "217%",
      currentAmount: "983,743",
      max: "DD",
      pnl: "30D",
    },
    {
      image: "Url image",
      firstName: "Easy",
      firstName: "Trading",
      amount: "1234",
      users: 10,
      likes: 20,
      roi: "30D",
      increase: "234",
      percentage: "217%",
      currentAmount: "983,743",
      max: "DD",
      pnl: "30D",
    },
    {
      image: "Url image",
      firstName: "Easy",
      firstName: "Trading",
      amount: "1234",
      users: 10,
      likes: 20,
      roi: "30D",
      increase: "234",
      percentage: "217%",
      currentAmount: "983,743",
      max: "DD",
      pnl: "30D",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="searchBar relative my-auto">
          <input
            type="text"
            placeholder="Search"
            className=" w-[280px] border border-[1.5px] border-[#E8E8E8] rounded-[8px] outline-none pl-[15px] pr-[45px] py-[7px]"
          />
          <div className="absolute bg_black top-[4px] left-[243px] w-[32px] h-[32px] rounded-[6px] flex justify-center">
            <img
              src={MagnifyingGlassWhite}
              alt="MagnifyingGlass"
              className="flex justify-center p-[7px]"
            />
          </div>
        </div>
        <div className="my-auto">
          <h1 className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] px-[15px] py-[7px] flex gap-2">
            View all <img src={ArrowRight} alt="ArrowRight" className="" />{" "}
          </h1>
        </div>
      </div>
      {/* CARDS */}
      <div className="Cards mt-5 grid grid-cols-1 lg:grid-cols-4 gap-[15px]">
        {cardsData?.length > 0 ? (
          cardsData?.map((items, index) => {
            return (
              <div
                key={index}
                style={{
                  background: `linear-gradient(0deg, #CAFD5D00 0%, #CAFD5D4D 0%, #FFFFFF 50%)`,
                  backgroundClip: "padding-box, border-box",
                  boxShadow: "0px 2px 2px 0px #CAFD5D66",
                  mixBlendMode: "multiply",
                  zIndex: 1,
                }}
                className="rounded-[8px] p-[13px] gradient-border "
              >
                <div className="flex justify-between gap-4">
                  <div className="flex gap-[12px] my-auto">
                    <div className="my-auto">
                      <img
                        src={ProfileImage}
                        alt="ProfileImage"
                        className="rounded-full w-[50px] h-[50px] object-cover"
                      />
                    </div>
                    <div className="my-auto ">
                      <h1 className="text-[16px] font-[700]">Easy Trading</h1>
                      <p className="gray text-[12px] font-[500] mt-[4px]">
                        AUM $2,345,343
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="my-auto">
                    <div className="my-auto border-[2px] border-[#E8E8E8] rounded-[8px] px-[10px] py-[5px]">
                      <div className="flex gap-[8px]">
                        <img src={BlackUsers} alt="MagnifyingGlassBlack" />
                        <h4 className="black text-[12px] font-[500]">44</h4>
                      </div>
                      <div className="flex gap-[8px]">
                        <img src={Heart} alt="MagnifyingGlassBlack" />
                        <h4 className="black text-[12px] font-[500]">22</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-4" style={{ color: "#E8E8E8" }} />
                {/*  */}
                <div className="mt-4 flex justify-between gap-5">
                  <div className="my-auto">
                    <div className="flex gap-[5px]">
                      <h3 className="my-auto text-[12px] font-[500] gray">
                        ROI
                      </h3>
                      <p className="my-auto text-[10px] font-[700] black border-[1.5px] border-[#E8E8E8] rounded-[8px] py-[2px] px-[4px]">
                        30D
                      </p>
                    </div>
                    <h1 className="green font-[700] text-[16px] mt-[4px]">
                      +234%
                    </h1>
                  </div>
                  {/* chart */}
                  <h1 className="my-auto green font-[500] text-[16px]">
                    Chart
                  </h1>
                </div>
                <hr className="mt-4" style={{ color: "#E8E8E8" }} />
                {/*  */}
                <div className="mt-3 flex gap-10">
                  <div className="my-auto">
                    <h1 className="black font-[700] text-[16px]mb-[4px] ">
                      6.79%
                    </h1>
                    <div className="flex gap-[5px]">
                      <h3 className="my-auto text-[12px] font-[500] gray">
                        Max
                      </h3>
                      <p className="my-auto text-[10px] font-[700] black border-[1.5px] border-[#E8E8E8] rounded-[8px] py-[2px] px-[4px]">
                        DD
                      </p>
                    </div>
                  </div>
                  <div className="my-auto">
                    <h1 className="black font-[700] text-[16px]mb-[4px] ">
                      $843,434
                    </h1>
                    <div className="flex gap-[5px] my-auto">
                      <h3 className="my-auto text-[12px] font-[500] gray">
                        Pnl
                      </h3>
                      <p className="my-auto text-[10px] font-[700] black border-[1.5px] border-[#E8E8E8] rounded-[8px] py-[2px] px-[4px]">
                        30D
                      </p>
                    </div>
                  </div>
                </div>
                {/* detail  button*/}
                <div className="mt-[20px]">
                  <h1 className="bg_white cursor-pointer text-center border border-[1.5px] border-[#E8E8E8] rounded-[8px] px-[15px] py-[7px] flex justify-center gap-2">
                    Details{" "}
                    <img src={ArrowRight} alt="ArrowRight" className="" />{" "}
                  </h1>
                </div>
              </div>
            );
          })
        ) : (
          <span className="text-center p-10 grid grid-cols-1">No Trads</span>
        )}
      </div>
    </div>
  );
};

export default TradingCards;
