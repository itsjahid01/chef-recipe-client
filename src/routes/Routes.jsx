import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
