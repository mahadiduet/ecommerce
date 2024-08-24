import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Signup from "../Page/Signup/Signup";
import Login from "../Page/Login/Login";
import Products from "../Page/Product/Products/Products";
import SearchResultPage from "../Page/Search/SearchResultPage/SearchResultPage";
import Dashboard from "../Page/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProduct from "../Page/Dashboard/Product/AddProduct";
import ProductDashboard from "../Page/Dashboard/Product/ProductDashboard";
import EditProduct from "../Page/Dashboard/Product/EditProduct";
import AddBrand from "../Page/Dashboard/Brand/AddBrand";
import Brand from "../Page/Dashboard/Brand/Brand";
import AddCategory from "../Page/Dashboard/Category/AddCategory";
import Category from "../Page/Dashboard/Category/Category";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/product',
                element: <Products />,
                loader: () => fetch('http://localhost:5000/all-product')
            },
            {
                path: '/search',
                element: <SearchResultPage />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: 'addproduct',
                element: <AddProduct />
            },
            {
                path: 'products',
                element: <ProductDashboard />,
                loader: () => fetch('http://localhost:5000/all-product')
            },
            {
                path: 'edit-product/:id',
                element: <EditProduct />,
                loader: ({ params }) => fetch(`http://localhost:5000/edit-product/${params.id}`)
            },
            {
                path: 'addbrand',
                element: <AddBrand />
            },
            {
                path: 'brand',
                element: <Brand />,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path: 'addcategory',
                element: <AddCategory />
            },
            {
                path: 'category',
                element: <Category />,
                loader: () => fetch('http://localhost:5000/category')
            }
        ]
    }
])