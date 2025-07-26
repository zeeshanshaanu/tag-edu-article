import {
  BookOpenBlackIcon,
  GraduationCapGray,
  WebinarPlayGray,
  BookOpenGray,
  GraduationCapBlack,
  MonitorPlayBlack,
} from "../../assets/svgs/Browse/index";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { HeaderTabsFtn } from "../../Store/HeaderAndBreadCrumbSlice/HeadAndBcSlice";
import { EnglandFlag } from "../../assets/svgs/index";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MobileHeaderTabs from "./MobileHeaderTabs";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const items = [
  {
    key: "1",
    label: (
      <div className="flex gap-2 cursor-pointer">
        <div className="my-auto">
          <img
            src={EnglandFlag}
            alt="EnglandFlag"
            className="w-[18px] h-[18px]"
          />
        </div>
        <div className="my-auto">
          <h1 className="gray font-[500] text-[14px]">EN</h1>
        </div>
      </div>
    ),
  },
];
const HeaderTabs = () => {
  const dispatch = useDispatch();

  // HeaderTabsFtn
  const HeaderTabValue = useSelector(
    (state) => state.HeadAndBreadCrumb?.HeaderTabs
  );
  // console.log(HeaderTabValue);

  const navigate = useNavigate();

  return (
    <div>
      {/* Web Tabs - Hidden on small screens */}
      <div className="bg_white rounded-[8px] p-[2px] sm:flex justify-between gap-[2px] w-full hidden sm:flex">
        <div className="mt-3 lg:mt-0 md:mt-0 flex gap-[2px]">
          {/* Courses Tab */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              HeaderTabValue === "Courses" && "bg_lightgreen font-[700]"
            }`}
            onClick={() => {
              dispatch(HeaderTabsFtn("Courses"));
              navigate("/");
            }}
          >
            <img
              src={
                HeaderTabValue === "Courses"
                  ? GraduationCapBlack
                  : GraduationCapGray
              }
              alt="Courses"
            />
            <span
              className={`text-[14px] my-auto ${
                HeaderTabValue === "Courses" ? "black" : "gray"
              }`}
            >
              Courses
            </span>
          </div>

          {/* Articles Tab */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              HeaderTabValue === "Articles" && "bg_lightgreen font-[700]"
            }`}
            onClick={() => {
              dispatch(HeaderTabsFtn("Articles"));
              navigate("/Articles");
            }}
          >
            <img
              src={
                HeaderTabValue === "Articles" ? BookOpenBlackIcon : BookOpenGray
              }
              alt="Articles"
            />
            <span
              className={`text-[14px] my-auto ${
                HeaderTabValue === "Articles" ? "black" : "gray"
              }`}
            >
              Articles
            </span>
          </div>

          {/* LiveSessions Tab */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              HeaderTabValue === "LiveSessions" && "bg_lightgreen font-[700]"
            }`}
            onClick={() => {
              dispatch(HeaderTabsFtn("LiveSessions"));
              navigate("/LiveSessions");
            }}
          >
            <img
              src={
                HeaderTabValue === "LiveSessions"
                  ? MonitorPlayBlack
                  : WebinarPlayGray
              }
              alt="LiveSessions"
            />
            <span
              className={`text-[14px] my-auto ${
                HeaderTabValue === "LiveSessions" ? "black" : "gray"
              }`}
            >
              Live Sessions
            </span>
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="my-auto pr-4">
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <div className="flex gap-2 cursor-pointer">
              <div className="my-auto">
                <img src={EnglandFlag} alt="EnglandFlag" />
              </div>
              <div className="my-auto">
                <h1 className="gray font-[500] text-[14px]">EN</h1>
              </div>
              <div className="my-auto">
                <DownOutlined className="text-[14px] lightgray font-bold" />
              </div>
            </div>
          </Dropdown>
        </div>
      </div>

      {/* Mobile Tabs - Only visible on small screens */}
      <div className="block sm:hidden fixed bottom-5 left-0 right-0 w-full z-50">
        <div className="flex justify-center">
          <div className="w-fit">
            <MobileHeaderTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTabs;
