import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLeaf } from "react-icons/fa";
import { FaGears, FaSuitcaseMedical } from "react-icons/fa6";

const Explore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,   
    });
  }, []);

  return (
    <section className="mb-10 md:mb-24">
      <div className="w-11/12 px-5 md:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div data-aos="fade-right">
          <h1 className="text-2xl md:text-5xl font-bold text-lime-800 mb-6 md:mb-8">
            Discover Extraordinary Eco-Adventures
          </h1>
          <p className="text-gray-600 leading-relaxed mb-9">
            Journey into the heart of nature with our carefully curated eco-friendly adventures. 
            From thrilling mountain treks to serene ocean dives, each experience is designed to 
            inspire and connect you with the beauty of the planet while preserving it for future generations.
          </p>
          {/* icons section */}
          <div className="flex space-x-12">
            {/* Icon 1 */}
            <div className="text-center flex flex-col justify-center items-center">
              <div
                className="text-lime-600 text-7xl  mb-3"
                data-aos="zoom-in"
              >
                <FaLeaf></FaLeaf>
              </div>
              <p className="font-semibold text-xl text-lime-800">Eco-Friendly</p>
            </div>
            {/* Icon 2 */}
            <div className="text-center flex flex-col justify-center items-center">
              <div
                className="text-red-400 text-7xl  mb-3"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <FaSuitcaseMedical></FaSuitcaseMedical>
              </div>
              <p className="font-semibold text-xl text-lime-800">Safety First</p>
            </div>
            {/* Icon 3 */}
            <div className="text-center flex flex-col justify-center items-center">
              <div
                className="text-gray-500 text-7xl mb-3"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <FaGears></FaGears>
              </div>
              <p className="font-semibold text-xl text-lime-800">Essential Gear</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative grid grid-cols-3 gap-4">
          {/* Top Left Image */}
          <div
            className="col-span-2 rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="https://i.ibb.co.com/fF90YvN/1-1.jpg"
              alt=""
              className="w-full h-56 object-cover transition-transform"
            />
          </div>
          {/* Top Right Image */}
          <div
            className="col-span-1 rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://i.ibb.co/17WW727/senderismo-glaciar-perito-moreno-589x392.jpg"
              alt=""
              className="w-full h-56 object-cover"
            />
          </div>
          {/* Bottom Image */}
          <div
            className="col-span-3 rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://i.ibb.co.com/HNkQgnc/Colorado-River-kayaking-1024x585.jpg"
              alt=""
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
