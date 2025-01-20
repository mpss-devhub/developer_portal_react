import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Redirect = lazy(() => import("../pages/Redirect"));
const Direct = lazy(() => import("../pages/direct/Direct"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
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
]);
export const OctoverseRoute = () => {
  return <RouterProvider router={router} />;
};
