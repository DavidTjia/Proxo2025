// import React, { useEffect } from "react";
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
//   useLocation,
//   useNavigate
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Layout from "./Layout";
// import Winner from "./pages/Winner";
// import WhatsNew from "./pages/WhatsNew";

// // PageReloader component to handle page reloads
// const PageReloader = ({ children }) => {
//   const location = useLocation();

//   useEffect(() => {
//     // Get the last visited path from session storage
//     const lastPath = sessionStorage.getItem('lastPath');

//     // If the path has changed, store new path and reload
//     if (lastPath !== location.pathname) {
//       sessionStorage.setItem('lastPath', location.pathname);
//       window.location.reload();
//     }
//   }, [location]);

//   return children;
// };

// // Wrap each route component with PageReloader
// const RouteWithReload = ({ Component }) => (
//   <PageReloader>
//     <Component />
//   </PageReloader>
// );

// const routerList = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate to="home" replace />
//       },
//       {
//         path: "home",
//         element: <RouteWithReload Component={Home} />
//       },
//       {
//         path: "winner",
//         element: <RouteWithReload Component={Winner} />
//       },
//       {
//         path: "whatsnew",
//         element: <RouteWithReload Component={WhatsNew} />
//       },
//     ],
//   },
// ]);

// export { routerList };
