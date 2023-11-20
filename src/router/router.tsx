import { Navigate, createBrowserRouter } from "react-router-dom";

import { AuthRoutes } from "../auth/router/AuthRoutes";

export const router = createBrowserRouter([
    {
        path: "/auth/*",
        element: <AuthRoutes />
    },
    {
        path: '*',
        element: <Navigate to="/auth" />
    }
])