import { useEffect } from "react";
import AppRoutes from "./Routes/AppRoutes";
import { AuthtokenFtn } from "./Store/AuthSlice/AuthSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";


///////////////////////////////////////////////////////
function App() {


  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
