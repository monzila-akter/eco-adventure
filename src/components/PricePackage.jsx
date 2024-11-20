import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricePackage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <section className="mb-10 md:mb-24">
      <div className="w-11/12 px-5 md:px-12 mx-auto">
        {/* title section */}
        <h2
          className="text-5xl font-bold text-center text-lime-800 mb-12"
          data-aos="fade-down"
        >
          Adventure Packages
        </h2>

        {/* package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Ticket */}
          <div
            className="border-2 border-lime-800 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            {/* Card Header */}
            <div className="bg-lime-800 text-white text-center py-4">
              <h3 className="text-xl font-bold">Standard Ticket</h3>
            </div>
            {/* Card Body */}
            <div className="px-6 py-10 text-center">
              <p className="text-4xl font-bold text-gray-800 mt-7">$150</p>
              <p className="text-gray-600 mt-7">
                Enjoy a delightful experience with all basic facilities included.
              </p>
              <button className="mt-9 bg-lime-800 text-white px-6 py-2 rounded-full hover:bg-lime-900">
                Learn More
              </button>
            </div>
          </div>

          {/* Family Ticket */}
          <div
            className="border-2 border-lime-800 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Card Header */}
            <div className="bg-lime-800 text-white text-center py-4">
              <h3 className="text-xl font-bold">Family Ticket</h3>
            </div>
            {/* Card Body */}
            <div className="px-6 py-10 text-center">
              <p className="text-4xl font-bold text-gray-800 mt-7">$250</p>
              <p className="text-gray-600 mt-7">
                Perfect for families looking for a shared adventure together.
              </p>
              <button className="mt-9 bg-lime-800 text-white px-6 py-2 rounded-full hover:bg-lime-900">
                Learn More
              </button>
            </div>
          </div>

          {/* Business Ticket */}
          <div
            className="border-2 border-lime-800 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Card Header */}
            <div className="bg-lime-800 text-white text-center py-4">
              <h3 className="text-xl font-bold">Business Ticket</h3>
            </div>
            {/* Card Body */}
            <div className="px-6 py-10 text-center">
              <p className="text-4xl font-bold text-gray-800 mt-7">$400</p>
              <p className="text-gray-600 mt-7">
                Premium services for business groups and exclusive travelers.
              </p>
              <button className="mt-9 bg-lime-800 text-white px-6 py-2 rounded-full hover:bg-lime-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePackage;
