import { BsCurrencyDollar } from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

import { IoBedOutline } from "react-icons/io5";

import { LuBath } from "react-icons/lu";

import { BsArrowsFullscreen } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleEstates = ({ data }) => {
    const { id, estate_title, price, status, image,description,bedrooms,bathrooms,parking } = data;

  useEffect(()=>{
    Aos.init();
},[])
    return (
        <div className="card  bg-white shadow-xl mt-8" data-aos="fade-right" data-aos-duration="1000">
      <figure className="relative h-[200px] md:h-[328px] rounded-md">
        <img className="rounded-md h-full w-[525px] hover:scale-110 transition duration-500 cursor-pointer object-cover"
          src={image}
          alt="Shoes"
        />
        <button className="btn-md absolute top-4 right-4 text-white bg-[#647295] rounded-lg">{status}</button>
      </figure>
      <div className="p-4">
        <h4 className="card-title font-roboto text-neutral-800 mb-2 text-xl font-medium">{estate_title}</h4>
        <p className="flex items-center text-lg mb-4"><BsCurrencyDollar /> {price.split('$')[1]}</p>
        <p className=" font-eb">{description.slice(0,100)}...</p>
        <div className="flex items-center gap-4 text-[#5C727D] font-eb my-3">
          <span className="flex items-center gap-2 text-base"><IoBedOutline />{bedrooms}</span>
          <span className="flex items-center gap-2 text-base"><LuBath />{bathrooms}</span>
          <span className="flex items-center gap-2 text-base"><BsArrowsFullscreen /> {parking}</span>
        </div>
        <div className="mt-4 text-center">
          <Link to={`/estate/${id}`} className="btn bg-[#647295] w-full text-white font-roboto">View Property</Link>
        </div>
      </div>
    </div>
    );
};

export default SingleEstates;