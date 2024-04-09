import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ProtectedRoute from "./ProtectedRoute";

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
                path:'/update-profile',
                element:<ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            

        ]
    }
])