import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {Navigate,useLocation}  from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center py-10"><span className="loading loading-spinner text-primary"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="" state={location?.pathname || "/"}></Navigate>
};

export default ProtectedRoute;