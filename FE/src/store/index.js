import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import authReducer from "./auth";
import userReducer from "./user";
import workerReducer from "./woker";
import startReducer from "./start"
import endReducer from "./end"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "worker", 'user', "start", "end"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  worker: workerReducer,
  start: startReducer,
  end: endReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
