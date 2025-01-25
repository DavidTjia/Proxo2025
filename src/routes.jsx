import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Layout from "./Layout";
import Winner from "./pages/Winner";
import WhatsNew from "./pages/WhatsNew";
// import Winner from "./pages/Winner";
// import Guidelines from "./pages/Guidelines";
// import Competition from "./pages/Competition";
// import NotFound from "./pages/NotFound"; // Optional, jika ingin handle 404

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "winner", element: <Winner /> },
      { path: "whatsnew", element: <WhatsNew /> },
    ],
  },
]);

export { routerList };
