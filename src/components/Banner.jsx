import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1)); 
  };

  return (
    <div className="flex justify-center mb-10 md:mb-20">
      <div className="carousel w-full h-[500px] mx-auto">
        {/* Slide 1 */}
        <div
        
          className={`carousel-item relative w-full ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/5Ty77g4/240-F-347393164-Fg9t4-Iw-NALGvp-Hn5y-DZDRr7-DWi7fxd-G2.jpg" 
            alt="Mountain Treks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-3xl md:text-5xl font-semibold">Mountain Treks</h1>
            <p className="text-lg md:text-2xl mt-4">
              Explore the breathtaking peaks and connect with nature on sustainable treks.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6">
              Learn More
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/M17dqhf/hq720.jpg" 
            alt="Ocean Dives"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-3xl md:text-5xl font-semibold">Ocean Dives</h1>
            <p className="text-lg md:text-2xl mt-4">
              Dive into the crystal-clear waters and explore vibrant marine life responsibly.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6">
              Learn More
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/KNmXTXf/wildlife-banner.jpg" 
            alt="Wildlife Safaris"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-3xl md:text-5xl font-semibold">Wildlife Safaris</h1>
            <p className="text-lg md:text-2xl mt-4">
              Witness majestic wildlife while supporting conservation efforts.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6">
              Learn More
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
