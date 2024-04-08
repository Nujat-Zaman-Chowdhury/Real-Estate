import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('data.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])