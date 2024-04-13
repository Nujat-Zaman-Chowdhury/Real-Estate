import {useLoaderData} from "react-router-dom"
import { FaPhone } from "react-icons/fa6";

import { MdPhoneIphone } from "react-icons/md";

import { MdEmail } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";

import { FaFacebook } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";

import { AiFillInstagram } from "react-icons/ai";


const Agents = () => {
    const agents = useLoaderData();
    console.log(agents);
    return (
        <div className="w-full md:max-w-7xl mx-auto mt-10">
            <h3 className="text-4xl font-roboto text-[#2B262D] font-semibold">Our Agents</h3>
            {
                agents.map(agent=>(
                    <div className="p-7 flex  flex-row  items-center gap-6 my-7 border rounded-lg shadow-lg" key={agent.id}>
                        <div>
                            <img className="rounded-md w-[260px] h-[230px] object-center object-cover" src={agent.image} alt="" />
                        </div>
                        <div>
                            <h3 className="mb-3 text-2xl font font-semibold font-roboto">{agent.agent_name}</h3>
                            <p className="text-xl font-eb">Company Agent at {agent.company}</p>
                            <hr className="my-6" />
                            <div>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-3 text-base">
                                        <FaPhone />
                                        <h2>Office:{agent.office_number}</h2>
                                    </div>
                                    <div className="flex items-center gap-3 text-base">
                                        <MdPhoneIphone />
                                        <h2>Mobile:{agent.mobile_number}</h2>
                                    </div>
                                    <div className="flex items-center gap-3 text-base">
                                    <MdEmail /> 
                                        <h2>Email:{agent.email}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start gap-2 items-center mt-6">
                            <FaFacebook />
                            <FaTwitter />
                            <FaLinkedin />
                            <AiFillInstagram />
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
};

export default Agents;