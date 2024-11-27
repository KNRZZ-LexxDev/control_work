import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Register } from "../../pages/register/register";
import { Auth } from "../../pages/auth/auth";
import { Layout } from "../layout/layout";
import { ErrorElement } from "../errorElement/errorElement";
import { AdminPage } from "../../pages/list/admin";
import { ProductsPage } from "../../pages/list/products";


const AuthPages = [
    {
        path: '/admin',
        Component: AdminPage,
    },
    {
        path: '/products',
        Component: ProductsPage,
    },

]

const notAuthPages = [
    {
        path: '/',
        Component: Register,
    },
    {
        path: '/auth',
        Component: Auth,
    },
]

export const getRoutes = (isAuth) => {
    return createBrowserRouter([
        {
            Component: Layout,
            errorElement: <ErrorElement />,
            children: [
                {
                    path: '/',
                    Component: Register,
                },
                 ...AuthPages, ... notAuthPages
            ]
        }
    ])
}
