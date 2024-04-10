

const Banner = () => {
    return (
        <div className="carousel w-full mx-auto h-[95vh] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
        {/* <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div> */}
          <img src="/src/assets/slider2.avif" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div>
          <img src="/src/assets/slider1.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <div className="bg-gradient-to-b from-transparent to-black absolute inset-0"></div>
          <img src="/src/assets/slider3.jpeg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Banner;