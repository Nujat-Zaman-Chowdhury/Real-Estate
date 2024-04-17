import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Carousel = ({children: slides, autoSlide= false, autoSlideInterval = 3000,}) => {
    const [curr, setCurr]= useState(0);
    const prev = ()=> setCurr((curr)=> (curr ===0 ? slides.length-1 :curr - 1))
    const next = ()=> setCurr((curr)=> (curr ===slides.length-1? 0 :curr + 1))

    useEffect(()=>{
        if(!autoSlide)  return
        const slideInterval = setInterval(next,autoSlideInterval)
        return ()=> clearInterval(slideInterval)
    })
    return (
       <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://i.ibb.co/b23FZqL/bg3.jpg')] h-full py-10 md:py-20 bg-cover bg-no-repeat bg-center  flex  items-center rounded-md md:rounded-none shadow-lg">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full px-4 md:px-8 py-0 lg:py-16">
        <div className="w-full h-full md:w-[600px] text-white font-bold flex flex-col text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-roboto">Experience Unparalleled Luxury with <span className="text-[#647295]">LuxuryLair</span></h2>
          <p className="mt-4 text-base md:text-xl font-roboto">We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes.</p>
          <div className="mt-6">
          <Link to="/contact" className="btn bg-[#647295] text-white font-semibold border-0">
              Make an Inquiry
          </Link>
          </div>
        </div>
         <div className='overflow-hidden relative w-full md:w-[600px] mx-auto rounded-lg'>
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev}>
                    <BiChevronLeft size={40} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"></BiChevronLeft>
                </button>
                <button onClick={next}>
                    <BiChevronRight size={40} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"></BiChevronRight>
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {
                        slides.map((_,i,index)=>(
                            <div key={index} className={`
                            transition-all w-3 h-3 bg-white rounded-full ${curr === i? "p-2" : "bg-opacity-50"}
                            `}>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Carousel;