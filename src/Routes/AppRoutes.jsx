import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "../Screens/Courses/Courses";
import CourseDetails from "../Screens/Courses/CourseDetails";
import Webinars from "../Screens/Webinars/Webinars";
import Articles from "../Screens/Articles/Articles";
import ArticleDetails from "../Screens/Articles/ArticleDetails";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CourseDetails/:id" element={<CourseDetails />} />
          <Route path="/Webinars" element={<Webinars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
