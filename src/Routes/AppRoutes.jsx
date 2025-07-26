import { Route, Routes, useLocation } from "react-router-dom";
import Courses from "../Screens/Courses/Courses";
import CourseDetails from "../Screens/Courses/CourseDetails";
import Articles from "../Screens/Articles/Articles";
import ArticleDetails from "../Screens/Articles/ArticleDetails";
import { useDispatch } from "react-redux";
import { AuthtokenFtn, UserInfoFtn } from "../Store/AuthSlice/AuthSlice";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Webinars from "../Screens/Webinars/Webinars";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const AppRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      dispatch(AuthtokenFtn(token));
      const decoded = jwtDecode(token);
      dispatch(UserInfoFtn(decoded));
    }
  }, [location.search]);

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/CourseDetails/:id" element={<CourseDetails />} />
          {/*  */}
          <Route path="/Articles" element={<Articles />} />
          <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
          {/*  */}
          <Route path="/LiveSessions" element={<Webinars />} />
        </Routes>
      </>
    </div>
  );
};

export default AppRoutes;
