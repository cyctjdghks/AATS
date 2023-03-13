import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// router
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";
// redux-persiste
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// store
import store from "./store/index";

export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
