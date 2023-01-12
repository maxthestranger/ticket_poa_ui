import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
