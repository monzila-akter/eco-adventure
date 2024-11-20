import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const AdventureCard = ({ adventure }) => {
  const { title, image, ecoFriendlyFeatures, id } = adventure;

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="transition-transform hover:scale-105">
        <div
    data-aos="flip-right" 
    data-aos-delay="100" 
     className=" bg-white shadow-md p-6 border  rounded-lg">
      {/* Adventure Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />

      {/* Adventure Title */}
      <h2 className="text-lg font-bold text-lime-800 mb-2">{title}</h2>

      {/* Eco-Friendly Features */}
      <ul className="text-sm text-gray-600 mb-4">
        <p className="text-sm font-bold text-gray-700 mb-2">Eco Friendly Features:</p>
        {ecoFriendlyFeatures.map((feature, index) => (
          <li key={index} className="list-disc list-inside">
            {feature}
          </li>
        ))}
      </ul>

      {/* Explore Now Button */}
      <Link to={`/details/${id}`}><button className="btn btn-primary w-full bg-lime-800 hover:bg-green-700 text-white text-xl border-none">
        Explore Now
      </button></Link>
    </div>
    </div>
  );
};

export default AdventureCard;
