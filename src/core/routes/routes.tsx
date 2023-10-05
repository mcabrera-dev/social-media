import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../../ui/views/Home";
import Layout from "../../ui/views/Layout";
import NoMatch from "../../ui/views/NoMatch";
import UserDetailView from "../../ui/views/Detail";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "user/:userId/*",
        element: <UserDetailView />,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes;
