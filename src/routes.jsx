import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Winner from "./pages/Winner";
import WhatsNew from "./pages/WhatsNew";
import Sponsor from "./pages/Sponsor";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // Home sebagai halaman utama
      { path: "winner", element: <Winner /> },
      { path: "whatsnew", element: <WhatsNew /> },
      { path: "sponsor", element: <Sponsor /> },
    ],
  },
]);

export { routerList };
