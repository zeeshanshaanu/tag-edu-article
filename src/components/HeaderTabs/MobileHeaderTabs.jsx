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

const MobileHeaderTabs = () => {
  const dispatch = useDispatch();

  // HeaderTabsFtn
  const HeaderTabValue = useSelector(
    (state) => state.HeadAndBreadCrumb?.HeaderTabs
  );

  const navigate = useNavigate();

  return (
    <div>
      <div className="bg_white rounded-[8px] p-[2px] flex gap-5 inline-block mt-5">
        <div className="flex gap-[2px]">
          <div
            className={`cursor-pointer inline-flex items-center gap-1 rounded-[8px] px-[10px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
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
              alt="Courses Icon"
            />
            <span
              className={`text-[14px] ${
                HeaderTabValue === "Courses" ? "black" : "gray"
              }`}
            >
              {HeaderTabValue === "Courses" && "Courses"}
            </span>
          </div>
          <div
            className={`cursor-pointer inline-flex items-center gap-1 rounded-[8px] px-[10px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
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
              alt="Articles Icon"
            />
            <span
              className={`text-[14px] ${
                HeaderTabValue === "Articles" ? "black" : "gray"
              }`}
            >
              {HeaderTabValue === "Articles" && "Articles"}
            </span>
          </div>

          <div
            className={`cursor-pointer inline-flex items-center gap-1 rounded-[8px] px-[10px] py-[7px] font-[500] hover:bg-[#CAFD5D] transition-colors duration-200 ${
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
              alt="LiveSessions Icon"
            />
            <span
              className={`text-[14px] ${
                HeaderTabValue === "LiveSessions" ? "black" : "gray"
              }`}
            >
              {HeaderTabValue === "LiveSessions" && "Live Sessions"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderTabs;
