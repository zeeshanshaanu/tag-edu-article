import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import StrategyReducer from "./StrategySlice/StrategySlice";
import HeadAndBreadCrumbReducer from "./HeaderAndBreadCrumbSlice/HeadAndBcSlice";
import AuthReducer from "./AuthSlice/AuthSlice";

// Combine reducers
const rootReducer = combineReducers({
  Strategy: StrategyReducer,
  HeadAndBreadCrumb: HeadAndBreadCrumbReducer,
  Auth: AuthReducer,
});
// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  // blacklist: ['refStore', 'websocket', 'socketPriceStore', 'pnlRoiStore'], // Do not persist these slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore redux-persist actions
        ignoredPaths: ["refStore", "websocket", "socketPriceStore"], // Ignore these state paths
      },
    }),
});

export const persistor = persistStore(store);
export default store;
