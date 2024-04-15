import { AiOutlineBlock } from "react-icons/ai";
import { GiConvergenceTarget } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { HiOutlineTemplate } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineAreaChart } from "react-icons/md";
import { TbBuildingEstate } from "react-icons/tb";


const ProvidingSection = () => {
    return (
        <div className="my-10 md:my-16">
            <h3 className="text-2xl md:text-4xl font-roboto text-[#2B262D] font-semibold">What we providing</h3>
            <p className="text-xl font-eb mt-3">Nestled amidst pristine landscapes or perched atop breathtaking cliffs, luxurious houses epitomize opulence and refinement.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 box-border gap-8" >
                <div className="border border-[#E7DBD7] p-4 md:p-8 rounded-md   cursor-pointer shadow-lg">
                    <div className="w-10 h-10 shadow-md rounded-full bg-blue-200 flex items-center justify-center text-white text-xl font-semibold"><HiOutlineTemplate /></div>
                    <div className="space-y-3 mt-4">
                    <h3 className="text-xl md:text-2xl font-roboto text-[#2B262D] font-semibold">Premium Property Listings</h3>
                    <p className="text-lg text-[#000000B3] font-roboto  lg:h-[230px]"> Showcase a curated selection of luxury properties, including mansions, penthouses, villas, private islands, and estates. Each listing should feature detailed descriptions, high-quality images, and comprehensive information about the property's amenities, location, and pricing.</p>
                    <p className="text-base font-eb text-[#647295] font-semibold flex items-center gap-2">Read more <IoIosArrowForward /></p>
                    </div>
                </div>
                <div className="border border-[#E7DBD7] p-4 md:p-8 rounded-md   cursor-pointer shadow-lg">
                    <div className="w-10 h-10 shadow-md rounded-full bg-green-200 flex items-center justify-center text-white text-xl font-semibold"><AiOutlineBlock /></div>
                    <div className="space-y-3 mt-4">
                    <h3 className="text-2xl font-roboto text-[#2B262D] font-semibold">Spectacular Views</h3>
                    <p className="text-lg text-[#000000B3] font-roboto  lg:h-[230px]">Whether it's panoramic ocean views, city skylines, or sprawling countryside vistas, luxury homes often capitalize on their surroundings with strategically positioned windows, balconies, and outdoor living areas to maximize views.</p>
                    <p className="text-base font-eb text-[#647295] font-semibold flex items-center gap-2">Read more <IoIosArrowForward /></p>
                    </div>
                </div>
                <div className="border border-[#E7DBD7] p-4 md:p-8 rounded-md  cursor-pointer shadow-lg">
                    <div className="w-10 h-10 shadow-md rounded-full bg-red-200 flex items-center justify-center text-white text-xl font-semibold"><GiConvergenceTarget /></div>
                    <div className="space-y-3 mt-4">
                    <h3 className="text-2xl font-roboto text-[#2B262D] font-semibold">State-of-the-Art Amenities</h3>
                    <p className="text-lg text-[#000000B3] font-roboto  lg:h-[230px]">Luxurious houses often feature a wide range of amenities designed to enhance comfort and convenience. This may include gourmet kitchens with top-of-the-line appliances, home theaters, wine cellars, fitness centers, spa-like bathrooms, and smart home technology.</p>
                    <p className="text-base font-eb text-[#647295] font-semibold flex items-center gap-2">Read more <IoIosArrowForward /></p>
                    </div>
                </div>
                <div className="border border-[#E7DBD7] p-4 md:p-8 rounded-md   cursor-pointer shadow-lg">
                    <div className="w-10 h-10 shadow-md rounded-full bg-orange-200 flex items-center justify-center text-white text-xl font-semibold"><TbBuildingEstate /></div>
                    <div className="space-y-3 mt-4">
                    <h3 className="text-2xl font-roboto text-[#2B262D] font-semibold">Spacious Interiors</h3>
                    <p className="text-lg text-[#000000B3] font-roboto  lg:h-[230px]">Luxury homes typically boast expansive living spaces with high ceilings, open floor plans, and abundant natural light. Large rooms, including grand foyers, formal dining areas, and spacious bedrooms, contribute to the sense of opulence.</p>
                    <p className="text-base font-eb text-[#647295] font-semibold flex items-center gap-2">Read more <IoIosArrowForward /></p>
                    </div>
                </div>
                <div className="border border-[#E7DBD7] p-4 md:p-8 rounded-md   cursor-pointer shadow-lg">
                    <div className="w-10 h-10 shadow-md rounded-full bg-cyan-200 flex items-center justify-center text-white text-xl font-semibold"><MdOutlineAreaChart /></div>
                    <div className="space-y-3 mt-4">
                    <h3 className="text-2xl font-roboto text-[#2B262D] font-semibold">Outdoor Living Spaces</h3>
                    <p className="text-lg text-[#000000B3] font-roboto  lg:h-[230px]">Luxury homes often extend the living space outdoors with expansive decks, patios, and landscaped gardens. Outdoor amenities like swimming pools, hot tubs, outdoor kitchens, fire pits, and entertainment areas provide opportunities for relaxation and recreation.</p>
                    <p className="text-base font-eb text-[#647295] font-semibold flex items-center gap-2">Read more <IoIosArrowForward /></p>
                    </div>
                </div>
                <div className="border border-[#E7DBD7] p-4 md:p-8 rounded-md   cursor-pointer shadow-lg">
                    <div className="w-10 h-10 shadow-md rounded-full bg-pink-200 flex items-center justify-center text-white text-xl font-semibold"><GrShieldSecurity /></div>
                    <div className="space-y-3 mt-4">
                    <h3 className="text-2xl font-roboto text-[#2B262D] font-semibold">Privacy and Security</h3>
                    <p className="text-lg text-[#000000B3] font-roboto  lg:h-[230px]">Privacy is paramount in luxury real estate, with many properties offering gated entrances, security systems, and extensive landscaping to ensure exclusivity and tranquility for residents.</p>
                    </div>
                    <p className="text-base font-eb text-[#647295] font-semibold flex items-center gap-2">Read more <IoIosArrowForward /></p>
                </div>
            </div>
        </div>
    );
};

export default ProvidingSection;