import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumb } from "../../Store/HeaderAndBreadCrumbSlice/HeadAndBcSlice";
// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const HeaderTabAndBreadCrumb = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breadcrumb = useSelector((state) => state.HeadAndBreadCrumb.Breadcrumb);

  // Fallback to default breadcrumbs if Redux has none
  const breadcrumbData =
    breadcrumb && breadcrumb.length > 0
      ? breadcrumb
      : [{ label: "Browse", path: "/browse" }, { label: "Top ROI" }];
  // console.log(breadcrumbData?.[0]?.label);

  const items = breadcrumbData.map((item, index) => {
    const isClickable = !!item.path;

    return {
      title: (
        <span
          className={`flex gap-1 ${isClickable ? "cursor-pointer" : ""}`}
          onClick={isClickable ? () => navigate(item.path) : undefined}
        >
          {item.label === "Browse" ||
          item.label === "Providers" ||
          item.label === "Recruiters" ||
          item.label === "Followers" ? (
            <img
              src={
                item.label === "Browse"
                  ? MagnifyingGlass
                  : item.label === "Followers"
                  ? Users
                  : item.label === "Providers"
                  ? Handshake
                  : item.label === "Recruiters"
                  ? SuitcaseSimple
                  : null
              }
              alt="MagnifyingGlass"
            />
          ) : null}
          <span
            className={`${
              index === breadcrumbData.length - 1
                ? "black font-[700]"
                : "gray font-[500]"
            } text-[14px] my-auto`}
          >
            {item.label}
          </span>
        </span>
      ),
    };
  });
  return (
    <div>
      <div className="lg:flex justify-between gap-4 w-full">
        <div className="my-auto">
          <Breadcrumb items={items} />
        </div>
        {/* Tabs */}
        <div className="mt-3 lg:mt-0 bg_white rounded-[8px] p-[3px] flex gap-1">
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              breadcrumbData?.[0]?.label === "Browse" &&
              "bg_lightgreen font-[700]"
            }`}
            onClick={() => {
              dispatch(
                setBreadcrumb([
                  { label: "Browse", path: "/" },
                  { label: "Top ROI" },
                ])
              );

              navigate("/");
            }}
          >
            {breadcrumbData?.[0]?.label === "Browse" ? (
              <img src={MagnifyingGlassBlack} alt="MagnifyingGlassBlack" />
            ) : (
              <img src={MagnifyingGlass} alt="MagnifyingGlass" />
            )}
            <span
              className={`text-[14px] my-auto ${
                breadcrumbData?.[0]?.label === "Browse" ? "black" : "gray"
              }`}
            >
              Browse
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200  ${
              breadcrumbData?.[0]?.label === "Followers" &&
              "bg_lightgreen font-[700]"
            }`}
            onClick={() => {
              dispatch(
                setBreadcrumb([
                  { label: "Followers", path: "/Followers" },
                  { label: "Dashboard" },
                ])
              );
              navigate("/Followers");
            }}
          >
            {breadcrumbData?.[0]?.label === "Followers" ? (
              <img src={BlackUsers} alt="MagnifyingGlass" />
            ) : (
              <img src={Users} alt="MagnifyingGlassBlack" />
            )}
            <span
              className={`text-[14px] my-auto ${
                breadcrumbData?.[0]?.label === "Followers" ? "black" : "gray"
              }`}
            >
              Followers
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              breadcrumbData?.[0]?.label === "Providers" &&
              "bg_lightgreen font-[700]"
            }`}
            onClick={() => {
              dispatch(
                setBreadcrumb([
                  { label: "Providers", path: "/Providers" },
                  { label: "Dashboard" },
                ])
              );
              navigate("/Providers");
            }}
          >
            {" "}
            {breadcrumbData?.[0]?.label === "Providers" ? (
              <img src={BlackHandshake} alt="BlackHandshake" />
            ) : (
              <img src={Handshake} alt="Handshake" />
            )}
            <span
              className={`text-[14px] my-auto ${
                breadcrumbData?.[0]?.label === "Providers" ? "black" : "gray"
              }`}
            >
              Providers
            </span>
          </div>
          {/*  */}
          <div
            className={`cursor-pointer my-auto flex gap-1 rounded-[8px] px-[16px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
              breadcrumbData?.[0]?.label === "Recruiters" &&
              "bg_lightgreen font-[700]"
            }`}
            onClick={() => {
              dispatch(
                setBreadcrumb([
                  { label: "Recruiters", path: "/Recruiters" },
                  { label: "Dashboard" },
                ])
              );
              navigate("/Recruiters");
            }}
          >
            {breadcrumbData?.[0]?.label === "Recruiters" ? (
              <img src={BlackSuitcaseSimple} alt="BlackSuitcaseSimple" />
            ) : (
              <img src={SuitcaseSimple} alt="SuitcaseSimple" />
            )}
            <span
              className={`text-[14px] my-auto ${
                breadcrumbData?.[0]?.label === "Recruiters" ? "black" : "gray"
              }`}
            >
              Recruiters
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTabAndBreadCrumb;
