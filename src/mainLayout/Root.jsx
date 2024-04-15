import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import {Outlet}  from "react-router-dom"

const Root = () => {
    
    <Helmet>
        <title>Home</title>
        <meta name="Home" content="Home" />
    </Helmet>
 

    return (
        <div>
            <div  className="p-3 md:p-0">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

// className="w-full p-2 md:max-w-7xl mx-auto"