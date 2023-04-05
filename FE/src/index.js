import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import css style
import "./index.css";
// import router
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
// import redux
import { Provider } from "react-redux";
// import redux-persiste
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// import store
import store from "./store/index";

export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollToTop />
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
