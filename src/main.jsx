import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Redux-toolkit Configuration
import { Provider } from "react-redux";
import store, { persistor } from "./Store/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";
// ///////////////////////////////////////
// ///////////////////////////////////////
axios.defaults.baseURL = "http://185.202.223.173:8000";
// ///////////////////////////////////////
// ///////////////////////////////////////
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
