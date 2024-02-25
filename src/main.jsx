import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Roots from "./components/Roots";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import AuthProvider from "./provider/AuthProvider";
import Orders from "./components/Orders";
import PrivateRoute from "./route/PrivateRoute";
import Profile from "./components/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders/></PrivateRoute>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
