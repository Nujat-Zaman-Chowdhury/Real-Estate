import Carousel from "../Carousel/Carousel";


const Hero = () => {
    const slides = [
       "https://i.ibb.co/3rHqK94/image1.jpg" ,
       "https://i.ibb.co/18h5wBz/image2.jpg",
       "https://i.ibb.co/q9DRZT0/image3.jpg"
    ]
    return (
        <div>
            <div className="w-full">
                <Carousel >
                    {
                        slides.map((slide)=>(
                            <img key={slide} src={slide} alt="image" />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Hero;