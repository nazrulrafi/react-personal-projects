import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login, {action} from "./pages/Login.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import AuthRoute from "./routes/AuthRoute.jsx";
import AddPost from "./pages/dashboard/posts/AddPost.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Logout from "./pages/Logout.jsx";
import AllPost from "./pages/dashboard/posts/AllPost.jsx";
import AllProduct from "./pages/dashboard/ecommerce/AllProduct.jsx";
import SingleProduct from "./pages/dashboard/ecommerce/SingleProduct.jsx";
import Orders from "./pages/dashboard/ecommerce/Orders.jsx";
import SingleOrder from "./pages/dashboard/ecommerce/SingleOrder.jsx";
import CurrentUser from "./pages/dashboard/users/CurrentUser.jsx";
import About from "./pages/dashboard/pages/About.jsx";
import Contact from "./pages/dashboard/pages/Contact.jsx";
import Services from "./pages/dashboard/pages/Services.jsx";

const router = createBrowserRouter([
    {
        path: "/logout",
        element:<Logout/>,
    },
    {
        element: <AuthRoute />,
        children: [
            {
                path: "/",
                element: <Login />,
                action,
            },
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardLayout />,
                children: [
                    { index: true, element: <Dashboard /> },
                    { path: "all-post", element: <AllPost /> },
                    { path: "add-post", element: <AddPost /> },
                    { path: "about", element: <About /> },
                    { path: "contact", element: <Contact /> },
                    { path: "services", element: <Services /> },
                    { path: "all-product", element: <AllProduct /> },
                    { path: "add-product", element: <AllProduct /> },
                    { path: "single-product", element: <SingleProduct /> },
                    { path: "orders", element: <Orders /> },
                    { path: "single-order", element: <SingleOrder /> },
                    { path: "current-user", element: <CurrentUser /> },
                ],
            },
        ],
    },
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App
