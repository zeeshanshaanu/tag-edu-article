import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenModelFtn } from "../../../Store/StrategySlice/StrategySlice";
import ProfileImage from "../../../assets/Images/ProfileImage.png";
import { Slider, Modal, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const CopyTradeModel = () => {
  const dispatch = useDispatch();
  const StrategySteps = useSelector((state) => state?.Strategy);
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  return (
    <div>
      <Modal
        footer={false}
        centered
        width={800}
        // height={300}
        title={false}
        open={StrategySteps?.OpenModel}
        onOk={() => dispatch(OpenModelFtn(false))}
        onCancel={() => dispatch(OpenModelFtn(false))}
      >
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-10 lg:grid-cols-3 gap-2">
            {/* // ///////////////////////   *****************   /////////////////////// */}
            <div className="col-span-4 bg_black rounded-[12px] p-4">
              <center>
                <img
                  style={{
                    boxShadow: "0px 5px 90px 25px #CAFD5D80",
                  }}
                  src={ProfileImage}
                  alt="Strategy Icon"
                  className="mt-2 w-[80px] h-[80px] rounded-full object-cover border-[1px] border-[#ffffff]"
                />
                <h1 className="text-[20px] font-[500] text-white mt-4">
                  Anjuta
                </h1>
              </center>
              <div className="my-4 flex gap-[15px]">
                <div
                  style={{
                    boxShadow: "0px 1px 10px 2px #CAFD5D80",
                  }}
                  className="w-[130px] bg_primaryGreen px-3 py-2 rounded-[8px] text-center"
                >
                  <h1 className="text-[14px] font-[500] black">AUM</h1>
                  <p className="text-[16px] font-[700] black">$1,323,343.23</p>
                </div>
                <div
                  style={{
                    boxShadow: "0px 1px 10px 2px #CAFD5D80",
                  }}
                  className="w-[130px] bg_primaryGreen px-3 py-2 rounded-[8px] text-center"
                >
                  <h1 className="text-[14px] font-[500] black">Max DD</h1>
                  <p className="text-[16px] font-[700] black">45%</p>
                </div>
              </div>
              {/*  */}
              <div className="mb-5 mt-10">
                {/*  */}
                <div className="flex gap-2">
                  <h5 className="my-auto text-[14px] font-[500] gray">
                    Performance Fee
                  </h5>
                  <div className=" flex-grow border-b border-dashed border-[#4B4B4B]"></div>
                  <h5 className="my-auto text-[14px] font-[500] text-white">
                    15%
                  </h5>
                </div>
                {/*  */}
                <div className="flex gap-2 mt-[20px]">
                  <h5 className="my-auto text-[14px] font-[500] gray">
                    Schedule
                  </h5>
                  <div className=" flex-grow border-b border-dashed border-[#4B4B4B]"></div>
                  <h5 className="my-auto text-[14px] font-[500] text-white">
                    Weekly
                  </h5>
                </div>
                {/*  */}
                <div className="flex gap-2 mt-[20px]">
                  <h5 className="my-auto text-[14px] font-[500] gray">
                    Min Investment Period
                  </h5>
                  <div className=" flex-grow border-b border-dashed border-[#4B4B4B]"></div>
                  <h5 className="my-auto text-[14px] font-[500] text-white">
                    1 Month
                  </h5>
                </div>
                {/*  */}
                <div className="flex gap-2 mt-[20px]">
                  <h5 className="my-auto text-[14px] font-[500] gray">
                    Mgt Fee
                  </h5>
                  <div className=" flex-grow border-b border-dashed border-[#4B4B4B]"></div>
                  <h5 className="my-auto text-[14px] font-[500] text-white">
                    2% Weekly
                  </h5>
                </div>
                {/*  */}
                <div className="flex gap-2 mt-[20px]">
                  <h5 className="my-auto text-[14px] font-[500] gray">
                    Join Fee
                  </h5>
                  <div className=" flex-grow border-b border-dashed border-[#4B4B4B]"></div>
                  <h5 className="my-auto text-[14px] font-[500] text-white">
                    $999
                  </h5>
                </div>
              </div>
            </div>
            {/* // ///////////////////////   *****************   /////////////////////// */}

            <div className="col-span-6 p-4">
              <h1 className="black text-[20px] font-[700]">Copy Strategy</h1>
              {/*  */}
              <div className="mt-4">
                {/* Investment */}
                <div className="lg:col-span-2">
                  <label htmlFor="" className="text-[12px] font-[700] black">
                    Investment
                  </label>
                  <br />
                  <input
                    type="number"
                    min={1000}
                    max={100000}
                    required
                    // value={formvalue.StrategyName}
                    // onChange={(e) =>
                    //   setformvalue({ ...formvalue, StrategyName: e.target.value })
                    // }
                    placeholder="Min $1,000"
                    className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                  />{" "}
                  <span className="text-[12px] font-[700] gray">
                    Available $34,434.34
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="mt-4">
                {/*  Account type */}
                <div className="lg:col-span-2">
                  <label htmlFor="" className="text-[12px] font-[700] black">
                    Account type
                  </label>
                  <br />
                  <input
                    type="text"
                    required
                    // value={formvalue.StrategyName}
                    // onChange={(e) =>
                    //   setformvalue({ ...formvalue, StrategyName: e.target.value })
                    // }
                    placeholder="Amplify 12x"
                    className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                  />{" "}
                  <span className="text-[12px] font-[700] gray">
                    * Please note, this strategy runs on an Amplify account If
                    the manager loses more than lOx of starting balance, your
                    account will be liquidated.
                  </span>
                </div>
              </div>
              {/*  slider*/}
              <div className="mt-4">
                <label htmlFor="" className="text-[12px] font-[700] black">
                  Risk Multiplier{" "}
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
                <Slider
                  defaultValue={30}
                  disabled={disabled}
                  className="custom-slider"
                />

                <div className="flex justify-between text-sm text-gray-500">
                  <span className="black text-[12px] font-[500]">Low</span>
                  <span className="black text-[12px] font-[500]">High</span>
                </div>
              </div>

              {/*  */}
              <div className="mt-4">
                {/*  Leverage */}
                <div className="lg:col-span-2">
                  <label htmlFor="" className="text-[12px] font-[700] black">
                    Leverage
                  </label>
                  <br />
                  <input
                    type="text"
                    required
                    // value={formvalue.StrategyName}
                    // onChange={(e) =>
                    //   setformvalue({ ...formvalue, StrategyName: e.target.value })
                    // }
                    placeholder="Amplify 12x"
                    className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                  />{" "}
                </div>
              </div>
              {/*  */}
              <div className="mt-4">
                <label className="flex items-center gap-2 cursor-pointer mt-5">
                  <input
                    type="checkbox"
                    className="peer hidden"
                    id="customCheck"
                  />
                  <div className="w-[24px] h-[24px] rounded-[8px] bg-white border border-[#CAFD5D] peer-checked:bg-[#CAFD5D] flex items-center justify-center transition-colors">
                    <svg
                      className="hidden peer-checked:block w-[14px] h-[14px] text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="black font-[500] text-[14px]">
                    I have read and agree to the provider agreement
                  </p>
                </label>
              </div>
              {/*  */}
              <div className="mt-4">
                <div className="flex justify-center">
                  <button className="mt-5 w-full black cursor-pointer bg_primaryGreen rounded-[8px] font-[500] py-[10px] flex justify-center gap-1 my-auto">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CopyTradeModel;
