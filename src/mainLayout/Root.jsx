import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import {Outlet}  from "react-router-dom"

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

// className="w-full p-2 md:max-w-7xl mx-auto"