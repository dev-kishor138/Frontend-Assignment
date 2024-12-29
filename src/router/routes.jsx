import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../pages/all-products/AllProducts";
import CategoryProduct from "../pages/category/CategoryProduct";
import CartPage from "../pages/cart/CartPage";
import Main from "../layout/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <AllProducts/>
            },
            {
                path: "/category",
                element: <CategoryProduct/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            }

        ],
    },
])