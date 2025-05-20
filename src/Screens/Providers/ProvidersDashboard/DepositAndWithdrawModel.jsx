import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenModelFtn } from "../../../Store/StrategySlice/StrategySlice";
import { Modal } from "antd";

const DepositAndWithdrawModel = () => {
  const dispatch = useDispatch();

  const StrategySteps = useSelector((state) => state?.Strategy);
  return (
    <div>
      <div>
        <Modal
          footer={false}
          centered
          // width={430}
          // height={300}
          title={false}
          open={StrategySteps?.OpenModel}
          onOk={() => dispatch(OpenModelFtn(false))}
          onCancel={() => dispatch(OpenModelFtn(false))}
        >
          <div className="px-2 mt-1">
            <h1 className="text-[16px] font-[700] black">
              Deposit Personal Funds To Trade
            </h1>

            <hr className="mt-4" style={{ color: "#E8E8E8" }} />
            <div className="my-3">
              <div className="">
                <label htmlFor="" className="text-[12px] font-[700] black">
                  Amount
                </label>
                <br />
                <input
                  type="text"
                  required
                  // value={formvalue.NameName}
                  // onChange={(e) =>
                  //   setformvalue({ ...formvalue, NameName: e.target.value })
                  // }
                  placeholder="Amount"
                  className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                />{" "}
                <span className="text-[12px] font-[700] gray">
                  Trade your own capital alongside your Followers
                </span>
              </div>
            </div>
            <hr className="mt-4" style={{ color: "#E8E8E8" }} />
            <div className="mt-5">
              <div className="my-auto flex gap-2 justify-between">
                <button
                  onClick={() => dispatch(OpenModelFtn(false))}
                  className="my-auto text-[14px] font-[700] cursor-pointer border border-[2px] bg_white border-[#E8E8E8]
                                 rounded-[8px] px-[15px] py-[7px] flex gap-2"
                >
                  Cancal
                </button>
                <button
                  className="my-auto text-[14px] font-[700] cursor-pointer border-[#cafd5d] border-[2px] bg_primaryGreen border-[#E8E8E8]
                                 rounded-[8px] px-[15px] py-[7px] flex gap-2"
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DepositAndWithdrawModel;
