import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import EditTask from "../pages/Tasks/edit";

const routes = [
  {
    path: "/",
    element: <Layout />, // Component to be rendered
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks/:id/edit",
        element: <EditTask />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <h1>Page not found</h1>,
  },
];

const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
