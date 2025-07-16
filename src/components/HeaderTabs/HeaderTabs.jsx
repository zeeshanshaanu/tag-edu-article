import { useState } from "react";
import { Breadcrumb } from "antd";
import {
  MagnifyingGlass,
  MagnifyingGlassBlack,
  Users,
  Handshake,
  SuitcaseSimple,
  BlackSuitcaseSimple,
  BlackHandshake,
  BlackUsers,
} from "../../assets/svgs";

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
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
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
      {" "}
      <div className="bg_white rounded-[8px] p-[3px] flex gap-1">
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
            HeaderTabValue === "Articles" && "bg_lightgreen font-[700]"
          }`}
          onClick={() => {
            dispatch(HeaderTabsFtn("Articles"));
            navigate("/");
          }}
        >
          <img
            src={
              HeaderTabValue === "Articles" ? BookOpenBlackIcon : BookOpenGray
            }
            alt="MagnifyingGlassBlack"
          />

          <span
            className={`text-[14px] my-auto ${
              HeaderTabValue === "Articles" ? "black" : "gray"
            }`}
          >
            Articles
          </span>
        </div>
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
            HeaderTabValue === "Courses" && "bg_lightgreen font-[700]"
          }`}
          onClick={() => {
            dispatch(HeaderTabsFtn("Courses"));
            navigate("/Courses");
          }}
        >
          <img
            src={
              HeaderTabValue === "Courses"
                ? GraduationCapBlack
                : GraduationCapGray
            }
            alt="MagnifyingGlassBlack"
          />

          <span
            className={`text-[14px] my-auto ${
              HeaderTabValue === "Courses" ? "black" : "gray"
            }`}
          >
            Courses
          </span>
        </div>
        <div
          className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
            HeaderTabValue === "Webinars" && "bg_lightgreen font-[700]"
          }`}
          onClick={() => {
            dispatch(HeaderTabsFtn("Webinars"));
            navigate("/Webinars");
          }}
        >
          <img
            src={
              HeaderTabValue === "Webinars" ? MonitorPlayBlack : WebinarPlayGray
            }
            alt="MagnifyingGlassBlack"
          />

          <span
            className={`text-[14px] my-auto ${
              HeaderTabValue === "Webinars" ? "black" : "gray"
            }`}
          >
            Webinars
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTabs;
