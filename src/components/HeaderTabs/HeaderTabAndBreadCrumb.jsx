import {
  BookOpenBlackIcon,
  GraduationCapGray,
  WebinarPlayGray,
  BookOpenGray,
  GraduationCapBlack,
  MonitorPlayBlack,
} from "../../assets/svgs/Browse/index";
import { UK } from "../../assets/svgs/index";
import { Button, Dropdown } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumb } from "../../Store/HeaderAndBreadCrumbSlice/HeadAndBcSlice";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const items = [
  {
    key: "1",
    label: (
      <div className="flex gap-2 cursor-pointer">
        <div className="my-auto">
          <img src={UK} className="w-[18px] h-[18px]"/>
        </div>
        <div className="my-auto">
          <h1 className="gray font-[500] text-[14px]">EN</h1>
        </div>
      </div>
    ),
  },
];
const HeaderTabAndBreadCrumb = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breadcrumb = useSelector((state) => state.HeadAndBreadCrumb.Breadcrumb);

  // Fallback to default breadcrumbs if Redux has none
  const breadcrumbData =
    breadcrumb && breadcrumb.length > 0
      ? breadcrumb
      : [{ label: "Articles", path: "/Articles" }, { label: "Top ROI" }];
  // console.log(breadcrumbData?.[0]?.label);

  return (
    <div>
      <div className="sm:flex justify-between gap-4 w-full">
        {/* Tabs */}
        <div className="bg_white rounded-[8px] p-[2px] flex justify-between gap-[2px] w-full">
          <div className="mt-3 lg:mt-0 md:mt-0 sm:flex gap-[2px]">
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
                breadcrumbData?.[0]?.label === "Articles" &&
                "bg_lightgreen font-[700]"
              }`}
              onClick={() => {
                dispatch(
                  setBreadcrumb([
                    { label: "Articles", path: "/" },
                    { label: "Top ROI" },
                  ])
                );

                navigate("/");
              }}
            >
              <img
                src={
                  breadcrumbData?.[0]?.label === "Articles"
                    ? BookOpenBlackIcon
                    : BookOpenGray
                }
                alt="ChartPieBlack"
              />

              <span
                className={`text-[14px] my-auto ${
                  breadcrumbData?.[0]?.label === "Articles" ? "black" : "gray"
                }`}
              >
                Articles
              </span>
            </div>
            {/*  */}
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200  ${
                breadcrumbData?.[0]?.label === "Courses" &&
                "bg_lightgreen font-[700]"
              }`}
              onClick={() => {
                dispatch(
                  setBreadcrumb([
                    { label: "Courses", path: "/Courses" },
                    { label: "Articles" },
                  ])
                );
                navigate("/Courses");
              }}
            >
              <img
                src={
                  breadcrumbData?.[0]?.label === "Courses"
                    ? GraduationCapBlack
                    : GraduationCapGray
                }
                alt="MagnifyingGlass"
              />

              <span
                className={`text-[14px] my-auto ${
                  breadcrumbData?.[0]?.label === "Courses" ? "black" : "gray"
                }`}
              >
                Courses
              </span>
            </div>
            {/*  */}
            <div
              className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
                breadcrumbData?.[0]?.label === "Webinars" &&
                "bg_lightgreen font-[700]"
              }`}
              onClick={() => {
                dispatch(
                  setBreadcrumb([
                    { label: "Webinars", path: "/Webinars" },
                    { label: "Articles" },
                  ])
                );
                navigate("/Webinars");
              }}
            >
              {" "}
              <img
                src={
                  breadcrumbData?.[0]?.label === "Webinars"
                    ? MonitorPlayBlack
                    : WebinarPlayGray
                }
                alt="BlackHandshake"
              />
              <span
                className={`text-[14px] my-auto ${
                  breadcrumbData?.[0]?.label === "Webinars" ? "black" : "gray"
                }`}
              >
                Webinars
              </span>
            </div>
          </div>
          <div className="my-auto pr-4">
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              arrow
              trigger={["click"]}
            >
              <div className="flex gap-2 cursor-pointer">
                <div className="my-auto">
                  <img src={UK} />
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
      </div>
    </div>
  );
};

export default HeaderTabAndBreadCrumb;
