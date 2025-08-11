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
import {
  HeaderTabsFtn,
  selectedLanguageFtn,
} from "../../Store/HeaderAndBreadCrumbSlice/HeadAndBcSlice";
import { EnglandFlag } from "../../assets/svgs/index";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MobileHeaderTabs from "./MobileHeaderTabs";
import { useEffect, useState } from "react";
import SpanishFlag from "../../assets/Images/SpanishFlag.png"
import GermanFlag from "../../assets/Images/GermanFlag.png"
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
 const HeaderTabs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("EN");
  // Persist user choice

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred_language");
    if (savedLang) {
      setSelectedLang(savedLang);
    }
  }, []);

  // Flag map for selected menu item
  const languageMap = {
    EN: { label: "EN", flag: EnglandFlag },
    ES: { label: "ES", flag: SpanishFlag },
    DE: { label: "DE", flag: GermanFlag },
  };

  const handleLanguageChange = ({ key }) => {
    setSelectedLang(key);
    dispatch(selectedLanguageFtn(key));

    localStorage.setItem("preferred_language", key);
  };
  const items = [
    {
      key: "EN",
      label: (
        <div className="flex gap-2">
          <img src={EnglandFlag} alt="EN" className="w-[18px] h-[18px] rounded-full" />
          <span>EN</span>
        </div>
      ),
    },
    {
      key: "ES",
      label: (
        <div className="flex gap-2">
          <img src={SpanishFlag} alt="ES" className="w-[18px] h-[18px] rounded-full" />
          <span>ES</span>
        </div>
      ),
    },
    {
      key: "DE",
      label: (
        <div className="flex gap-2">
          <img src={GermanFlag} alt="DE" className="w-[18px] h-[18px] rounded-full" />
          <span>DE</span>
        </div>
      ),
    },
  ];
  // HeaderTabsFtn
  const HeaderTabValue = useSelector(
    (state) => state.HeadAndBreadCrumb?.HeaderTabs
  );

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
            menu={{ items, onClick: handleLanguageChange }}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <div className="flex gap-2 cursor-pointer">
              <img
                src={languageMap[selectedLang].flag}
                alt={selectedLang}
                className="w-[18px] h-[18px] rounded-full"
              />
              <span className="gray font-[500] text-[14px]">
                {languageMap[selectedLang].label}
              </span>
              <DownOutlined className="text-[14px] lightgray font-bold" />
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
