import React, { useState } from "react";
import { Tooltip, Switch, Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { StrategyFtn } from "../../../Store/StrategySlice/StrategySlice";
import celebrationImage from "../../../assets/Images/celebrationImage.png";
import {
  BlackTick,
  ArrowLeftBlack,
  ArrowRight,
} from "../../../assets/svgs/index";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const Step2 = () => {
  const [isCredentialsModel, setisCredentialsModel] = useState({
    isOpen: false,
  });
  const initialValue = {
    FollowerWithdrawalSettings: "",
    RecruiterCommission: "",
    Level1: "",
    Level2: "",
    Level3: "",
    Level4: "",
    Level5: "",
    Level6: "",
    Level7: "",
    Level8: "",
    Level9: "",
    Level10: "",
  };
  const dispatch = useDispatch();
  const [formvalue, setformvalue] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formvalue);
    // Handle your submission logic here
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      <div className="bg_white rounded-[12px] p-5 ">
        <h1 className="black text-[20px] font-[700]">Strategy Configuration</h1>
        <div>
          <div className="xl:w-3/4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 my-5">
            <div className="">
              <Switch
                defaultChecked
                onChange={onChange}
                className="custom-green-switch"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                Show&nbsp;AUM{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </span>
            </div>
            <div className="">
              <Switch
                defaultChecked
                onChange={onChange}
                className="custom-green-switch"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                Show&nbsp;Open&nbsp;Trades{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </span>
            </div>
            <div className="">
              <Switch
                defaultChecked
                onChange={onChange}
                className="custom-green-switch"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                Public{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </span>
            </div>
            <div className="">
              <Switch
                defaultChecked
                onChange={onChange}
                className="custom-green-switch"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                Allow&nbsp;Recruiters{" "}
                <Tooltip
                  style={{ color: "black" }}
                  title=" This is your current MT5 account balance "
                  color={"#F5F5F5"}
                  placement="top"
                  overlayInnerStyle={{ color: "#585858" }}
                >
                  <InfoCircleOutlined className="cursor-pointer" />
                </Tooltip>
              </span>
            </div>
          </div>
          {/*  */}
          <div className=" grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-[15px]">
            {/* Follower Withdrawal Settings */}
            <div className="lg:col-span-2">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Follower Withdrawal Settings{" "}
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
                placeholder="FollowerWithdrawalSettings"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.FollowerWithdrawalSettings}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    FollowerWithdrawalSettings: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Follower Withdrawal Settings{" "}
                </option>
                <option value={12}>Auto Balance</option>
                <option value={24}>Manual Balance</option>
              </select>
            </div>
            {/* Recruiter Commission */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Recruiter Commission{" "}
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
              <input
                type="text"
                required
                value={formvalue.RecruiterCommission}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    RecruiterCommission: e.target.value,
                  })
                }
                placeholder="50%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
          </div>
          {/* // ///////////////////////   *****************   /////////////////////// */}
          {/* // ///////////////////////   *****************   /////////////////////// */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-[15px]">
            {/* Follower Withdrawal Settings */}
            <div className="lg:col-span-2">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Recruiter levels{" "}
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
                placeholder="Recruiter levels"
                className="w-full mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] py-[8px]"
                value={formvalue.Recruiterlevels}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Recruiterlevels: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Recruiter levels{" "}
                </option>
                <option value={12}>Gold</option>
                <option value={24}>Silver</option>
              </select>
            </div>
            {/* Level #1 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #1
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level1}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level1: e.target.value,
                  })
                }
                placeholder="5%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
            {/* Level #1 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #2
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level2}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level2: e.target.value,
                  })
                }
                placeholder="10%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
            {/* Level #3 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #3
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level3}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level3: e.target.value,
                  })
                }
                placeholder="15%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
            {/* Level #4 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #4
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level4}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level4: e.target.value,
                  })
                }
                placeholder="20%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
          </div>
          {/* // ///////////////////////   *****************   /////////////////////// */}
          {/* // ///////////////////////   *****************   /////////////////////// */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-[15px]">
            <div className="lg:col-span-2"></div>
            {/* Level #5 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #5
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level5}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level5: e.target.value,
                  })
                }
                placeholder="25%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
            {/* Level #6 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #6
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level6}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level6: e.target.value,
                  })
                }
                placeholder="30%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
            {/* Level #7 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #7
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level7}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level7: e.target.value,
                  })
                }
                placeholder="35%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
            {/* Level #8 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #8
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level8}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level8: e.target.value,
                  })
                }
                placeholder="40%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
          </div>
          {/* // ///////////////////////   *****************   /////////////////////// */}
          {/* // ///////////////////////   *****************   /////////////////////// */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-[15px]">
            <div className="lg:col-span-2"></div>
            {/* Level #9 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #9
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level9}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level9: e.target.value,
                  })
                }
                placeholder="45%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
            {/* Level #10 */}
            <div className="">
              <label htmlFor="" className="text-[12px] font-[700] black">
                Level #10
              </label>
              <br />
              <input
                type="text"
                required
                value={formvalue.Level10}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    Level10: e.target.value,
                  })
                }
                placeholder="50%"
                className="mt-1 border border-[1px] border-[#E8E8E8] rounded-[8px] outline-none px-[15px] w-full py-[8px]"
              />{" "}
            </div>
          </div>
          <hr className="mt-5" style={{ color: "#E8E8E8" }} />
          <div className="mt-5 flex justify-between gap-4">
            <div className="my-auto">
              <div className="my-auto">
                <button
                  onClick={() => dispatch(StrategyFtn("Step1"))}
                  className="cursor-pointer border border-[1.5px] border-[#E8E8E8] rounded-[8px] px-[15px] py-[7px] flex gap-2"
                >
                  <img src={ArrowLeftBlack} alt="ArrowRight" className="" />{" "}
                  Back
                </button>
              </div>
            </div>
            <div className="my-auto">
              {/* 1 */}
              <div className="flex gap-3 mt-3">
                <div className="flex gap-2">
                  <h1 className="text-[16px] black font-[700] bg_primaryGreen rounded-full py-[4px] px-[8px] flex justify-center">
                    <img src={BlackTick} alt="ArrowRight" className="" />
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
                onClick={() =>
                  setisCredentialsModel({
                    isOpen: true,
                  })
                }
                className="black cursor-pointer bg_primaryGreen rounded-[8px] font-[500] px-[20px] py-[7px] flex gap-2"
              >
                Create My Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Credentials Model */}
      <div>
        <Modal
          footer={false}
          centered
          // width={430}
          // height={300}
          title={false}
          open={isCredentialsModel?.isOpen}
          onCancel={() => setisCredentialsModel(false)}
        >
          <div>
            <div className="flex justify-center my-5">
              <img
                src={celebrationImage}
                alt="ArrowRight"
                className=" w-[60px] h-[60px]"
              />{" "}
            </div>
            <h2 className="text-[40px] font-[700] text-center">
              Strategy Was Created!
            </h2>
            <p className="mt-2 gray text-[15px] font-[500] text-center">
              Your trading strategy "Easy Trading" is now live and ready for
              analysis.
            </p>
          </div>
          <center className="mt-5">
            <button
              onClick={() => setisCredentialsModel(false)}
              className="w-[200px] black cursor-pointer bg_primaryGreen rounded-[8px] font-[500] py-[10px] flex justify-center"
            >
              To Strategy Page
              <img src={ArrowRight} alt="ArrowRight" className="" />{" "}
            </button>
          </center>
        </Modal>
      </div>
    </div>
  );
};

export default Step2;
