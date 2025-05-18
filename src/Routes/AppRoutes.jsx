import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "../Screens/Browse/Browse";
import StrategyProvider from "../Screens/Browse/Strategy/StrategyProvider";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/become-provider" element={<StrategyProvider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
