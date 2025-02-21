import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerList } from "./router"; // Pastikan path ini sesuai dengan file router kamu
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerList} />
  </React.StrictMode>,
);
