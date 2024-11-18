

  const Banner = () => {

  return (
    <div className="flex justify-center mb-10 md:mb-20">
      <div className="carousel w-full mx-auto">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
        
          src="https://i.ibb.co.com/yh82dzQ/pngtree-a-man-hiking-in-mountains-image-15868010.jpg"
          alt="Mountain Trek"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold">Mountain Treks</h1>
          <p className="text-lg md:text-2xl mt-4">
            Explore the breathtaking peaks and connect with nature on sustainable treks.
          </p>
          <button className="btn bg-transparent border-2 border-white  text-white text-xl mt-6">Learn More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-transparent border-2 border-white text-white text-xl">❮</a>
          <a href="#slide2" className="btn btn-circle bg-transparent border-2 border-white text-white text-xl">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/M17dqhf/hq720.jpg"
          alt="Ocean Dive"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold">Ocean Dives</h1>
          <p className="text-lg md:text-2xl mt-4">
            Dive into the crystal-clear waters and explore vibrant marine life responsibly.
          </p>
          <button className="btn bg-transparent border-2 border-white  text-white text-xl mt-6">Learn More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-transparent border-2 border-white text-white text-xl">❮</a>
          <a href="#slide3" className="btn btn-circle bg-transparent border-2 border-white text-white text-xl">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/KNmXTXf/wildlife-banner.jpg"
          alt="Wildlife Safari"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold">Wildlife Safaris</h1>
          <p className="text-lg md:text-2xl mt-4">
            Witness majestic wildlife while supporting conservation efforts.
          </p>
          <button className="btn bg-transparent border-2 border-white  text-white text-xl mt-6">Learn More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-transparent border-2 border-white text-white text-xl">❮</a>
          <a href="#slide1" className="btn btn-circle bg-transparent border-2 border-white text-white text-xl">❯</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
