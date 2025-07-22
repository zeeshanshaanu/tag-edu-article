import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Redux-toolkit Configuration
import { Provider } from "react-redux";
import store, { persistor } from "./Store/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";
import { BrowserRouter } from "react-router";
// ///////////////////////////////////////
// ///////////////////////////////////////
axios.defaults.baseURL = "https://tageduapi.tagmarkets.com/";
// axios.defaults.baseURL = "http://localhost:8000";

// ///////////////////////////////////////
// ///////////////////////////////////////
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
