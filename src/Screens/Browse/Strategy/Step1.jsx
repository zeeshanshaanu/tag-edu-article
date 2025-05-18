import React, { useState } from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { StrategyFtn } from "../../../Store/StrategySlice/StrategySlice";
import {
  ArrowLeftBlack,
  ArrowRight,
  Heart,
  BlackUsers,
} from "../../../assets/svgs/index";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const Step1 = () => {
  const initialValue = {
    StrategyName: "",
    StrategyType: "",
    Leverage: "",
    FollowerApproval: "",
    PerformanceFee: "",
    Interval: "",
    PerformanceFeeLogic: "",
    ManagementFee: "",
    TimeRegistrationFee: "",
    MinimumInvestmentAmount: "",
    MinimumInvestmentPeriod: "",
  };
  const dispatch = useDispatch();
  const [formvalue, setformvalue] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formvalue);
    // Handle your submission logic here
  };
  return (
    <div>
      <div className="bg_white rounded-[12px] p-5 ">
        <h1 className="black text-[20px] font-[700]">Strategy Configuration</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">Image Upload...</div>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
            {/* StrategyName */}
            <div className="lg:col-span-2">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Strategy Name
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.StrategyName}
                onChange={(e) =>
                  setformvalue({ ...formvalue, StrategyName: e.target.value })
                }
                placeholder="Your Strategy Name"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
              />{" "}
            </div>
            {/* StrategyType */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Account Type
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Select Type"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.StrategyType}
                onChange={(e) =>
                  setformvalue({ ...formvalue, StrategyType: e.target.value })
                }
              >
                <option value="" disabled>
                  Select Type{" "}
                </option>
                <option value={12}>Balance</option>
                <option value={24}>Bonus</option>
              </select>
            </div>
            {/* Leverage */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Leverage
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Select Type"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.Leverage}
                onChange={(e) =>
                  setformvalue({ ...formvalue, Leverage: e.target.value })
                }
              >
                <option value="" disabled>
                  Select Leverage{" "}
                </option>
                <option value={12}>25X</option>
                <option value={24}>50X</option>
                <option value={24}>75X</option>
                <option value={24}>100X</option>
              </select>
            </div>
            {/* Follower Approval */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Follower Approval{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Follower Approval"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.FollowerApproval}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    FollowerApproval: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Follower Approval{" "}
                </option>
                <option value={12}>Yes</option>
                <option value={24}>No</option>
              </select>
            </div>
            {/* Performance Fee */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Performance Fee{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Performance Fee"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.PerformanceFee}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    PerformanceFee: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Follower Approval{" "}
                </option>
                <option value={12}>100</option>
                <option value={24}>500</option>
              </select>
            </div>
            {/* Performance Fee */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Interval{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Interval"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.Interval}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Interval: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Follower Approval{" "}
                </option>
                <option value={12}>100</option>
                <option value={24}>500</option>
              </select>
            </div>
            {/* Performance Fee Logic */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Performance Fee Logic{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Performance Fee Logic"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.PerformanceFeeLogic}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    PerformanceFeeLogic: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Performance Fee Logic{" "}
                </option>
                <option value={12}>100</option>
                <option value={24}>500</option>
              </select>
            </div>
            {/* Management Fee */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Management Fee{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Management Fee"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.ManagementFee}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    ManagementFee: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Management Fee{" "}
                </option>
                <option value={12}>100</option>
                <option value={24}>500</option>
              </select>
            </div>
            {/* Time Registration Fee */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Time Registration Fee{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Time Registration Fee"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.TimeRegistrationFee}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    TimeRegistrationFee: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Management Fee{" "}
                </option>
                <option value={12}>100</option>
                <option value={24}>500</option>
              </select>
            </div>
            {/* Minimum Investment Amount*/}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Minimum Investment Amount{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Minimum Investment Amount"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.MinimumInvestmentAmount}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    MinimumInvestmentAmount: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Minimum Investment Amount{" "}
                </option>
                <option value={12}>100</option>
                <option value={24}>500</option>
              </select>
            </div>
            {/* Minimum Investment Period*/}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Minimum Investment Period{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </label>
              <br />
              <select
                required
                // style={{ padding: "12px 10px" }}
                placeholder="Minimum Investment Period"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.MinimumInvestmentPeriod}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    MinimumInvestmentPeriod: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Minimum Investment Period{" "}
                </option>
                <option value={12}>100</option>
                <option value={24}>500</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="mt-5" style={{ color: "#E8E8E8" }} />
        <div className="mt-5 flex justify-between gap-4">
          <div className="my-auto">
            <div className="my-auto">
              <button
                onClick={() => dispatch(StrategyFtn("Step0"))}
                className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] px-[15px] py-[7px] flex gap-2"
              >
                <img src={ArrowLeftBlack} alt="ArrowRight" className="" /> Back
              </button>
            </div>
          </div>
          <div className="my-auto">
            {/* 1 */}
            <div className="flex gap-3 mt-3">
              <div className="flex gap-2">
                <h1 className="text-[16px] black font-[700] bg_lightgray5 rounded-full py-[4px] px-[12px] flex justify-center">
                  1
                </h1>
                <div className="my-auto border lightgray3 w-[30px]"></div>
                <h1 className="text-[16px] lightgray font-[700] bg_lightgray5 rounded-full py-[4px] px-[12px] flex justify-center">
                  2
                </h1>
              </div>
            </div>
          </div>
          <div className="my-auto">
            <button
              onClick={() => dispatch(StrategyFtn("Step2"))}
              className="black cursor-pointer bg_primaryGreen rounded-[8px] font-[500] px-[20px] py-[7px] flex gap-2"
            >
              Next
              <img src={ArrowRight} alt="ArrowRight" className="" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
