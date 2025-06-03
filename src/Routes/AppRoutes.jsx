import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "../Screens/Browse/Browse";
import Followers from "../Screens/Followers/Followers";
import Providers from "../Screens/Providers/Providers";
import Recruiters from "../Screens/Recruiters/Recruiters";
import FollowerDetails from "../Screens/Followers/FollowerDetails";
import ProviderDetails from "../Screens/Providers/ProvidersDetails";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/Followers" element={<Followers />} />
          <Route path="/Follower-Details" element={<FollowerDetails />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/Provider-Details" element={<ProviderDetails />} />
          <Route path="/Recruiters" element={<Recruiters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
