import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import {todosApi} from "./Redux/api/apiSlice"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ApiProvider api={todosApi}>
      <App />
    </ApiProvider>
  // </React.StrictMode>
);
