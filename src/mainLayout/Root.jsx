import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import {Outlet}  from "react-router-dom"
import ScrollToTop from "../components/Utils/ScrollToTop";

const Root = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <div  className="p-3 md:p-0">
            <div className="h-16">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

// className="w-full p-2 md:max-w-7xl mx-auto"