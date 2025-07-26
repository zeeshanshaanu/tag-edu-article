import React, { useState } from "react";
import { message, Modal } from "antd";
import { useAuth } from "../../AuthContext";
import axios from "axios";
///////////////////////////////////////////////////////////////

const AccountModel = ({ setIsModalOpen, isModalOpen }) => {
   const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 

  return (
    <>
      <Modal
        footer={false}
        centered
        width={630}
        height={300}
        title={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="">
          <h2 className="lg:text-[28px] text-center text-[22px] font-semibold mb-[10px] w-[90%]">
            {isModalOpen.title}
          </h2>
          {/* desc */}
          {isModalOpen.desc && (
            <p className="text-[16px] leading-6  text-center">
              {isModalOpen.desc}
            </p>
          )}

          <div className="mt-5 w-full">
            {loading ? (
              <p className="w-full bg-[#FF4912] text-white text-center py-2 rounded-lg text-[18px]">
                Loading...
              </p>
            ) : (
              <button
                onClick={() => HandleSubmit()}
                className="w-full bg-[#FF4912] text-white py-2 rounded-lg text-[18px] cursor-pointer"
              >
                {isModalOpen.buttonName}
              </button>
            )}
          </div>
        </div>
      </Modal>
      {contextHolder}
    </>
  );
};
export default AccountModel;
