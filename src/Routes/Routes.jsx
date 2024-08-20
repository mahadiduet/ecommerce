import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Signup from "../Page/Signup/Signup";
import Login from "../Page/Login/Login";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/signup',
                element:<Signup />
            },
            {
                path:'/login',
                element: <Login />
            }
        ]
    }
])