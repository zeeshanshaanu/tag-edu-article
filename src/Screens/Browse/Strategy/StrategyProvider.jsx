import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useSelector } from "react-redux";
import { Breadcrumb } from "antd";
import { MagnifyingGlass } from "../../../assets/svgs";
import ProvidersTOS from "./ProvidersTOS";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const StrategyProvider = () => {
  const StrategySteps = useSelector((state) => state?.Strategy);
  // console.log(StrategySteps);

  return (
    <div className="p-3">
      <div className="">
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
                <span className="black font-[700] text-[14px]">
                  Become a Provider
                </span>
              ),
            },
          ]}
        />
      </div>

      {/* Browse Pro Traders */}
      <div className="my-4 HeaderGreenBGimage p-[20px] rounded-[12px]">
        <div className="flex justify-between gap-5">
          <div className="my-auto">
            <h1 className="lg:text-[40px] text-[30px] font-[700] black">
              Become A Strategy Provider
            </h1>
            <p className="text-[16px] font-[500] black">
              Let others copy your trades and earn additional income with Tag
              Copy Trading
            </p>
          </div>
        </div>
      </div>
      {StrategySteps?.Steps === "Step0" ? (
        <ProvidersTOS />
      ) : StrategySteps?.Steps === "Step1" ? (
        <Step1 />
      ) : StrategySteps?.Steps === "Step2" ? (
        <Step2 />
      ) : null}
    </div>
  );
};

export default StrategyProvider;
