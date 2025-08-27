import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Spin size="large" /> */}
      <span className="Custom_Spin_Loader"></span>
    </div>
  );
};

export default Loader;
