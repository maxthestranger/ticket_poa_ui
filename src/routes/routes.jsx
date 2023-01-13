import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import Login from "../pages/login";
import Register from "../pages/register";
import ForgotPassword from "../pages/forgotPassword";
import ResetPassword from "../pages/resetPassword";
import Dashboard from "../pages/dashboard";

function Routes() {
  const { token } = useSelector((state) => state.auth);

  const routes = [
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/sign-up",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/forgot-password",
      element: token ? <Navigate to="/dashboard" /> : <ForgotPassword />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/reset-password",
      element: token ? <Navigate to="/dashboard" /> : <ResetPassword />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: token ? <Dashboard /> : <Navigate to="/" />,
      errorElement: <ErrorPage />,
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default Routes;
