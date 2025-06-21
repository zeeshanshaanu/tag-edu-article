import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "../Screens/Browse/Browse";
import Courses from "../Screens/Courses/Courses";
import CourseDetails from "../Screens/Courses/CourseDetails";
import Webinars from "../Screens/Webinars/Webinars";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CourseDetails/:id" element={<CourseDetails />} />
          <Route path="/Webinars" element={<Webinars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
