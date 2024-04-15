import {Navigate, useLoaderData, useLocation} from "react-router-dom"
import { FaPhone } from "react-icons/fa6";

import { MdPhoneIphone } from "react-icons/md";

import { MdEmail } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";

import { FaFacebook } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";

import { AiFillInstagram } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Agents = () => {
    const agents = useLoaderData();
    const location = useLocation();
    const {user}= useContext(AuthContext)
    console.log(agents);
    if(user){
        return (
            <div className="w-full md:max-w-7xl mx-auto mt-10 p-3">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Agents - LuxuryLair</title>
                <link rel="canonical" href="http://mysite.com//" />
    </Helmet>
            <h3 className="text-4xl font-roboto text-[#2B262D] font-semibold">Our Agents</h3>
            {
                agents.map((agent,index)=>(
                    <div className="p-2 md:p-7 flex flex-col md:flex-row items-center gap-10 my-7 border rounded-lg shadow-lg" key={index}>
                        <div>
                            <img className="rounded-md w-[360px] lg:w-[260px] h-[200px] md:h-[360px] lg:h-[230px] object-center object-cover" src={agent.image} alt="" />
                        </div>
                        <div className="w-full">
                            <h3 className="mb-3 text-xl md:text-2xl font font-semibold font-roboto">{agent.agent_name}</h3>
                            <p className="text-xl font-eb font-medium">Company Agent at <span className="text-[#647295]">{agent.company}</span></p>
                            <hr className="my-6" />
                            <div>
                                <div className="flex flex-col lg:flex-row gap-2 md:gap-5">
                                    <div className="flex flex-col md:flex-row items-center gap-3 text-base bg-[#dcf0fa] p-3 rounded-md cursor-pointer">
                                        <FaPhone />
                                        <h2>Office:{agent.office_number}</h2>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row items-center gap-3 text-base bg-[#fadcf3] p-3 rounded-md cursor-pointer">
                                        <MdPhoneIphone />
                                        <h2>Mobile:{agent.mobile_number}</h2>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-3 text-base bg-[#f8fadc] p-3 rounded-md cursor-pointer overflow-auto">
                                    <MdEmail /> 
                                        <h2 className="overflow-x-auto">Email:{agent.email}</h2>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-6" />
                            <div className="flex justify-center lg:justify-start gap-5 items-center mt-6 text-2xl">
                            <FaFacebook className="text-blue-600" />
                            <FaTwitter className="text-blue-300" />
                            <FaLinkedin className="text-blue-900" />
                            <AiFillInstagram className="text-pink-700"/>
                            </div>
                            <div className="flex items-center gap-2 text-[#647295] font-semibold justify-end mt-12">
                                <p>{agent.total_listed_properties} Listed Properties</p>
                                <IoMdArrowDroprightCircle />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        );
        
    }
    else return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

export default Agents;