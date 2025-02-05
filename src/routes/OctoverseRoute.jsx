import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Redirect = lazy(() => import("../pages/redirect/Redirect"));
const Direct = lazy(() => import("../pages/direct/Direct"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Verify = lazy(() => import("../pages/Verify"));
const FinishSignUp = lazy(() => import("../pages/FinishSignUp"));
const Wordpress = lazy(() => import("../pages/wordpress/Wordpress"));
const Error = lazy(() => import("../pages/error/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/verify-email",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <Verify />
      </Suspense>
    ),
  },
  {
    path: "/finishSignUp",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <FinishSignUp />
      </Suspense>
    ),
  },
  {
    path: "/redirect",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <Redirect />
      </Suspense>
    ),
  },
  {
    path: "/direct",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <Direct />
      </Suspense>
    ),
  },
  {
    path: "/wordpress",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <Wordpress />
      </Suspense>
    ),
  },
  {
    path: "/error_code",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <Error />
      </Suspense>
    ),
  },
]);
export const OctoverseRoute = () => {
  return <RouterProvider router={router} />;
};
