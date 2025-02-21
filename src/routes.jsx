import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Winner from "./pages/Winner";
import WhatsNew from "./pages/WhatsNew";
import Sponsor from "./pages/Sponsor";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // Home langsung muncul di "/"
      { path: "winner", element: <Winner /> },
      { path: "whatsnew", element: <WhatsNew /> },
      { path: "sponsor", element: <Sponsor /> },
    ],
  },
]);

export { routerList };
