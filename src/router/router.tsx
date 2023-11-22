import { Navigate, createBrowserRouter } from "react-router-dom";

import { AuthRoutes } from "../auth/router/AuthRoutes";
import { AdminRoutes } from "../admin/router/AdminRoutes";
import { AdminLayout } from "../layout/AdminLayout";

export const router = createBrowserRouter([
    {
        path: "/auth/*",
        element: <AuthRoutes />
    },
    {
        path: '/backoffice/*', 
        element: <AdminLayout /> ,
        children: [
            {
                path: '*',
                element: <AdminRoutes />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/auth" />
    }
])