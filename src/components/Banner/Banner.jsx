import { Link } from "react-router-dom";
import 'animate.css';

const Banner = () => {
    return (
       <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://i.ibb.co/b23FZqL/bg3.jpg')] h-full py-10 md:py-20 bg-cover bg-no-repeat bg-center  flex  items-center rounded-md md:rounded-none shadow-lg">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full px-4 md:px-8 py-0 lg:py-16">
        <div className="w-full md:w-[600px] text-white font-bold flex flex-col text-center md:text-left">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-roboto leading-tight">Experience Unparalleled Luxury with <span className="text-[#647295]">LuxuryLair</span></h2>
          <p className="mt-4 text-base md:text-2xl font-roboto">We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes.</p>
          <div className="mt-6">
          <Link to="/contact" className="btn bg-[#647295] text-white font-semibold border-0">
              Make an Inquiry
          </Link>
          </div>
        </div>
        <div className="carousel w-full md:w-[500px]  mx-auto rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
        {/* <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div> */}
          <img src="image1.avif" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        {/* <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div> */}
          <img src="image2.avif" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        {/* <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div> */}
          <img src="image3.avif" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
        </div>
       </div>
    );
};

export default Banner;