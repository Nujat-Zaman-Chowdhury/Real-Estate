import { BsCurrencyDollar } from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

import { IoBedOutline } from "react-icons/io5";

import { LuBath } from "react-icons/lu";

import { BsArrowsFullscreen } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleEstates = ({ data }) => {
    const { id, estate_title, price, status, image,description,bedrooms,bathrooms,parking } = data;

  useEffect(()=>{
    Aos.init();
},[])
    return (
        <div className="card bg-white shadow-sm mt-8 shadow-[#647295]" data-aos="fade-right" data-aos-duration="1000">
      <figure className="p-4 relative h-[200px] md:h-[328px] rounded-md">
        <img className="rounded-md h-full w-full hover:scale-105 transition duration-500 cursor-pointer object-cover"
          src={image}
          alt=""
        />
        <button className="btn border-0 absolute top-6 right-6 text-[#647295] bg-white rounded-lg">{status}</button>
      </figure>
      <div className="p-4">
        <h4 className="card-title text-[#526491] font-roboto mb-2 text-xl font-semibold">{estate_title}</h4>
        <p className="flex items-center text-gray-700 text-lg mb-4 font-medium"><BsCurrencyDollar /> {price.split('$')[1]}</p>
        <p className="font-playfair">{description.slice(0,100)}...</p>
        <div className="flex items-center gap-4 font-playfair my-3">
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
SingleEstates.propTypes = {

  data: PropTypes.object,
}