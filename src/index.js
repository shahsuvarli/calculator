import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { appContext, initialState } from "./Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <appContext.Provider value={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </appContext.Provider>
);
