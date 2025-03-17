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
const CheckEmail = lazy(() => import("../pages/CheckEmail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading</div>}>
          <Dashboard />
        </Suspense>
      </PrivateRoute>
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
    path: "/check-email",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <CheckEmail />
      </Suspense>
    ),
  },
  {
    path: "/api/auth/email/verify",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading</div>}>
          <Verify />
        </Suspense>
      </PrivateRoute>
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
      <PrivateRoute>
        <Suspense fallback={<div>Loading</div>}>
          <Redirect />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/direct",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading</div>}>
          <Direct />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/wordpress",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading</div>}>
          <Wordpress />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/error_code",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading</div>}>
          <Error />
        </Suspense>
      </PrivateRoute>
    ),
  },
]);
export const OctoverseRoute = () => {
  return <RouterProvider router={router} />;
};
