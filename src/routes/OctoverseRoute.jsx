import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Login = lazy(() => import("../pages/Login"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Redirect = lazy(() => import("../pages/Redirect"))
const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Login />
            </Suspense>
        )
    },
    {
        path: "/signup",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <SignUp />
            </Suspense>
        )
    },    
    {
        path: "/redirect",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Redirect />
            </Suspense>
        )
    }
])
export const OctoverseRoute = () => {
    return <RouterProvider router={router} />;
};
