import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ChefRecipes from "../Pages/ChefRecipes";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://chef-recipe-hunter-server-side-itsjahid01.vercel.app/chefrecipes"
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/chefRecipes/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-itsjahid01.vercel.app/chefrecipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
