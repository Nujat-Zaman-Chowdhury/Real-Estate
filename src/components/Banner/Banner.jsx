

const Banner = () => {
    return (
       <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('bg3.avif')] h-[100vh] bg-cover bg-no-repeat bg-center  flex items-center">
        <div className="flex justify-center items-center gap-10 w-full px-8">
        <div className="w-[600px] text-white font-bold flex flex-col justify-center items-center">
          <h2 className="text-6xl font-playfair leading-tight">Experience Unparalleled Luxury with <span className="text-[#647295]">LuxuryLair</span></h2>
          <p className="mt-4 text-2xl leading-tight font-eb">We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes.</p>
        </div>
        <div className="carousel w-[500px]  mx-auto rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
        {/* <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div> */}
          <img src="/public/image1.avif" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        {/* <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div> */}
          <img src="/public/image2.avif" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        {/* <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div> */}
          <img src="/public/image3.avif" className="w-full object-cover" />
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