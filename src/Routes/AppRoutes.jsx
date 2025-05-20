import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "../Screens/Browse/Browse";
import StrategyProvider from "../Screens/Browse/Strategy/StrategyProvider";
import Followers from "../Screens/Followers/Followers";
import StrategiesDetailView from "../Screens/Followers/FollowerStrategiesTable&Details/StrategiesDetailView";
import Providers from "../Screens/Providers/Providers";
import Recruiters from "../Screens/Recruiters/Recruiters";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/become-provider" element={<StrategyProvider />} />
          <Route path="/Followers" element={<Followers />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/Recruiters" element={<Recruiters />} />
          <Route
            path="/Followers-Strategy-Detail"
            element={<StrategiesDetailView />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
