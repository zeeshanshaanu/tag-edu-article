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
axios.defaults.baseURL = "https://tagxapi.tagmarkets.com";
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
