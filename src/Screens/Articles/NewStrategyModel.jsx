import React, { useState } from "react";
import { message, Modal } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { OpenModelFtn } from "../../Store/StrategySlice/StrategySlice";
///////////////////////////////////////////////////////////////

const NewStrategyModel = () => {
  const dispatch = useDispatch();
  const StrategySteps = useSelector((state) => state?.Strategy);
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const HandleSubmit = async () => {
    // console.log("Submiting...");
    setLoading(true);
    try {
      //   const url = endpoints[isModalOpen.status];
      const response = await axios.post(
        "endpoints",
        {},
        {
          //   headers: { Authorization: `Bearer ${authToken?.authToken}` },
        }
      );

      messageApi.success(
        response?.data?.message || "Request processed successfully.!"
      );
      setLoading(false);
      setTimeout(() => {
        handleOk();
      }, 1000);
    } catch (error) {
      console.error(error?.response);
      messageApi.error(
        error?.response?.data?.detail || "Failed to process request"
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        footer={false}
        centered
        width={630}
        height={300}
        title={false}
        open={StrategySteps?.OpenModel}
        onOk={() => dispatch(OpenModelFtn(false))}
        onCancel={() => dispatch(OpenModelFtn(false))}
      >
        <div className="lg:col-span-6 md:col-span-6 col-span-5 px-2">
          <h1 className="black text-[20px] font-[700]">New Strategy</h1>
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
                * Please note, this strategy runs on an Amplify account If the
                manager loses more than lOx of starting balance, your account
                will be liquidated.
              </span>
            </div>
          </div>
          {/*  slider*/}

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
              <input type="checkbox" className="peer hidden" id="customCheck" />
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {contextHolder}
    </>
  );
};
export default NewStrategyModel;
