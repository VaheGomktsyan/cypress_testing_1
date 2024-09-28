import React from "react";
import { useRoutes } from "react-router-dom";
import { Demo } from "../Demo";

export const MyRouter: React.FC = React.memo(({ }) => {
    const router = useRoutes([
        {
            path: '/',
            element: <Demo />
        }
    ])
    return router
})