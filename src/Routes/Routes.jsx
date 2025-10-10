import React from "react";
import { createBrowserRouter } from "react-router-dom"; 
import Home from "../Pages/Home";
import Application from "../Pages/Application";
import MainLayout from "../Layouts/MainLayout";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("/AppsData.json").then(res => res.json()), 
      },
      {
        path: "app",
        Component: Application,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "app/:id",
        Component: AppDetails,
      }
    ],
  },
]);

export default router;
