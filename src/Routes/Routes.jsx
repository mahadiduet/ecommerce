import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Signup from "../Page/Signup/Signup";
import Login from "../Page/Login/Login";
import AddProduct from "../Page/Product/ProductUpload/AddProduct";
import Products from "../Page/Product/Products/Products";

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
            },
            {
                path:'/addproduct',
                element: <AddProduct />
            },
            {
                path:'/product',
                element:<Products />,
                loader: () => fetch('http://localhost:5000/all-product')
            }
        ]
    }
])