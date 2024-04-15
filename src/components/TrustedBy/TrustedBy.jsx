import Aos from "aos";
import { useEffect } from "react";


const TrustedBy = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
            <h2 className="text-2xl md:text-4xl font-roboto text-[#2B262D] font-semibold">Trusted By <span className="text-[#647295]">2000+</span> Businesses</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 w-full my-6 md:my-10" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-easing="linear"
        data-aos-duration="1000">
            <img className="p-4 cursor-pointer" src="https://ultra-agency.b-cdn.net/wp-content/uploads/sites/11/2023/08/Kyan.png" ></img>
            <img className="p-4 cursor-pointer" src="https://ultra-agency.b-cdn.net/wp-content/uploads/sites/11/2023/08/Nirastate.png"  alt="" ></img>
            <img className="p-4 cursor-pointer" src="https://ultra-agency.b-cdn.net/wp-content/uploads/sites/11/2023/08/Kanba.png" alt=""></img>
            <img className="p-4 cursor-pointer" src="https://ultra-agency.b-cdn.net/wp-content/uploads/sites/11/2023/08/Ztos.png"  alt=""></img>
            <img className="p-4 cursor-pointer" src="https://ultra-agency.b-cdn.net/wp-content/uploads/sites/11/2023/08/Treva.png"  alt=""></img>
            <img className="p-4 cursor-pointer" src="https://ultra-agency.b-cdn.net/wp-content/uploads/sites/11/2023/08/Goldline.png"  alt=""></img>
            <img className="p-4 cursor-pointer" src="https://ultra-agency.b-cdn.net/wp-content/uploads/sites/11/2023/08/Amara.png" alt="" />
        </div>
        </div>
    );
};

export default TrustedBy;